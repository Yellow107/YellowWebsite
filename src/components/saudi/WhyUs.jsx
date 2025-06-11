import React from 'react'

const WhyUs = () => {
  return (
    <section className="w-full h-full bg-black" id="list">
      <div className="container pt-[5%] mobile:pt-[10%]  tablet:pt-[10%] bg-white">
        <div className="space-y-[8vw]">
          <div className="grid grid-cols-7 h-full gap-x-[3vw] gap-y-[7vw] mobile:flex mobile:flex-col tablet:flex-col tablet:flex tablet:gap-y-[5vw]">
            <div className="col-span-3 w-full h-full">
              <div className={`w-[50vw] fadeup rounded-xl overflow-hidden relative mobile:w-full mobile:h-[45vw] tablet:w-full tablet:h-[15vw]`}>
                <h3
                  data-para-anim
                  className="text-[2.5vw] w-[65%] font-display mb-[1.5vw] mobile:text-[9vw] mobile:mb-[5vw] tablet:text-[5vw] mobile:w-full"
                >
                  Why Choose a Branding Agency in Saudi Arabia?
                </h3>
              </div>
            </div>
            <div className="col-start-4 col-span-4 w-full mobile:mb-[7vw] tablet:mb-[3vw] font-medium">
              <div className="text-[1.2vw] mobile:mb-[2vw] tablet:mb-[2vw] space-y-[1.5vw] mobile:space-y-5 mobile:text-[4.5vw] tablet:text-[2.5vw]">
                <p data-para-anim>Your brand is your identity. It tells your story, builds trust, and makes customers remember you. Yellow is a top branding agency in Saudi Arabia that helps businesses grow their brand with confidence.</p>
                <p data-para-anim>As a leading creative branding agency in Riyadh and Saudi Arabia, we know the local culture and business trends. Our team creates custom strategies that work for Saudi markets. From startups to large companies, we give every brand the attention it deserves.</p>
                <div className=''>
                  <p data-para-anim>At Yellow, we:</p>
                  <ul className='pl-5 list-disc'>
                    <li data-para-anim>Build brand strategies that speak your values</li>
                    <li data-para-anim>Create designs that are fresh, clean, and eye-catching</li>
                    <li data-para-anim>Help you stay ahead of competitors with a strong image</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs