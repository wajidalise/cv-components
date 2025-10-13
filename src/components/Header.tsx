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
}

export const Header = ({ data, className = '' }: Props) => {
  return (
    <header className={cn('', className)}>
      <h1 className='text-[23px]  font-bold '>
        {data?.name}
      </h1>
      <p className='text-[13px] mb-4 text-blue-500'>{data?.title}</p>
      <div className='flex flex-col gap-2 text-[11px]'>
        <div className='flex gap-2'>
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
