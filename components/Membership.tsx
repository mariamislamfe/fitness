'use client'

import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/variants'
import MembershipSlider from './MembershipSlider'

const Membership = () => {
  return (
    <motion.section 
      variants={fadeIn('up', 0.2)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.2}}
      className='py-8 xl:py-0 lg:h-[95vh] relative before:w-full before:h-full before:bg-black/50 before:absolute before:top-0
      before:left-0 before:z-10 ' 
      id='prices'
      style={{
        backgroundImage: 'url(/assets/img/membership/bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className='container mx-auto px-0 text-white h-full flex flex-col xl:pt-24 relative z-20'>
        <motion.h2 
        variants={fadeIn('up', 0.4)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.2}}
        className='h2 font-bold uppercase text-center mb-8'>Membership</motion.h2>
        <motion.div
        variants={fadeIn('up', 0.6)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.2}}
        >
          <MembershipSlider />
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Membership