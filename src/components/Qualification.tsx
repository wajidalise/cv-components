import { cn } from "../lib/utils";

 

export interface QualificationData {
  title: string;
  description?: string;
}

interface QualificationCardProps {
  data: QualificationData[];
  title?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Qualification = ({ data, title, className = "" }: QualificationCardProps) => {
  return (
   <section className={cn("", className)}>
       <h1 className='uppercase text-sm font-medium border-b border-gray-300 pb-1'>
        {title}
      </h1> 
         <div className="space-y-1">
           {data?.map((item, i) =>  {
            return (
              <div key={i} className='space-y-1'>
                <h3 className="text-xs font-semibold text-primary mb-[1px]">{item.title}</h3>
                <p className="text-xs">{item.description}</p>
              </div>
            )
          })}
          </div>  
      </section>
  );
};
