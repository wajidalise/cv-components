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
      <div className='w-32 h-32 rounded-full overflow-hidden bg-white/10 border-4 border-white/20'>
        <img
          src={data?.image}
          alt='Chaudhary Shahnawaz Maqsood'
          className='w-full h-full object-cover'
        />
      </div>
    </div>
  );
};


