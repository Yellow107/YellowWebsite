// components/career/Listing.jsx
import React from 'react';
import Section from '../Section';
import Link from 'next/link';

export default function Listing({ jobs }) {
  // Accept either an array OR an object with { jobs: [] }
  const list = Array.isArray(jobs?.jobs) ? jobs.jobs : (Array.isArray(jobs) ? jobs : []);

  return (
    <Section id='essentials' className='bg-body text-white dark'>
      <div className='container py-[7%] mobile:py-[15%] tablet:py-[10%]'>
        <h2 data-title-anim className='text-[4.2vw] font-display mb-[2vw] mobile:text-[10vw] mobile:mb-[5vw] tablet:text-[6vw] '>
          Open positions
        </h2>
        <p data-para-anim className='text-[1.4vw] font-medium w-[30%] mb-[5vw] mobile:w-full mobile:text-[4.5vw] mobile:mb-[12vw] tablet:text-[2vw] tablet:w-[70%]'>
          As a digital branding agency, we help businesses connect with their customers by using a variety of tools and services.
        </p>

        <div className='w-full h-full flex flex-col gap-y-[2vw] mobile:gap-y-[4vw] tablet:gap-y-[3vw]'>
          {list.length > 0 ? (
            list.map((job) => (
              <div key={job?.slug} className='fadeup'>
                <Link
                  href={`/careers/${job?.slug ?? ''}`}
                  className='w-full grid grid-cols-4 h-[10vw] bg-transparent border-[1px] group border-white text-white rounded-[15px] py-[2vw] px-[3vw] justify-between items-center hover:bg-white hover:text-black hover:drop-shadow-2xl hover:shadow-xl transition-all ease duration-500 mobile:h-[20vw] mobile:flex tablet:h-[15vw]'
                >
                  <h3 data-para-anim className='col-start-1 text-[1.9vw] font-medium mobile:text-[4.5vw] tablet:text-[2.5vw] '>
                    {job?.title ?? '—'}
                  </h3>
                  <p data-para-anim className='col-start-2 text-[1.6vw] text-center mobile:hidden tablet:text-[2.5vw]'>
                    {job?.jobFields?.location ?? ''}
                  </p>
                  <p data-para-anim className='col-start-3 text-[1.6vw] text-center mobile:hidden tablet:text-[2.5vw]'>
                    {job?.jobFields?.jobType ?? ''}
                  </p>
                  <div className='col-start-4 flex justify-end'>
                    <div className='cursor-pointer relative block text-[1.2vw] w-fit h-fit bg-white text-body border border-white group-hover:text-white transition-all duration-700 ease-link py-[0.8vw] px-[1.2vw] mobile:px-[4vw] mobile:py-[2.5vw] rounded-full font-medium group overflow-hidden tablet:py-[1.5vw]'>
                      <span className='absolute block w-full h-full scale-y-0 bg-body group-hover:scale-y-100 left-0 top-0 origin-bottom transition-all duration-700 ease-link' />
                      <div className='overflow-hidden flex items-center gap-[0.5vw] w-full relative mobile:gap-[2vw]'>
                        <span data-text='Apply Now' className='relative inline-block after:content-[attr(data-text)] after:absolute after:top-[105%] after:left-0 group-hover:translate-y-[-105%] transition-transform duration-700 ease-link after:block mobile:text-[3.5vw] tablet:text-[2vw]'>Apply Now</span>
                        <svg className="relative -rotate-[135deg] w-[1.1vw] h-[1.1vw] overflow-hidden mobile:w-[5vw] mobile:h-[5vw] tablet:w-[2.5vw] tablet:h-[2.5vw]" width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path className="origin-center -translate-y-[110%] scale-0 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-700 ease-link" d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z" fill="currentColor" />
                          <path className="origin-center group-hover:scale-0 group-hover:translate-y-[110%] transition-all duration-700 ease-link" d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p>No openings right now.</p>
          )}
        </div>
      </div>
    </Section>
  );
}
