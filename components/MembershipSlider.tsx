'use client'
import {MdClose} from 'react-icons/md'
import {FaCheck} from 'react-icons/fa6'

import CustomButton from './CustomButton'

import {Swiper, SwiperSlide} from 'swiper/react' 

import {Pagination} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const membershipData = [
    {
        title: 'Standard',
        price: 400,
        benefits: [
            {
                icon: <FaCheck />,
                text: 'Lorem ipsum dolor .'
            },
            {
                icon: <FaCheck />,
                text: 'Lorem ipsum dolor '
            },
            {
                icon: <MdClose />,
                text: 'Lorem ipsum dolor'
            },
            {
                icon: <FaCheck />,
                text: 'Lorem ipsum dolor'
            },
            {
                icon: <MdClose />,
                text: 'Lorem ipsum dolor'
            },
            {
                icon: <FaCheck />,
                text: 'Lorem ipsum dolor'
            },
            {
                icon: <MdClose />,
                text: 'Lorem ipsum dolor'
            },
        ]
    },
    {
        title: 'Ultimate',
        price: 600,
        benefits: [
            {
                icon: <FaCheck />,
                text: 'Lorem ipsum dolor .'
            },
            {
                icon: <FaCheck />,
                text: 'Lorem ipsum dolor '
            },
            {
                icon: <FaCheck />,
                text: 'Lorem ipsum dolor'
            },
            {
                icon: <FaCheck />,
                text: 'Lorem ipsum dolor'
            },
            {
                icon: <MdClose />,
                text: 'Lorem ipsum dolor'
            },
            {
                icon: <FaCheck />,
                text: 'Lorem ipsum dolor'
            },
            {
                icon: <MdClose />,
                text: 'Lorem ipsum dolor'
            },
        ]
    },
    {
        title: 'Professional',
        price: 1000,
        benefits: [
            {
                icon: <FaCheck />,
                text: 'Lorem ipsum dolor .'
            },
            {
                icon: <FaCheck />,
                text: 'Lorem ipsum dolor '
            },
            {
                icon: <FaCheck />,
                text: 'Lorem ipsum dolor'
            },
            {
                icon: <FaCheck />,
                text: 'Lorem ipsum dolor'
            },
            {
                icon: <FaCheck />,
                text: 'Lorem ipsum dolor'
            },
            {
                icon: <FaCheck />,
                text: 'Lorem ipsum dolor'
            },
            {
                icon: <FaCheck   />,
                text: 'Lorem ipsum dolor'
            },
        ]
    },
    
]

const MembershipSlider = () => {
  return (
    <Swiper slidesPerView={1} modules={[Pagination]} pagination={{clickable: true}}
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
    className='min-h-[680px]'
    >
      {membershipData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='border border-red-700 hover:bg-black/50 transition-all duration-300 w-full max-w-sm xl:max-w-none mx-auto'>
              <div className='py-5 px-[60px] border-b border-red-700'>
                <h4 className='h4 font-bold uppercase'>{item.title}</h4>
              </div>
              <div className='py-[30px] px-[60px]'>
              <ul className='flex flex-col gap-5 mb-7'>
                {item.benefits.map((benefit, index) => {
                  return (
                    <li className='flex items-center gap-2' key={index} >
                      <span className='text-lg text-red-700'>{benefit.icon}</span>
                     {benefit.text}
                    </li>
                  )
                })}
              </ul>
              <p className='text-red-700 mb-8 flex gap-1 items-center'>
                <sup className='text-3xl'>EGP</sup>
                <strong className='text-6xl'>{item.price}</strong>
                <em className='self-end text-2xl'>/month</em>
              </p>
              <CustomButton containerStyles='w-[196px] h-[62px]'
              text='Buy Now'
              />
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
export default MembershipSlider