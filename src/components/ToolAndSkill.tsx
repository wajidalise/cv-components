// ToolAndSkill.tsx
import { Fragment } from 'react/jsx-runtime';
import { cn } from '../lib/utils';

interface ToolAndSkillProps {
  data: {
    title: string;
    skills: string[];
  }[];
  title: string;
  className?: string;
   titleClassName?: string;
  subtitleClassName?: string;
  paragraphClassName?: string;
}

export const ToolAndSkill = ({ data, title, className, titleClassName, subtitleClassName, paragraphClassName }: ToolAndSkillProps) => {
  return (
    <section className={cn('mt-3', className)}>
      <h2 className={cn(' uppercase border-b pb-1', titleClassName)}>
        {title}
      </h2>

     <div className='mt-1'>
       {data?.map((item: { title: string; skills: string[] }, i: number) => {
        return (
          <div
            key={i}
            className='mb-3 '
          >
            <h3 className={cn('mb-3 ', subtitleClassName)}>
              {item.title}
            </h3>
            <div className={cn('flex flex-wrap gap-2', paragraphClassName)}>
              {item?.skills?.map((skill, idx) => (
                <Fragment key={skill}>
                  {idx > 0 && <span>•</span>}
                  <span className=''>{skill}</span>
                </Fragment>
              ))}
            </div>
          </div>
        );
      })}
     </div>
    </section>
  );
};
