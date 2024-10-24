import Image from "next/image";
import { useKeenSlider } from "keen-slider/react"
import 'keen-slider/keen-slider.min.css';

const BrandsMarquee = () => {

  const Card = ({ src }) => {
    return (
      <div className="col-span-1 relative h-full backdrop-blur-md overflow-hidden flex justify-center items-center rounded-[1vw] bg-gradient-to-br from-[#35333350] to-[#24242420] to-45% border border-white/25">
        <Image
          loading="lazy"
          priority={false}
          width={100}
          height={100}
          className="h-full w-full object-cover absolute pointer-events-none"
          alt="Image Texture"
          src="/assets/images/clients/texture.png"
        />
        <Image
          className="object-cover w-full h-full mobile:scale-[1.1]"
          alt="client img"
          loading="lazy"
          src={src}
          quality={100}
          priority={false}
          fill
        />
      </div>
    )
  }

  const Clients = [
    "/assets/images/clients/logo/barakat.svg",
    "/assets/images/clients/logo/cafu.svg",
    "/assets/images/clients/logo/pan-home.svg",
    "/assets/images/clients/logo/oasis.svg",
    "/assets/images/clients/logo/mitsubishi.svg",
    "/assets/images/clients/logo/emaar.svg",
    "/assets/images/clients/logo/oli-oli.svg",
    "/assets/images/clients/logo/hattan.svg",
    "/assets/images/clients/logo/masafi.svg",
    "/assets/images/clients/logo/alokozay.svg",
    "/assets/images/clients/logo/virtuzone.svg",
    "/assets/images/clients/logo/ovasave.svg",
    "/assets/images/clients/logo/fine-arts.svg",
    "/assets/images/clients/logo/sufra.svg",
    "/assets/images/clients/logo/maveroc.svg",
    "/assets/images/clients/logo/clement.svg",
    "/assets/images/clients/logo/beema.svg",
    "/assets/images/clients/logo/numu.svg",
    "/assets/images/clients/logo/ned.svg",
    "/assets/images/clients/logo/luma.svg",
  ]

  const animation = { duration: 4000, easing: (t) => t }

  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 5, spacing: 10 },
      },
      "(max-width: 540px)": {
        slides: { perView: 3, spacing: 5 },
      },
    },
    slides: {
      perView: 5,
      spacing: 30,
    },
    created(s) {
      s.moveToIdx(-1, false, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs - 1, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs - 1, true, animation)
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider h-fit w-full fadein">
      {Clients.map((client, index) => (
        <div key={index} className='keen-slider__slide h-[18vw] mobile:h-[32vw] tablet:h-[16vw]'>
          <Card src={client} />
        </div>
      ))}
    </div>
  )
}

export default BrandsMarquee;
