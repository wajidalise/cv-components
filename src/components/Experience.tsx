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
}

export const Experience = ({ data, title, className = '' }: Props) => {
  return (
    <div className={cn('', className)}>
      <h1 className='uppercase text-sm font-medium border-b border-gray-300 pb-1'>{title}</h1>
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className='space-y-1'
          >
            {/* Header */}
            <div className='flex justify-between gap-4 mt-1'>
              <div className='flex-1'>
                <h3 className='text-xs font-semibold text-primary mb-[1px] '>
                  {item.title}
                </h3>
                <p className='text-xs font-semibold text-blue-500'>{item.company}</p>
              </div>
              <div className='flex flex-col text-xs text-primary'>
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
                  <span className='text-xs text-primary flex-1'>
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
