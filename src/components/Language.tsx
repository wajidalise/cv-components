import { cn } from '../lib/utils';
 

export const Language = ({
  data,
  title,
  className,
}: {
  data: { language: string; level: string }[];
  title: string;
  className?: string;
}) => {
  return (
    <section className={cn('mb-8', className)}>
      <h2 className='text-lg font-bold mb-4 tracking-wide border-b border-white/30 pb-2'>
        {title}
      </h2>
      <div className='space-y-2 text-[13px]'>
        {data?.map((item, i) => {
          return (
            <div
              key={i}
              className='flex justify-between'
            >
              <span>{item.language}</span>
              <span className=''>{item.level}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};
