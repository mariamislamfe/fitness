'use client'

import {Link as ScrollLink} from 'react-scroll';
import { useMediaQuery } from 'react-responsive';


const Links =[
    {name: 'home', target: 'home', offset: -100},
    {name: 'about', target: 'about', offset: -80},
    {name: 'class', target: 'class', offset: -80},
    {name: 'team', target: 'team', offset: 0},
    {name: 'prices', target: 'prices', offset: -40},
    {name: 'testimonial', target: 'testimonial', offset: -0},
    {name: 'achievements', target: 'achievements', offset: -0},
    {name: 'contact', target: 'contact', offset: 0},
]

const MobileNav = ({containerStyles}: {containerStyles: string}) => {
    const isMobile = useMediaQuery({
        query: '(max-width: 640px)'
    })
  return (
    <nav className={`${containerStyles}`}>
         {Links.map((link, index) => {
                    return( <ScrollLink 
                    offset={link.offset}
                     to={link.target} 
                     smooth 
                     spy 
                     activeClass={`${isMobile && 'active'}`}
                     className='cursor-pointer hover:text-red-700 transition-all' 
                     key={index}
                     >
                        {link.name}
                     </ScrollLink>
                );
            })} 
    </nav>
  )
}

export default MobileNav