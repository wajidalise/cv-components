import { cn } from '../lib/utils';

export interface QualificationData {
  title: string;
  description?: string;
}

interface QualificationCardProps {
  data: QualificationData[];
  title?: string;
  className?: string;
  style?: React.CSSProperties;
   titleClassName?: string;
  subtitleClassName?: string;
  paragraphClassName?: string;
}

export const Qualification = ({
  data,
  title,
  className = '',
  titleClassName,
  subtitleClassName,
  paragraphClassName
}: QualificationCardProps) => {
  return (
    <section className={cn('mt-3', className)}>
      <h1 className={cn(' uppercase border-b border-gray-300 pb-1', titleClassName)}>
        {title}
      </h1>
      <div className='space-y-2 mt-1'>
        {data?.map((item, i) => {
          return (
            <div
              key={i}
              className=''
            >
              <h3 className={cn('mb-[1px] ', subtitleClassName)}>
                {item.title}
              </h3>
              <p className={cn('', paragraphClassName)}>
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
