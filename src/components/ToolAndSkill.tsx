import { Fragment } from 'react/jsx-runtime';
import { cn } from '../lib/utils';

interface ToolAndSkillProps {
  data: {
    title: string;
    skills: string[];
  }[];
  title: string;
  className?: string;
}

export const ToolAndSkill = ({ data, title, className }: ToolAndSkillProps) => {
  return (
    <section className={cn('mb-8', className)}>
      <h2 className='text-lg font-bold mb-4 tracking-wide border-b border-white/30 pb-2'>
        {title}
      </h2>

      {data?.map((item: { title: string; skills: string[] }, i: number) => {
        return (
          <div
            key={i}
            className='mb-6'
          >
            <h3 className='font-semibold text-sm mb-3'>{item.title}</h3>
            <div className=' flex flex-wrap gap-2 text-xs'>
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
    </section>
  );
};
