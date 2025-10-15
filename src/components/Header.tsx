
// Header.tsx
import { cn } from '../lib/utils';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

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

export const Header = ({ data, className = '', titleClassName, subtitleClassName, paragraphClassName  }: Props) => {
  return (
    <header className={cn('', className)}>
      <h1 className={(cn("", titleClassName))}>
        {data?.name}
      </h1>
      <h2 className={(cn("mb-4", subtitleClassName))}>{data?.title}</h2>
      <div  className={(cn("flex flex-col gap-2", paragraphClassName))}>
        <div className='flex gap-2 '>
            <a
          href='tel:+4915754291140'
          className='flex items-center gap-2  transition-colors'
        >
          <Phone className='w-4 h-4 text-gray-500' />
          {data?.phone}
        </a>
        <a
          href='mailto:cmsmaqsood@gmail.com'
          className='flex items-center gap-2  transition-colors'
        >
          <Mail className='w-4 h-4 text-gray-500' />
          {data?.email}
        </a>
        </div>
        <a
          href='https://www.linkedin.com/in/mshahnawaz973'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-2  transition-colors'
        >
          <Linkedin className='w-4 h-4 text-gray-500' />
          {data?.linkedin}
        </a>
        <span className='flex items-center gap-2'>
          <MapPin className='w-4 h-4 text-gray-500' />
          {data?.location}
        </span>
      </div>
    </header>
  );
};
