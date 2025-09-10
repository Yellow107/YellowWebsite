import Image from 'next/image';

const FeaturedImage = ({ className="object-cover", alt, src,title,sizes }) => {

  return (
    <div className='w-full h-[45vw] relative rounded-[10px] overflow-hidden mb-[3vw] fadeup mobile:h-[60vh] tablet:w-full'>
        <Image className={className} alt={alt?alt:`${title} image`} src={src} sizes={sizes} fill quality={100} priority={true} />
    </div>
  )
};

export default FeaturedImage;