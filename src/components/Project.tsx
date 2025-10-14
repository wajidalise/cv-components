import { Calendar } from 'lucide-react';
import { cn } from '../lib/utils';

export interface Data {
  title: string;
  subtitle?: string;
  location: string;
  period: string;
  description?: string;
  descriptions: string[];
}

interface Props {
  data: Data[];
  title?: string;
  className?: string;
  style?: React.CSSProperties;
  titleClassName?: string;
  subtitleClassName?: string;
  paragraphClassName?: string;
}

export const Project = ({
  data,
  title,
  className = '',
  titleClassName,
  subtitleClassName,
  paragraphClassName,
}: Props) => {
  return (
    <div className={cn('mt-3', className)}>
      <h1
        className={cn(
          ' uppercase border-b border-gray-300 pb-1',
          titleClassName,
        )}
      >
        {title}
      </h1>
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className='space-y-1'
          >
            {/* Header */}
            <div className='flex justify-between gap-4 mt-1'>
              <div className='flex-1'>
                <h3 className={cn('mb-[1px] ', subtitleClassName)}>
                  {item.title}
                </h3>
                <p className={cn('', paragraphClassName)}>{item.location}</p>
              </div>
              <div className={cn('flex flex-col ', paragraphClassName)}>
                <div className='flex items-center gap-2'>
                  <Calendar className='size-3' />
                  <span>{item.period}</span>
                </div>
              </div>
            </div>
            <em className={cn('', paragraphClassName)}>{item.description}</em>

            {/* Responsibilities */}
            <ul className={cn('', paragraphClassName)}>
              {item.descriptions?.map((items, i) => (
                <li
                  key={i}
                  className='flex items-center  gap-3'
                >
                  <span className=''>•</span>
                  <span className={cn('flex-1 ')}>{items}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
