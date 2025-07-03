'use client';

import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import Image from 'next/image';
import Link from 'next/link';
import CustomButton from './CustomButton';

import {motion} from 'framer-motion'
import {fadeIn} from '@/lib/variants'

const trainerData = [
  {
    image: '/assets/img/trainers/david.jpg',
    name: 'John Doe',
    role: 'body builder coach',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    social: [
      {icon: <FaFacebook />, link: '#'},
      {icon: <FaInstagram />, link: '#'},
      {icon: <FaTwitter />, link: '#'},
    ]
  },
  {
    image: '/assets/img/trainers/rosy.jpg',
    name: 'Rosy Rivera',
    role: 'body builder coach',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    social: [
      {icon: <FaFacebook />, link: '#'},
      {icon: <FaInstagram />, link: '#'},
      {icon: <FaTwitter />, link: '#'},
    ]
  },
  {
    image: '/assets/img/trainers/matt.jpg',
    name: 'Matt Stone',
    role: 'body builder coach',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    social: [
      {icon: <FaFacebook />, link: '#'},
      {icon: <FaInstagram />, link: '#'},
      {icon: <FaTwitter />, link: '#'},
    ]
  },
  {
    image: '/assets/img/trainers/sofia.jpg',
    name: 'Sofia Smith',
    role: 'body builder coach',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    social: [
      {icon: <FaFacebook />, link: '#'},
      {icon: <FaInstagram />, link: '#'},
      {icon: <FaTwitter />, link: '#'},
    ]
  },
]

const Team = () => {
  return (
    <section className='py-12 xl:h-[110vh]' id='team'>
      <div className="container mx-auto h-full flex flex-col items-center justify-center">
        <h2 className='h2 font-bold uppercase text-center mb-6'>Our Trainers</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12'>
          {trainerData.map((trainer, index) => (
            <motion.div 
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.2}}
              key={index}
              className='flex flex-col items-center text-center'
            >
              <div className='relative w-[320px] h-[360px] mx-auto mb-4'>
                <Image 
                  src={trainer.image} 
                  fill 
                  alt={trainer.name}
                  className='object-cover'
                />
              </div>
              <h4 className='h4 mb-2 font-bold uppercase'>{trainer.name}</h4>
              <p className='uppercase text-xs tracking-[3px] mb-2'>{trainer.role}</p>
              <p className='mb-6 max-w-[320px] mx-auto'>{trainer.description}</p>
              <div className='flex gap-12 justify-center'>
                {trainer.social.map((social, index) => (
                  <Link 
                    href={social.link} 
                    key={index}
                    className='hover:text-red-700 transition-all'
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <CustomButton 
          text='See all trainers' 
          containerStyles='w-[196px] h-[62px]' 
        />
      </div>
    </section>
  )
}

export default Team