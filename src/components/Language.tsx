// Language.tsx
import { cn } from '../lib/utils';

export const Language = ({
  data,
  title,
  className,
  titleClassName,
  paragraphClassName,
}: {
  data: { language: string; level: string }[];
  title: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  paragraphClassName?: string;
}) => {
  return (
    <section className={cn('mt-3', className)}>
      <h2 className={cn(' uppercase border-b pb-1', titleClassName)}>
        {title}
      </h2>
      <div className='space-y-2 mt-1'>
        {data?.map((item, i) => {
          return (
            <div
              key={i}
              className='flex justify-between '
            >
              <span className='text-[11.9px] font-rubik font-normal'>
                {item.language}
              </span>
              <span className={cn('', paragraphClassName)}>{item.level}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};
