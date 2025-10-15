// AboutUs.tsx
import { cn } from '../lib/utils';

export const AboutUs = ({
  data,
  title,
  className,
  titleClassName, 
  paragraphClassName
}: {
  data: { description: string };
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
      <p className={cn('text-justify mt-1 ', paragraphClassName)}>
        {data?.description}
      </p>
    </section>
  );
};
