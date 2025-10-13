import { cn } from "../lib/utils";


export const AboutUs = ({ data, title, className }: { data: { description: string}; title: string; className?: string }) => {
  return (
    <section className={cn('', className)}>
      <h2 className='text-[18px] font-bold text-start mb-4  border-b border-white/30 pb-2 uppercase'>
        {title}
      </h2>
      <p className='text-[13px] text-justify'>
        {data?.description}
      </p>
    </section>
  );
};
 
