'use client'

import CountUp from 'react-countup';
import { FaBriefcase, FaClock, FaTrophy } from 'react-icons/fa';
import { ImUsers } from 'react-icons/im';
import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';

interface StatItem {
  number: number;
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}

const stats: StatItem[] = [
  {
    number: 19,
    icon: FaBriefcase,
    text: 'training courses',
  },
  {
    number: 879,
    icon: FaClock,
    text: 'working hours',
  },
  {
    number: 150,
    icon: ImUsers,
    text: 'happy customers',
  },
  {
    number: 9,
    icon: FaTrophy,
    text: 'international awards',
  },
];

const statsContainerVariant: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 0.5,
      ease: "linear", // تم التصحيح هنا
    }
  }
};

const statsItem: Variants = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { 
      duration: 0.5, 
      ease: "easeOut" // تم التصحيح هنا (بدلاً من مصفوفة الأرقام)
    }
  }
};

const StatItem = ({ item }: { item: StatItem }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      variants={statsItem}
      className="flex flex-col items-center p-6 bg-white/10 rounded-lg"
    >
      <div className='border border-red-700/90 w-[140px] h-[140px] mx-auto rounded-full p-1 mb-6'>
        <div ref={ref} className='border border-red-700/30 w-full h-full flex items-center justify-center text-5xl rounded-full'>
          {isInView && (
            <CountUp
              start={0}
              end={item.number}
              duration={6}
            />
          )}
        </div>
      </div>
      <div className='flex flex-col justify-center items-center text-center'>
        <item.icon className="text-3xl mb-2" />
        <h4 className="h4 font-bold uppercase">{item.text}</h4>
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          variants={statsContainerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((item, index) => (
            <StatItem key={index} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;