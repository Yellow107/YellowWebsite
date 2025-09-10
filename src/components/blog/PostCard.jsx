import Image from "next/image";
import { formatDate } from "@/lib/datetime";
import { postPathBySlug } from "@/lib/posts";
import Link from "next/link";

const PostCard = (({ post }) => {

    return (
        <div className='col-span-1 h-full group cardfade'>
            <Link href={postPathBySlug(post.slug)} key={post.id} className="hover:shadow-2xl h-full w-full block transition-all duration-500 border border-black/40 rounded-[10px] overflow-hidden">
                <div className='h-[16vw] w-full relative mobile:h-[60vw] tablet:h-[25vw] overflow-hidden'>
                    <Image src={post.featuredImage.sourceUrl} className="scale-[1.05] group-hover:scale-100 object-cover transition-all duration-300" alt={`${post.title} image`} fill sizes={post.featuredImage.sizes} />
                </div>
                <div className='w-full h-full px-[1.5vw] pt-[1.5vw] py-[3vw] flex flex-col gap-[2vw] mobile:gap-[3vw] mobile:py-[7vw] mobile:px-[5vw]'>
                    <h3 className='text-[1.5vw] font-display leading-[1.3] mobile:text-[6vw] tablet:text-[3vw]'>{post.title}</h3>
                    <p className='text-[1vw] font-medium mobile:text-[4vw] tablet:text-[2vw]'>{formatDate(post.date)}</p>
                    <div className='text-[1vw] flex gap-[0.5vw] mobile:text-[3vw] mobile:gap-[2vw] tablet:text-[2vw] tablet:gap-[1vw]'>
                        {post.categories && post.categories.slice(0, 2).map((item, idx) => (
                            <span key={idx} className='px-[0.7vw] border-[1px] border-black border-opacity-60 rounded-[50px] mobile:px-[2.5vw] tablet:px-[1.4vw] tablet:py-[0.3vw] mobile:py-[1vw]'>{item.name}</span>
                        ))}
                        {/* {post.categories[1] && (
                            <span className='px-[0.7vw] border-[1px] border-black border-opacity-60 rounded-[50px] mobile:px-[2.5vw] tablet:px-[1.4vw] tablet:py-[0.3vw] mobile:py-[1vw]'>{post.categories[1].name}</span>
                        )}
                        {post.categories[2] && (
                            <span className='px-[0.7vw] border-[1px] border-black border-opacity-60 rounded-[50px] mobile:px-[2.5vw] tablet:px-[1.4vw] tablet:py-[0.3vw] mobile:py-[1vw]'>{post.categories[2].name}</span>
                        )} */}
                    </div>
                    <div className={`cursor-pointer flex w-fit relative text-[1.4vw] gap-[0.5vw] items-center font-medium mobile:gap-[2vw] tablet:text-[2.5vw] mobile:text-[5.5vw]`}>
                        <span className="relative after:absolute after:block after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-current after:transition-all after:duration-500 after:ease-out group-hover:after:scale-x-0">Read Article</span>
                        <svg className="relative -rotate-[135deg] w-[1.4vw] h-[1.4vw] overflow-hidden mobile:w-[5.5vw] mobile:h-[5.5vw] tablet:w-[2.5vw] tablet:h-[2.5vw]" width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="origin-center -translate-y-[110%] scale-0 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out" d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z" fill="currentColor" />
                            <path className="origin-center group-hover:scale-0 group-hover:translate-y-[110%] transition-all duration-500 ease-out" d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z" fill="currentColor" />
                        </svg>
                    </div>
                </div>
            </Link>
        </div>

    )
})

export default PostCard;