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
    titleClassName?: string;
  subtitleClassName?: string;
  paragraphClassName?: string;
}

const icons = [
  <GraduationCap className='w-5 h-5' />,
  <University className='w-5 h-5' />,
  <BookOpenText className='w-5 h-5' />,
];

export const Achivements = ({ data, title, classNmae, titleClassName, subtitleClassName, paragraphClassName }: Props) => {
  return (
    <section className={cn('mt-3', classNmae)}>
      <h2 className={cn(' uppercase border-b pb-1', titleClassName)}>
        {title}
      </h2>
      <div className='space-y-3 mt-1'>
        {data?.map((item, i) => {
          item = { ...item, icon: icons[i] };
          return (
            <div
              key={i}
              className='flex gap-2'
            >
              {item.icon}
              <div>
                <h3 className={cn('mb-[1px] ', subtitleClassName)}>
                  {item.title}
                </h3>
                <p className={cn('', paragraphClassName)}>
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
