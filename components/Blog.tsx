'use client';

import {Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import CustomButton from './CustomButton';
import SwiperNavButtons from './SwiperNavButtons';  
import Image from 'next/image'; 

import {motion} from 'framer-motion';
import { fadeIn } from '@/lib/variants';
import Link from 'next/link';

const blogData = [
  {
    img: '/assets/img/blog/post1.jpg',
    data: 'march 20, 2023',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    href: '',
  },
  {
    img: '/assets/img/blog/post2.jpg',
    data: 'march 20, 2023',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    href: '',
  },
  {
    img: '/assets/img/blog/post3.jpg',
    data: 'march 20, 2023',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    href: '',
  },
  {
    img: '/assets/img/blog/post4.jpg',
    data: 'march 20, 2023',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    href: '',
  },
  {
    img: '/assets/img/blog/post1.jpg',
    data: 'march 20, 2023',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    href: '',
  },
  {
    img: '/assets/img/blog/post2.jpg',
    data: 'march 20, 2023',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    href: '',
  },
  {
    img: '/assets/img/blog/post3.jpg',
    data: 'march 20, 2023',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    href: '',
  },
  {
    img: '/assets/img/blog/post4.jpg',
    data: 'march 20, 2023',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    href: '',
  },
];

const Blog = () => {
  return (
    <section className='bg-black text-white py-24' id='achievements'>
      <div className="container mx-auto">
        <motion.h2 
        variants={fadeIn('up', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.2}}
        className='h2 font-bold uppercase text-center mb-6'>Achievements</motion.h2>
        <motion.div
        variants={fadeIn('up', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.2}}>
          <Swiper slidesPerView={1} spaceBetween={30}
          breakpoints={{ 768: { slidesPerView: 2,
            spaceBetween: 15
           }, 1024: { slidesPerView: 3,
           
            },
            1400:{
              slidesPerView: 4
            },
            }}
            className='h-[420px] md:max-w-[660px] lg:max-w-none mb-8'
            >
            {blogData.map((post, index) => (
              <SwiperSlide key={index}>
                <div className='flex flex-col justify-start h-full max-w-[320px] mx-auto'>
                  <Image src={post.img} width={320} height={266} alt='' className='mb-6' />
                  <div className='flex flex-col items-start'>
                    <p className='max-w-[380px] uppercase text-[12px] tracking-[3px] mb-1'>{post.data}</p>
                    <Link href={post.href} className=' hover:text-red-700 transition-all duration-300'>
                    <h5 className='h5 font-bold uppercase mb-6'>{post.title}</h5>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <SwiperNavButtons containerStyles='absolute left-0 right-0 bottom-[16rem]
            w-full max-w-[371px] sm:max-w-[620] md:max-w-[960px] xl:max-w-[1320px] mx-auto z-50 
            flex justify-between gap-1
            ' btnStyles='bg-red-700 text-white w-[56px] h-[56px] flex justify-center items-center hover:bg-red-700/50
            transition-all duration-300
            ' iconStyles='text-2xl' />
          </Swiper>
        </motion.div>
        <motion.div 
        variants={fadeIn('up', 0.8)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.2}}
        >
          <CustomButton containerStyles='block w-[196px] h-[62px] mx-auto' text='View all' />
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;