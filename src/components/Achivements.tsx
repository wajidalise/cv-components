import { BookOpenText, GraduationCap, University } from 'lucide-react';
import { cn } from '../lib/utils';


interface Props {
  data: {
    title: string;
    description: string;
    icon?: React.ReactElement;
  }[];
  title: string;
  classNmae?: string;
}
  
const icons = [
    <GraduationCap className='w-6 h-6' />,
    <University className='w-6 h-6' />,
    <BookOpenText className='w-6 h-6' />
]

 
export const Achivements = ({ data, title, classNmae }: Props) => {
  return (
    <section className={cn('', classNmae)}>
      <h2 className='text-lg font-bold mb-4 tracking-wide border-b pb-2 uppercase'>
        {title}
      </h2>
      <div className='space-y-3 text-sm'>
        {data?.map((item, i) => {
            item = {...item, icon: icons[i] }
          return (
          <div key={i} className='flex gap-2'>
             {item.icon}
            <div>
              <h3 className='font-semibold mb-1'>{item.title}</h3>
              <p className='text-xs leading-relaxed'>{item.description}</p>
            </div>
          </div>
        )})}
      </div>
    </section>
  );
};
