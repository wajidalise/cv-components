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
    <div className={cn("flex justify-center mt-2", className)}>
      <div className='w-28 h-28 rounded-full overflow-hidden '>
        <img
          src={data?.image}
          alt='Chaudhary Shahnawaz Maqsood'
          className='w-full h-full object-cover'
        />
      </div>
    </div>
  );
};


