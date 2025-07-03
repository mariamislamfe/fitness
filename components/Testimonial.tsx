'use client'
import Image from 'next/image'
import { FaQuoteLeft } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/variants'

import {Swiper, SwiperSlide} from 'swiper/react' 
import {Pagination} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const testimonialData = () => [
  {
    img: '/assets/img/testimonial/lucy.jpg',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    name: 'Lucy Smith',
  },
  {
    img: '/assets/img/testimonial/michael.jpg',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    name: 'Michael Smith',
  },
  {
    img: '/assets/img/testimonial/maria.jpg',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    name: 'Mariam Islam',
  },
  {
    img: '/assets/img/testimonial/lucy.jpg',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    name: 'Lucy Smith',
  },
  {
    img: '/assets/img/testimonial/michael.jpg',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    name: 'Michael Smith',
  },
  {
    img: '/assets/img/testimonial/maria.jpg',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    name: 'Mariam Islam',
  },
]

const Testimonial = () => {
  return (
    <section className='py-12 xl:py-28' id='testimonial'>
      <div className="container mx-auto">
        <motion.h2 
        variants={fadeIn('up', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.2}}
        className='h2 text-center font-bold uppercase'>Our Testimonials </motion.h2>
        <motion.div variants={fadeIn('up', 0.6)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.2}}>
          <Swiper 
          slidesPerView={1}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{clickable: true}}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30
            },
          }}
          className='h-[320px]'>
            {testimonialData().map((person, index) => (
              <SwiperSlide className='h-full' key={index}>
                <div 
                  className='flex flex-col gap-6 items-center text-center justify-center
                  h-full
                  '
                >
                  <Image src={person.img} alt={person.name} width={90} height={90}
                  className='rounded-full border-2 border-red-700'
                   />
                   <div>
                    <FaQuoteLeft className='text-2xl text-gray-300' />
                    <p className='max-w-[380px] mb-4'>{person.message}</p>
                    <span className='text-red-700 text-2xl'>-{person.name}</span>
                   </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonial