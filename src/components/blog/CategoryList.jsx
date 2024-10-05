import { categoryPathBySlug } from '@/lib/categories';
import Link from 'next/link';

const CategoryList = ({ categories, activeCategory, setActiveCategory }) => {
  const categoriesArray = Array.isArray(categories) ? categories : categories?.categories || [];
  const filteredCategories = categoriesArray.filter((category) => category.name !== 'All');

  return (
    <div className='flex gap-[1.5vw] flex-wrap w-full h-fit mb-[2vw] mobile:mb-[8vw] fadeup'>
      <Link key={"all"} href="/blog" onClick={() => setActiveCategory('all')} className={`group overflow-hidden relative text-body border hover:text-white transition-all duration-300 ease-out border-body rounded-full px-[1.5vw] text-[1.3vw] py-[0.3vw] leading-[1.3] tablet:text-[2.2vw] tablet:px-[2.2vw] tablet:py-[0.6vw] mobile:text-[4vw] mobile:px-[5vw] mobile:py-[0.7vw] ${activeCategory === 'all' ? 'bg-body text-white hover:animate-none' : ''}`}>
        <span className='leading-[1.4] relative z-[1]'>All</span>
        <span className="w-full h-full absolute bottom-0 left-0 block group-hover:scale-y-[1] origin-bottom transition-all duration-300 ease-out bg-body scale-y-0" />
      </Link>
        {filteredCategories.map((category) => (
          <Link key={category.slug} href={categoryPathBySlug(category.slug)} onClick={() => setActiveCategory(category.slug)} className={`group overflow-hidden relative border hover:text-white transition-all duration-300 ease-out border-body rounded-full px-[1.5vw] text-[1.3vw] py-[0.3vw] leading-[1.3] text-body tablet:text-[2.2vw] tablet:px-[2.2vw] tablet:py-[0.6vw] mobile:text-[4vw] mobile:px-[3vw] mobile:py-[0.7vw] ${activeCategory === category.slug ? 'hover:animate-none bg-body text-white' : ''}`}>
            <span className='leading-[1.4] relative z-[1]'>{category.name}</span>
            <span className="w-full h-full absolute bottom-0 left-0 block group-hover:scale-y-[1] origin-bottom transition-all duration-300 ease-out bg-body scale-y-0" />
          </Link>
        ))}
    </div>
  );
};

export default CategoryList;
