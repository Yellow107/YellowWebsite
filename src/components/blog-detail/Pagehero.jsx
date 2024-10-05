import React from 'react'
import Section from '../Section'

const Pagehero = (({ children }) => {
  return (
    <>
      <Section id='hero'>
        <div className='container pt-[8vw] mobile:relative tablet:pt-[15vw] mobile:pt-[25%]'>
          <div className='flex flex-col items-start justify-start'>
            {children}
          </div>
        </div>
        <div className='w-full h-[1px] bg-gray-500 mt-[4vw] lineDraw' />
      </Section>
    </>
  )
})

export default Pagehero


