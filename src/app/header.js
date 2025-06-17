'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { RiMenu2Fill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { List, Dropdown } from 'flowbite-react';
import { Button, Drawer } from 'antd';
import Image from "next/image";
import Mobilemenu from "./mobilemenu"
import { usePathname } from 'next/navigation';
export default function Example({activeSection}) {
    const [open1, setOpen] = useState(false);

    const [scroll, setScroll] = useState(false);


    const pathname = usePathname()

    const handle = () =>{

      if(window.scrollY > 0){
        setScroll(true)
      }
      else{
        setScroll(false)
      }
    }


    useEffect(()=>{
      window.addEventListener('scroll',handle)

      return ()=>  window.removeEventListener('scroll',handle)
    },[])
   


    const scrollToSection = (id, event) => {
      event.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    
      setTimeout(() => {
        window.location.href = event.target.href;
      }, 500);
    };


  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (

             <Disclosure as="nav" className={` py-2  px-10 sticky top-0  ${scroll ? 'bg-white' :'bg-[#fbf9f4]'} z-20 transition duration-300`}>
      {({ open }) => (
        <>
  
        <div className="sticky top-0 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-gray-500">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 -left-12 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button onClick={showDrawer} className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
 
                    <RiMenu2Fill className="block h-6 w-6" aria-hidden="true" />
                
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 lg:flex-none items-center justify-center lg:items-stretch lg:justify-start">
                <div className="flex flex-shrink-0 items-center ">
                  <a href='/'>
                  <Image
              src="/logo.webp"
              alt="landingpress"
              className="dark:invert hidden lg:block"
              width={139}
              height={60}
              priority
            />
                  </a>
           
                </div>
              </div>
              <div className="hidden sm:ml-6 lg:block">
                  <div className="flex space-x-3">

                  <List unstyled horizontal>
                    <List.Item className={`text-gray-900 duration-300 group-hover:text-white  ${activeSection === 0 ?"border-b-orange-500":"border-b-[#fbf9f4]"} hover:text-orange-500  hover:font-medium  rounded  px-2 py-2 font-medium`}><Link href="/#first" onClick={(event) => scrollToSection('first', event)}>Company</Link></List.Item>
                    <List.Item className={`text-gray-900 duration-300 group-hover:text-white  ${activeSection === 1 ?"border-b-orange-500":"border-b-[#fbf9f4]"} hover:font-medium  hover:text-orange-500 rounded   px-2 py-2 font-medium`}> <Link href='/#second' onClick={(event) => scrollToSection('second', event)}>Solution</Link></List.Item>
                    <List.Item className={`text-gray-900 duration-300 group-hover:text-white  ${activeSection === 2 ?"border-b-orange-500":"border-b-[#fbf9f4]"} hover:font-medium  hover:text-orange-500 rounded   px-2 py-2 font-medium`}><Link href="/#third" onClick={(event) => scrollToSection('third', event)}>Pricing</Link></List.Item>
                    <List.Item className={`text-gray-900 duration-300 group-hover:text-white  ${activeSection === 3 ?"border-b-orange-500":"border-b-[#fbf9f4]"} hover:font-medium  hover:text-orange-500 rounded   px-2 py-2 font-medium`}>  <Link href="/#fifth" onClick={(event) => scrollToSection('fifth', event)}>Resources</Link></List.Item>
                    <List.Item className={`text-gray-900 duration-300 group-hover:text-white  ${activeSection === 4 ?"border-b-orange-500":"border-b-[#fbf9f4]"} hover:font-medium  hover:text-orange-500 rounded   px-2 py-2 font-medium`}> <Link href="/#sixth" onClick={(event) => scrollToSection('sixth', event)} >Contact</Link></List.Item>
    {/* <List.Item>
    {/* <List.Item>

    <Dropdown dismissOnClick={false} trigger='hover' renderTrigger={() => <span className={`duration-300 group text-gray-500 rounded hover:text-violet-500 px-2 py-2 font-medium cursor-pointer flex items-center`}>Pages <IoIosArrowDown className='ms-1'/> </span>}>
          
    <li className="list-none group">
          <Dropdown.Item as={Link} className='group-hover:bg-gray-100 group-hover:text-red-600' href="/feedback">Feedback</Dropdown.Item>
     </li>

     <li className="list-none group">
          <Dropdown.Item as={Link} className='group-hover:bg-gray-100 group-hover:text-red-600' href="/usefullink">Useful Link</Dropdown.Item>
      </li>

    </Dropdown>
    
    </List.Item> */}

    {/* <Link href="/gallery"><List.Item className={`text-gray-900 duration-300 group-hover:text-white text-${ pathname == '/gallery' ? 'blue-600':'gray-500'} hover:text-violet-500  hover:font-medium  rounded  px-2 py-2 font-medium`}>Gallery</List.Item></Link> */}

        
        </List>
                  </div>
                </div>

<div className='gap-2 flex' >
<button class="relative h-12 w-36 overflow-hidden border border-[#E9BB71] text-[#E9BB71] shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#E9BB71] before:duration-300 before:ease-out hover:text-black rounded hover:shadow-[#E9BB71] hover:before:h-40 hover:before:w-40 hover:before:opacity-80">
      <span class="relative z-10"> Free consultation </span>
    </button>

    <button class="before:ease relative h-12 w-40 overflow-hidden rounded border border-[#295C51] bg-[#295C51] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-[#295C51] hover:before:-translate-x-40">
      <span relative="relative z-10"> Let&#39;s connect</span>
    </button>
</div>
     
               
            </div>
          </div>
      
         
          {/* <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-500 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel> */}


<Drawer title={<Image
              src="/logo.webp"
              alt="landingpress"
              className="dark:invert block"
              width={139}
              height={60}
              priority
            />} placement='left' width={250} closable={false} onClose={onClose} open={open1}>
      <Mobilemenu setOpen={setOpen}/> 
      </Drawer>
        </>
      )}
    </Disclosure>

  )
}


























