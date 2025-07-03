'use client'
import Image from 'next/image';
import Link from 'next/link';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
} from 'react-icons/fa';
import CustomButton from './CustomButton';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-black pt-24 text-white">
      <div className='container mx-auto pb-24'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-4'>
          {/* Logo and Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='flex flex-col gap-6'
          >
            <Link href='#' className='hover:opacity-80 transition'>
              <Image 
                src={'/assets/img/logo.png'} 
                width={117} 
                height={55} 
                alt='Company Logo'
              />
            </Link>
            <p className='text-gray-300 max-w-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quae ipsum, ad consectetur consequatur quas aut.
            </p>
            <ul className='flex flex-col gap-4'>
              <li className='flex items-start gap-4'>
                <FaMapMarkerAlt className='text-xl text-red-600 mt-1' />
                <span>Elmahalla Elkobra, Egypt</span>
              </li>
              <li className='flex items-center gap-4'>
                <FaPhoneAlt className='text-xl text-red-600' />
                <span>01123094983</span>
              </li>
              <li className='flex items-center gap-4'>
                <FaEnvelope className='text-xl text-red-600' />
                <span>mariamislam.stem26@gmail.com</span>
              </li>
              <li className='flex items-center gap-4'>
                <FaClock className='text-xl text-red-600' />
                <span>Mon-Fri: 9AM - 6PM</span>
              </li>
            </ul>
          </motion.div>

          {/* Recent Blog Posts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='flex flex-col gap-6'
          >
            <h4 className='text-2xl font-bold text-white mb-2'>Recent Posts</h4>
            <div className='flex flex-col gap-4'>
              {[1, 2, 3].map((post) => (
                <Link 
                  href='#' 
                  key={post} 
                  className='group flex gap-4 items-start hover:text-red-500 transition'
                >
                  <div className='w-16 h-16 bg-gray-800 rounded overflow-hidden'>
                    <Image 
                      src={`/assets/img/blog/post${post}.jpg`} 
                      width={64} 
                      height={64} 
                      alt={`Blog post ${post}`}
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <div>
                    <h5 className='font-medium group-hover:text-red-500'>Blog Post Title {post}</h5>
                    <p className='text-sm text-gray-400'>March 20, 2023</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='flex flex-col gap-6'
          >
            <h4 className='text-2xl font-bold text-white mb-2'>Quick Links</h4>
            <ul className='flex flex-col gap-3'>
              {['Home', 'About', 'Services', 'Pricing', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <Link 
                    href='#' 
                    className='text-gray-300 hover:text-red-500 transition flex items-center gap-2'
                  >
                    <span className='w-2 h-2 bg-red-500 rounded-full'></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='flex flex-col gap-6'
          >
            <h4 className='text-2xl font-bold text-white mb-2'>Newsletter</h4>
            <p className='text-gray-300'>
              Subscribe to our newsletter to get updates about our services and offers.
            </p>
            <form className='flex flex-col gap-4'>
              <input 
                type="email" 
                placeholder='Your Email' 
                className='bg-gray-800 text-white px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500'
              />
              <CustomButton 
                text='Subscribe' 
                containerStyles='bg-red-600 hover:bg-red-700 text-white'
              />
            </form>
            <div className='flex gap-4 mt-4'>
              <Link href='#' className='text-2xl text-gray-400 hover:text-red-500 transition'>
                <FaFacebook />
              </Link>
              <Link href='#' className='text-2xl text-gray-400 hover:text-red-500 transition'>
                <FaInstagram />
              </Link>
              <Link href='#' className='text-2xl text-gray-400 hover:text-red-500 transition'>
                <FaTwitter />
              </Link>
              <Link href='#' className='text-2xl text-gray-400 hover:text-red-500 transition'>
                <FaEnvelope />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Copyright */}
      <div className='border-t border-gray-800 py-6'>
        <div className='container mx-auto px-4 text-center text-gray-400'>
          <p>&copy; {new Date().getFullYear()} Websity. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer