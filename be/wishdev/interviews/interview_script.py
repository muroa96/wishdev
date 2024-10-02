import faiss

from langchain_openai import ChatOpenAI
from langchain_openai.embeddings import OpenAIEmbeddings
from langchain.chains import ConversationalRetrievalChain
from langchain.memory import ConversationBufferMemory
from langchain_community.vectorstores import FAISS
from langchain_community.document_loaders import TextLoader
from langchain.text_splitter import CharacterTextSplitter


class AIInterviewService:
    def __init__(self):
        self.llm = ChatOpenAI(model_name="gpt-4o-mini", temperature=0.7)
        self.memory = ConversationBufferMemory(
            memory_key="chat_history", return_messages=True
        )
        self.embeddings = OpenAIEmbeddings()
        self.vectorstore = self.initialize_vectorstore()
        self.qa = ConversationalRetrievalChain.from_llm(
            self.llm, self.vectorstore.as_retriever(), memory=self.memory
        )

    def initialize_vectorstore(self):
        # 면접 관련 데이터 로드
        loader = TextLoader(
            "be/wishdev/interviews/data/question_list.txt", encoding="utf-8"
        )
        documents = loader.load()
        text_splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=0)
        texts = text_splitter.split_documents(documents)
        return FAISS.from_documents(texts, self.embeddings)

    def conduct_interview(self, user_input):
        result = self.qa({"question": user_input})
        return result["answer"]

    def reset_interview(self):
        self.memory.clear()

    def generate_feedback(self):
        chat_history = self.memory.chat_memory.messages
        context = "\n".join([f"{m.type}: {m.content}" for m in chat_history])
        feedback_prompt = f"""
        Based on the following interview conversation, provide a comprehensive feedback for the candidate.
        Consider technical knowledge, communication skills, problem-solving abilities, and areas for improvement.

        Interview conversation:
        {context}

        Feedback:
        """
        result = self.qa({"question": feedback_prompt})
        return result["answer"]


def test_interview():
    service = AIInterviewService()

    print(
        "AI: 안녕하세요. 개발자 면접에 오신 것을 환영합니다. 먼저 자기소개와 함께 지원하신 포지션에 대해 말씀해 주세요."
    )

    while True:
        user_input = input("You: ")
        if user_input.lower() == "exit":
            break

        response = service.conduct_interview(user_input)
        print(f"AI: {response}")

        # 면접 종료 조건 체크 (예: 특정 키워드 포함 여부)
        if "면접을 마치겠습니다" in response:
            break

    # 면접 종료 및 피드백
    print("\nAI: 면접이 종료되었습니다. 전체적인 피드백을 드리겠습니다.")
    feedback = service.generate_feedback()
    print(f"피드백: {feedback}")


if __name__ == "__main__":
    test_interview()
