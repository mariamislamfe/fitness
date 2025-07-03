'use client'

import {FaUsers} from 'react-icons/fa'
import {IoIosPricetags} from 'react-icons/io'
import {FaDumbbell} from 'react-icons/fa6'
import Achievements from './Achievements'

import {motion} from 'framer-motion'
import {fadeIn} from '@/lib/variants'

const featured = [
  {
    icon: <FaUsers />,
    title: 'award-winning trainers',
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  },
  {
    icon: <IoIosPricetags />,
    title: 'excellent prices',
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  },
  {
    icon: <FaDumbbell />,
    title: 'modern equipment',
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  },

];


const About = () => {
  return (
    <section className="pt-8 pb-14 lg:pt-16 lg:pb-28" id="about">
      <div className="container mx-auto">
       <div className='flex flex-col gap-2 items-center mb-8'>
        <motion.h2 
        variants={fadeIn('up', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
        className='h2 font-bold uppercase text-center'>
          About us
        </motion.h2>
        <motion.p
        variants={fadeIn('up', 0.6)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.2}}
        
        className='max-w-[600px] mx-auto text-center' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam et ipsum aspernatur repellendus</motion.p>
       </div>
       {/* featured items */}
       <motion.div 
       variants={fadeIn('up', 0.8)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.2}}
       className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
  {featured.map((feature, index) => (
<div className='flex flex-col justify-center items-center gap-4 border border-gray-200 p-10' key={index}>
        <div className='text-4xl bg-black text-white w-[80px] h-[80px]
      rounded-full flex justify-center items-center
      '>{feature.icon}</div>
    <div className=' flex flex-col justify-center items-center gap-2'>
      <h4 className='h4 uppercase font-bold text-red-700'>{feature.title}</h4>
      <p>{feature.subtitle}</p>
    </div>
    </div>
  ))}
</motion.div>
{/* achievements */}
<motion.div
variants={fadeIn('up', 1)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.2}}
>
<Achievements />
</motion.div>
      </div>
    </section>
  )
}

export default About