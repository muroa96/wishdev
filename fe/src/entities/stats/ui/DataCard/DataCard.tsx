import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CardProps = React.ComponentProps<typeof Card>;

interface DataProps {
  title: string;
  description?: string;
  content: React.ReactNode;
}

interface DataCardProps extends CardProps {
  data?: DataProps;
  className?: string;
}

export function DataCard({ data, className, ...props }: DataCardProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
        <CardDescription>Card Description</CardDescription>
      </CardContent>
    </Card>
  );
}
