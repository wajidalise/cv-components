// Experience.tsx
import { Calendar, MapPin } from 'lucide-react';
import { cn } from '../lib/utils';

export interface Data {
  title: string;
  company: string;
  location: string;
  period: string;
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

export const Experience = ({ data, title, className = '', titleClassName, subtitleClassName, paragraphClassName }: Props) => {
  return (
    <div className={cn('mt-3', className)}>
      <h1 className={cn(' uppercase border-b border-gray-300 pb-1', titleClassName)}>
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
                <p className='text-[11.9px] font-rubik text-blue-500'>
                  {item.company}
                </p>
              </div>
              <div className={cn('flex flex-col ', paragraphClassName)} >
                <div className='flex items-center gap-2'>
                  <Calendar className='size-3' />
                  <span>{item.period}</span>
                </div>
                <div className='flex items-center gap-2'>
                  <MapPin className='size-3' />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>

            {/* Responsibilities */}
            <ul className=''>
              {item.descriptions?.map((items, i) => (
                <li
                  key={i}
                  className='flex items-center  gap-3'
                >
                  <span className='text-primary '>•</span>
                  <span className='text-[10.2px] font-inter font-normal text-primary flex-1'>
                    {items}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
