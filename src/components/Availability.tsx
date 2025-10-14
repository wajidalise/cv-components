import { cn } from '../lib/utils';

interface Props {
  data: {
    description: string;
  };
  title: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  paragraphClassName?: string;
}
export const Availability = ({ data, title, className, titleClassName, paragraphClassName }: Props) => {
  return (
    <section className={cn('mt-3', className)}>
      <h2 className={cn(' uppercase border-b border-gray-300 pb-1', titleClassName)}>
        {title}
      </h2>
      <p className={cn('mt-1', paragraphClassName)}>
        {data?.description}
      </p>
    </section>
  );
};
