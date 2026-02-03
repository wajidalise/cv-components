// ProfilePhoto.tsx
import { cn } from '../lib/utils'; 

interface Props {
  data: {
    image: string;
};
  className?: string;
}

export const ProfilePhoto = ({ data, className = '' }: Props) => {
  return (
    <div className={cn("flex justify-center", className)}>
      <div className='w-24 h-24 rounded-full overflow-hidden '>
        <img
          src={data?.image}
          alt='Chaudhary Shahnawaz Maqsood'
          className='w-full h-full object-cover'
        />
      </div>
    </div>
  );
};


