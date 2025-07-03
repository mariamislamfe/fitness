'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, Variants } from 'framer-motion'

interface BrandImage {
  src: string
  href: string
}

const brandImages: BrandImage[] = [
  {
    src: '/assets/img/brands/brand-1.png',
    href: "",
  },
  {
    src: '/assets/img/brands/brand-2.png',
    href: "",
  },
  {
    src: '/assets/img/brands/brand-3.png',
    href: "",
  },
  {
    src: '/assets/img/brands/brand-4.png',
    href: "",
  },
  {
    src: '/assets/img/brands/brand-5.png',
    href: "",
  },
]

const brandContainerVariant: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.4, 
      ease: 'linear'
    }
  }
}

const brandItem: Variants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" // تم تغيير مصفوفة الأرقام إلى قيمة معتمدة
    }
  }
}

const Brands = () => {
  return (
    <section className='py-8' id='contact'>
      <div className="container mx-auto">
        <motion.div 
          variants={brandContainerVariant}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='grid grid-cols-2 lg:grid-cols-5 py-8' 
        >
          {brandImages.map((img, index) => (
            <motion.div 
              variants={brandItem}
              key={index}
            >
              <Link href={img.href} className='group'>
                <Image
                  className='opacity-50 hover:opacity-100 transition-all mx-auto' 
                  src={img.src} 
                  width={204} 
                  height={106} 
                  alt={`Brand ${index + 1}`}
                  priority={index < 3} // تحسين أداء تحميل الصور
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Brands