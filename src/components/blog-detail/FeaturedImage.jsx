import Image from 'next/image';

const FeaturedImage = ({ className="object-cover", alt, src,title,sizes }) => {

  return (
    <div className='w-full aspect-video relative rounded-[10px] overflow-hidden mb-[3vw] tablet:w-full'>
        <Image className={className} alt={alt?alt:`${title} image`} src={src} fill quality={100} priority={true} />
    </div>
  )
};

export default FeaturedImage;
