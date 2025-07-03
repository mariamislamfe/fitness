'use client';

import {Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import CustomButton from './CustomButton'
import SwiperNavButtons from './SwiperNavButtons'   


import {motion} from 'framer-motion'
import { fadeIn } from '@/lib/variants';


const HeroSlider = () => {
  return (
    <Swiper className='h-full'>
      <SwiperSlide>
        <div className='h-full flex justify-end pt-48 '>
        <div className='flex flex-col items-center lg:items-start lg:max-w-[700px]'>
            <motion.h1 
            variants={fadeIn('up', 0.4)}
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.2}} 
            className='uppercase h1 text-center lg:text-left mb-2 font-bold'><span>Where hard</span> work meets success</motion.h1>
            <motion.p 
            variants={fadeIn('up', 0.6)}
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.2}}
            className='text-white italic text-center lg:text-left mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi autem, quod voluptatum dolores maxime consectetur aperiam illo excepturi harum quaerat esse, quidem quos. Delectus, consequuntur tenetur. Voluptatibus reiciendis qui enim?
            </motion.p>
            <motion.div
            variants={fadeIn('up', 0.8)}
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.2}}
            >
        <CustomButton text='Get started' containerStyles='w-[196px] h-[62px] bg-red-300'/>
            </motion.div>
        </div>
        </div>
      </SwiperSlide>
      {/* Second slide */}
      <SwiperSlide>
        <div className='h-full flex justify-end pt-48 '>
        <div className='flex flex-col items-center lg:items-start lg:max-w-[700px]'>
            <motion.h1 
            variants={fadeIn('up', 0.4)}
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.2}}
            className='uppercase h1 text-center lg:text-left mb-2 font-bold'><span>Where hard</span> work meets success</motion.h1>
            <motion.p 
            variants={fadeIn('up', 0.6)}
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.2}}
            className='text-white italic text-center lg:text-left mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi autem, quod voluptatum dolores maxime consectetur aperiam illo excepturi harum quaerat esse, quidem quos. Delectus, consequuntur tenetur. Voluptatibus reiciendis qui enim?
            </motion.p>
            <motion.div
            variants={fadeIn('up', 0.8)}
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.2}}
            >

        <CustomButton text='Get started' containerStyles='w-[196px] h-[62px] bg-red-300'/>
            </motion.div>
        </div>
        </div>
      </SwiperSlide>
      
      {/* buttons */}
      <SwiperNavButtons containerStyles='absolute bottom-2 lg:bottom-0 right-0 h-[130px] w-full lg:w-[700px] z-50 flex justify-center lg:lustify-start gap-1'
       btnStyles='border border-red-700 text-white w-[56px] h-[56px] flex justify-center items-center hover:bg-red-700 transition-all duration-300'
       iconStyles='text-2xl' />

    </Swiper>
  )
}

export default HeroSlider