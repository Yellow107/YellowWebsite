import Image from 'next/image';

const FeaturedImage = ({ className="object-cover", alt, src, sizes }) => {

  return (
    <div className='w-full h-[45vw] relative rounded-[10px] overflow-hidden mb-[3vw] fadeup mobile:h-[60vh] tablet:w-full'>
        <Image className={className} alt={alt} src={src} fill sizes={sizes} quality={100} priority={true} />;
    </div>
  )
};

export default FeaturedImage;