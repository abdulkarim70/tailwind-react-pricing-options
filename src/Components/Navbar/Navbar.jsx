import React, { useState } from 'react';
import Link from './Link';
import { Menu, X} from 'lucide-react';

const routes = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "About",
    path: "/about"
  },
  {
    id: 3,
    name: "Services",
    path: "/services"
  },
  {
    id: 4,
    name: "Contact",
    path: "/contact"
  },
  {
    id: 5,
    name: "Profile",
    path: "/profile/101"
  }
];




const Navbar = () => {
const [open, setOpen]=useState(false)
const links =routes.map(route=><Link key={route.id} route={route}></Link>)
    return (
   
<nav className='flex justify-between mx-5 my-3.5'>
   <span className='flex' onClick={()=>setOpen(!open)}> 
 {open?<X className='md:hidden'></X>:<Menu className='md:hidden'></Menu>}
   
   <ul className='md:hidden'>
    {links}
   </ul>
    <h3 className='ml-4'>My Navbar</h3></span>

    <ul className='  hidden md:flex '>
        {
            links
        }
    </ul>
    <button className='btn btn-primary'>Sign In</button>
</nav>




        
        
    );
};

export default Navbar;