// Header.tsx
import { cn } from '../lib/utils';
import { Phone, MapPin, Link2, AtSign } from 'lucide-react';

export interface Data {
  name: string;
  title: string;
  description?: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  location?: string;
}

interface Props {
  data: Data;
  title?: string;
  className?: string;
  style?: React.CSSProperties;
  titleClassName?: string;
  subtitleClassName?: string;
  paragraphClassName?: string;
}

export const Header = ({
  data,
  className = '',
  titleClassName,
  subtitleClassName,
  paragraphClassName,
}: Props) => {
  return (
    <header className={cn('', className)}>
      <h1 className={cn('uppercase', titleClassName)}>{data?.name}</h1>
      <h2 className={cn('mb-2', subtitleClassName)}>{data?.title}</h2>
      <div className={cn('flex flex-col ', paragraphClassName)}>
        <div className='flex gap-2 '>
          <a
            href='tel:+4915754291140'
            className='flex items-center gap-2  transition-colors'
          >
            <Phone className='w-3 h-3 text-gray-500' />
            {data?.phone}
          </a>
          <a
            href='mailto:cmsmaqsood@gmail.com'
            className='flex items-center gap-2  transition-colors'
          >
            <AtSign className='w-3 h-3 text-gray-500' />
            {data?.email}
          </a>
        </div>
        <a
          href='https://www.linkedin.com/in/mshahnawaz973'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-2  transition-colors'
        >
          <Link2 className='w-3 h-3 text-gray-500' />
          {data?.linkedin}
        </a>
        <span className='flex items-center gap-2'>
          <MapPin className='w-3 h-3 text-gray-500' />
          {data?.location}
        </span>
      </div>
    </header>
  );
};
