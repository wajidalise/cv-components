import { cn } from '../lib/utils';

interface Props {
  data: {
    description: string;
  };
  title: string;
  className?: string;
}
export const Availability = ({ data, title, className }: Props) => {
  return (
    <section className={cn(className)}>
      <h2 className='uppercase text-sm font-medium border-b border-gray-300 pb-1'>
        {title}
      </h2>
      <p className='text-sm'>{data?.description}</p>
    </section>
  );
};
