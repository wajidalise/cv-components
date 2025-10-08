import { Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export interface QualificationData {
  title: string;
  description?: string;
}

interface QualificationCardProps {
  data: QualificationData;
  className?: string;
  style?: React.CSSProperties;
}

export const Qualification = ({ data, className = "", style }: QualificationCardProps) => {
  return (
    <Card className={`border-border hover:shadow-lg transition-all duration-300 ${className}`} style={style}>
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-lg bg-secondary/10 flex-shrink-0">
            <Award className="h-5 w-5 text-secondary" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-foreground mb-1">{data.title}</h4>
            {data.description && (
              <p className="text-sm text-muted-foreground">{data.description}</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
