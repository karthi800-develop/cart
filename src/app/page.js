'use client'

import React, { useState, useEffect,useRef } from 'react';

import Image from "next/image";
import { Avatar, Divider, Tooltip } from 'antd';
import Marquee from "react-fast-marquee";
import { PiSpeakerHighLight } from "react-icons/pi";
import { RiMessage2Line } from "react-icons/ri";
import { PiPaintBrushHouseholdThin } from "react-icons/pi";
import { TfiHandPointUp } from "react-icons/tfi";
import { FaRegKeyboard } from "react-icons/fa";

import { GiAlarmClock } from "react-icons/gi";
import { IoMdCheckmark } from "react-icons/io";

import { Flex, Rate } from 'antd';

import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Form from './form'


import {getCategory} from './server'






const clientImages = [
  {url:'/logos1.webp'},
  {url:'/logos2.webp'},
  {url:'/logos1.webp'},
  {url:'/logos2.webp'},
   {url:'/logos1.webp'},
   {url:'/logos2.webp'},
   {url:'/logos1.webp'}, 
   {url:'/logos1.webp'},
   {url:'/logos1.webp'},

]

const carous = [
  {image:'/testimonial1.jpg', name:' Frederic Hill'},
  {image:'/testimonial2.jpg', name:' Paige Lowery'},
  {image:'/testimonial3.jpg', name:' Brendan Buck'},
    {image:'/testimonial1.jpg', name:' Frederic Hill'},
  {image:'/testimonial2.jpg', name:' Paige Lowery'},
  {image:'/testimonial3.jpg', name:' Brendan Buck'},
  {image:'/testimonial1.jpg', name:' Frederic Hill'},
  {image:'/testimonial2.jpg', name:' Paige Lowery'},
  {image:'/testimonial3.jpg', name:' Brendan Buck'},


]

export default function Home() {

  
 
  
  const [value, setValue] = useState(5);

    const [isSticky, setIsSticky] = useState(true);

    const [values, setValues] = useState([])
  
    const sideRef = useRef(null);



    useEffect(() => {
      const handleScroll = () => {
        const sideDiv = document.getElementById('side');
        if (sideDiv) {
          const { top } = sideDiv.getBoundingClientRect();
          setIsSticky(top > 0); 
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


    const rows = (data) =>{

      setValues(data)
    }


    useEffect(()=>{

      getCategory(rows)
    },[])





  return (
    <>
    <div className="bg-[#fbf9f4]">
    <div className="grid grid-cols-12 gap-5 max-w-screen-xl mx-auto px-10 py-20">
          <div className="col-span-12 md:col-span-6 flex items-center">
            <div className="pb-10">
              <p className=" py-3 text-lg md:text-lg  font-roboto text-[#295C51]">Start earning more traffic
              </p>
              <h1 className="text-gray-700 text-6xl font-semibold space-y-2 py-4">Marketing revolution.<br></br> Unlimited success<span className='text-4xl ml-2'>👋</span> </h1>
              <div className=" leading-loose py-2 space-x-1 text-gray-500">
              Join us in revolutionizing your marketing strategies for unlimited success. Let&#39;s achieve your goals together.
              </div>

<div className="md:flex gap-3 items-center py-4">

<button class="relative h-12 w-36  overflow-hidden border border-[#E9BB71] text-[#E9BB71] shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#E9BB71] before:duration-300 before:ease-out hover:text-black rounded hover:shadow-[#E9BB71] hover:before:h-40 hover:before:w-40 hover:before:opacity-80">
      <span class="relative z-10"> Free consultation </span>
    </button>
    


<Avatar.Group>
      
      <a href="https://ant.design">
        <Avatar
         style={{
          border: '2px solid #295C51',
          backgroundColor:'white',
          color:'black',
        }}
        size={64}

        >
              <Image
              src="/testimonial1.jpg"
              alt="land"
              className="dark:invert"
              width={400}
              height={300}
            />
        </Avatar>
      </a>
      <a href="https://ant.design">
        <Avatar
         style={{
          border: '2px solid #295C51',
          backgroundColor:'white',
          color:'black',
        }}
        size={64}

        >
               <Image
              src="/testimonial2.jpg"
              alt="land"
              className="dark:invert"
              width={400}
              height={300}
            />
        </Avatar>
      </a>
      <a href="https://ant.design">
        <Avatar
         style={{
          border: '2px solid #295C51',
          backgroundColor:'white',
          color:'black',
        }}
        size={64}

        >
               <Image
              src="/testimonial3.jpg"
              alt="land"
              className="dark:invert"
              width={400}
              height={300}
            />
        </Avatar>
      </a>

    </Avatar.Group>

    <p className="text-gray-400 py-2">Loved by thousands</p>


</div>

   





            </div>
          </div>
          <div className="col-span-12 md:col-span-6 flex items-center justify-center">
            <Image
              src="/landpress.webp"
              alt="land"
              className="dark:invert"
              width={400}
              height={300}
            />
          </div>
        </div>


        <Marquee speed={50} autoFill={true} pauseOnHover={true} className="py-7 max-w-screen-xl mx-auto px-10">

{clientImages.map((item)=>(
  <div className="" key={item.id}>
   <Image
                                              src={item.url}
                                              alt="client image"
                                              className="object-contain mb-5  w-full h-16 border-r-gray-400 border-2 border-[#fbf9f4] px-16 "
                                              width={1000}
                                              height={1000}
                                              priority
                                              />
  </div>
))}
        
                   
                                        
        </Marquee>


        </div>
        
        <div id='vendor' className={`bg-[#295C51]  `}>
    <div className="grid grid-cols-12 gap-5 max-w-screen-xl mx-auto px-10 py-20">
    <div className={`col-span-12 md:col-span-4 items-center `}>

          <p className=" py-3 text-lg md:text-lg  font-roboto text-white">Fast Solutions
              </p>
              <h1 className="text-white text-6xl font-semibold space-y-2 py-1"><span className="text-[#E9BB71]">
              Solutions</span> for busy business owners</h1>
              <div className=" leading-loose py-2 text-gray-200">
              Drive revenue with email automation, boost SEO rankings, and optimize the customer journey effortlessly.
              </div>

            </div>
            <div id='side' ref={sideRef}  className="col-span-12 md:col-span-8 gap-2 flex items-center px-3 overflow-x-auto overflow-y-auto" style={{ maxHeight: '600px' }}>
            <style>
    {`
      #side {
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none; /* IE and Edge */
      }

      #side::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
      }
    `}
  </style>

            <div className="grid grid-cols-12 gap-5 max-w-screen-xl mx-auto h-full ">
          <div className="col-span-12 md:col-span-6 h-full items-center">
              <div className="bg-white text-black rounded-lg p-10">
            <Image
              src="/landpress6.png"
              alt="land"
              className="dark:invert rounded-lg"
              width={400}
              height={300}
            />
          <p className="text-2xl py-5 font-semibold text-gray-800">Email automation tools to drive revenue</p> 
            
            <p className="text-gray-500">Automate email marketing and campaigns for increased revenue generation.</p>
            
            </div>
            </div>
            <div className="col-span-12 md:col-span-6 h-full items-center">
            <div className="bg-white rounded-lg p-10">
            <Image
              src="/landpress5.webp"
              alt="land"
              className="dark:invert rounded-lg"
              width={400}
              height={300}
            />
            <p className="text-2xl py-5 font-semibold text-gray-800">Increase traffic, get to the top of search results</p> 
            <p className="text-gray-500">Boost website traffic with proven strategies. Achieve higher rankings and attract quality leads.</p>
            
            
            </div>
            </div>
            <div className="col-span-12 md:col-span-6 h-full items-center">
              <div className="bg-white text-black rounded-lg p-10">
            <Image
              src="/landpress7.png"
              alt="land"
              className="dark:invert rounded-lg"
              width={400}
              height={300}
            />
          <p className="text-2xl py-5 font-semibold text-gray-800">Email automation tools to drive revenue</p> 
            
            <p className="text-gray-500">Automate email marketing and campaigns for increased revenue generation.</p>
            
            </div>
            </div>
            <div className="col-span-12 md:col-span-6 h-full items-center">
            <div className="bg-white rounded-lg p-10">
            <Image
              src="/landpress8.png"
              alt="land"
              className="dark:invert rounded-lg"
              width={400}
              height={300}
            />
            <p className="text-2xl py-5 font-semibold text-gray-800">Increase traffic, get to the top of search results</p> 
            <p className="text-gray-500">Boost website traffic with proven strategies. Achieve higher rankings and attract quality leads.</p>
            
            
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>

            <div className="bg-[#fbf9f4] py-20 ">

              <div className='text-center'>
              <p className=" py-3 text-lg md:text-lg  font-roboto text-[#295C51]"> Our Services
              </p>

              <h1 className="text-gray-700 text-5xl font-semibold space-y-2 py-1">Your <span className='text-[#295C51]'>bespoke</span> service bundle</h1> 
              <p className='py-2 text-gray-500'>Unlock your business&#39;s full potential with our </p>
              <p className='text-gray-500'>comprehensive suite of services.</p>
              
              </div>


              <div className="grid grid-cols-12 gap-5 max-w-screen-xl mx-auto px-10 py-20">
              <div className='col-span-12 md:col-span-4 items-center'>
<div className=' bg-white p-10 gap-5 group rounded-lg '>

<div className='bg-[#fbf9f4] group-hover:bg-[#295C51] transition duration-700 inline-flex rounded-lg p-5'>
                <PiSpeakerHighLight className='size-10 group-hover:text-white  '/>
                </div>
                <h3 className='text-gray-800 text-2xl py-4 font-semibold'> Brand communication</h3>
                 <p className='text-gray-500 leading-loose'>
                 Craft compelling brand stories and messaging strategies that resonate with your audience. 
                 Strengthen brand identity, build trust, and drive engagement across all channels.
                 </p>
</div>

<div className='mt-5 bg-white p-10 group gap-5 rounded-lg '>

<div className='bg-[#fbf9f4] group-hover:bg-[#295C51] transition duration-700 inline-flex rounded-lg p-5'>
                <RiMessage2Line className='size-10 group-hover:text-white  '/>
                </div>
                <h3 className='text-gray-800 text-2xl py-4 font-semibold'> Technology consultation</h3>
                 <p className='text-gray-500 leading-loose'>
                 Navigate the complexities of technology with our expert consultation services.
                 </p>
</div>
              
                </div>
                <div className='col-span-12 md:col-span-4 items-center'>
<div className=' bg-white p-10 gap-5 group rounded-lg '>

<div className='bg-[#fbf9f4] group-hover:bg-[#295C51] transition duration-700 inline-flex rounded-lg p-5'>
                <PiPaintBrushHouseholdThin className='size-10 group-hover:text-white  '/>
                </div>
                <h3 className='text-gray-800 text-2xl py-4 font-semibold'> Graphic design</h3>
                 <p className='text-gray-500 leading-loose'>
                 Transform your brand vision into stunning visuals. From logos to marketing materials.
                 </p>
</div>

<div className='mt-5 bg-white p-10 gap-5 group rounded-lg '>

<div className='bg-[#fbf9f4] group-hover:bg-[#295C51] transition duration-700 inline-flex rounded-lg p-5'>
                <TfiHandPointUp className='size-10 group-hover:text-white  '/>
                </div>
                <h3 className='text-gray-800 text-2xl py-4 font-semibold'>  UI/UX product design</h3>
                 <p className='text-gray-500 leading-loose'>
                 Deliver exceptional user experiences with intuitive UI/UX design. Our designers combine creativity and 
                 functionality to create interactions that keep users engaged.
                 </p>
</div>
              
                </div>
                <div className='col-span-12 md:col-span-4 items-center'>
<div className=' bg-white p-10 gap-5 group rounded-lg '>

<div className='bg-[#fbf9f4] group-hover:bg-[#295C51] transition duration-700 inline-flex rounded-lg p-5'>
                <FaRegKeyboard className='size-10  group-hover:text-white '/>
                </div>
                <h3 className='text-gray-800 text-2xl py-4 font-semibold'>  Product development</h3>
                 <p className='text-gray-500 leading-loose'>
                 Bring your ideas to life with our product development expertise. From conceptualization to launch, 
                 we guide you through every stage to create innovative solutions.
                 </p>
</div>

<div className='mt-5 bg-white p-10 gap-5 rounded-lg group'>

<div className='bg-[#fbf9f4] group-hover:bg-[#295C51] transition duration-700 inline-flex rounded-lg p-5'>
                <GiAlarmClock className='size-10  group-hover:text-white '/>
                </div>
                <h3 className='text-gray-800 text-2xl py-4 font-semibold'>  Website performance</h3>
                 <p className='text-gray-500 leading-loose'>
                 From updates to performance enhancements, 
                 we keep your systems running smoothly and efficiently.
                 </p>
</div>
              
                </div>
                
                </div>
            </div>

            <div className='bg-white'>
            <div className="grid grid-cols-12 gap-5 max-w-screen-xl mx-auto px-10 py-20">
          <div className="col-span-12 md:col-span-6  items-center">
            <div className="pb-10">
              <p className=" py-3 text-lg md:text-lg  font-roboto text-[#295C51]">Seamless Integrations
              </p>
              <h1 className="text-gray-700 text-6xl font-semibold space-y-2 py-1"><span className='text-[#295C51]'>Easy integration </span>with your entire tech stack</h1>
              <div className=" leading-loose py-2 text-lg text-gray-500">
              Integrate with top marketing and SEO tools.<br></br> Experience enhanced performance.
              </div>

            </div>

            <div>
              <div className='flex gap-4 py-4 items-center'>
                <IoMdCheckmark className='size-6 text-[#E9BB71] bg-yellow-50 rounded-full'/>
                <p className='text-lg'>
Enhance campaign effectiveness</p>
              </div>
              <div className='flex gap-4  py-4 items-center'>
                <IoMdCheckmark className='size-6 text-[#E9BB71] bg-yellow-50 rounded-full'/>
                <p className='text-lg'>
                Access comprehensive analytics</p>
              </div>
              <div className='flex gap-4  py-4 items-center'>
                <IoMdCheckmark className='size-6 text-[#E9BB71] bg-yellow-50 rounded-full'/>
                <p className='text-lg'>
                Improve customer targeting</p>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">

            <div className=' md:flex gap-5 items-center justify-center mb-5'>
            <Image
              src="/landpress8.webp"
              alt="land"
              className="dark:invert bg-[#fbf9f4] w-48 h-44 p-4 rounded-lg"
              width={400}
              height={300}
            />
             <Image
              src="/logo4.webp"
              alt="land"
              className="dark:invert bg-[#fbf9f4] w-48 h-44 p-4 rounded-lg"
              width={400}
              height={300}
            />
          </div>

          <div className=' md:flex gap-5 items-center justify-center mb-5'>
            <Image
              src="/logo2.webp"
              alt="land"
              className="dark:invert bg-[#fbf9f4] w-48 h-44 rounded-lg p-4"
              width={400}
              height={300}
            />
             <Image
              src="/logo3.webp"
              alt="land"
              className="dark:invert bg-[#fbf9f4] w-48 h-44 rounded-lg p-4"
              width={400}
              height={300}
            />
                <Image
              src="/logo6.webp"
              alt="land"
              className="dark:invert bg-[#fbf9f4] w-48 h-44 rounded-lg p-4"
              width={400}
              height={300}
            />
          </div>

          <div className=' md:flex gap-5 items-center justify-center mb-5'>
            <Image
              src="/logo5.webp"
              alt="land"
              className="dark:invert bg-[#fbf9f4] w-48 h-44 p-4 rounded-lg"
              width={400}
              height={300}
            />
             <Image
              src="/logo7.webp"
              alt="land"
              className="dark:invert bg-[#fbf9f4] w-48 h-44 p-4 rounded-lg"
              width={400}
              height={300}
            />
          </div>
          </div>
        </div>
            </div>

        

            <div className="bg-[#fbf9f4] py-20">

              <div className=' max-w-screen-xl mx-auto'>

              <div className='text-center'>
              <p className=" py-3 text-lg md:text-lg  font-roboto text-[#295C51]">12,000+ Happy Clients
              </p>

              <h1 className="text-gray-700 text-5xl font-semibold space-y-5 py-1">Winning hearts and trust.<br></br>
Customer <span className='text-[#295C51]'> success stories</span></h1> 
              <p className='py-2 text-gray-500'>The best way to showcase our commitment is through the </p>
              <p className='text-gray-500'>experiences and stories of those who have partnered with us.</p>
              
              </div>


              <Carousel
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container"

  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable={false}
>

  {carous.map((item,index)=>(
 <div className='mt-10 bg-white p-10 gap-5 group rounded-lg w-96' key={index}> 
 <Flex gap="middle" vertical>
<Rate  onChange={setValue} value={value} className='text-[#E9BB71] py-2' />

</Flex>

    <p className='text-gray-500 leading-loose'>
    Incredible results! Their team&#39;s expertise propelled our business to new heights. 
    Highly recommend their services for anyone serious about success.
    </p>


    <div className='flex gap-2 items center py-5'>
    <Avatar
style={{
border: '2px solid #295C51',
backgroundColor:'white',
color:'black',
}}
size={64}

>
<Image
 src={item.image}
 alt="land"
 className="dark:invert"
 width={400}
 height={300}
/>
   </Avatar>

   <div>
     <p className='font-semibold text-lg'>
    {item.name}
     </p>
     <p>
     Account Executive
     </p>
   </div>
    </div>
</div>
  ))}

             

             </Carousel>

             </div>
              </div>

              <div className={`bg-[#295C51]  `}>
    <div className="grid grid-cols-12 gap-5 max-w-screen-xl mx-auto px-10 py-20">
    <div className={`col-span-12 md:col-span-5 items-center `}>

          <p className=" py-3 text-lg md:text-lg  font-roboto text-white"> Flexible Pricing
              </p>
              <h1 className="text-white text-6xl font-semibold space-y-2 py-1"><span className="text-[#E9BB71]">
              Get started .</span> Pick a plan that suits your needs</h1>


              <div className="mt-20 leading-loose py-2 text-gray-200">
              Explore our flexible plans tailored to meet your needs and budget. Get started today and propel your business to new heights.
              </div>


 
              <button class="before:ease relative h-12 w-40 overflow-hidden rounded border border-white bg-white text-[#295C51] shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-8 before:translate-x-20 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-[#295C51] hover:before:-translate-x-64">
      <span relative="relative z-10"> Free consultation</span>
    </button>
            </div>


            <div  className="col-span-12 md:col-span-7 gap-2 px-3" >
    
            <div className="grid grid-cols-12 gap-5 max-w-screen-xl mx-auto  h-full">

          <div className="col-span-12 md:col-span-6 ">
              <div className="bg-white text-black rounded-lg p-10  h-full">
      <p className='text-xl'>Startup</p>

      <p className="text-gray-500 py-5 leading-loose">For individuals and small teams trying out for an unlimited period.</p>

        
        <div className='flex gap-2 pb-6 text-gray-800'>
          <p className='text-xl font-mono'>$</p>

          <p className='text-6xl font-semibold'>29<span className='text-base text-gray-500'>/month</span></p>

        </div>

        <button class="relative h-12 w-full overflow-hidden border border-[#E9BB71] text-[#E9BB71] shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#E9BB71] before:duration-300 before:ease-out hover:text-black rounded hover:shadow-[#E9BB71] hover:before:h-40 hover:before:w-full hover:before:opacity-80">
      <span class="relative z-10"> Subscribe now </span>
    </button>

    <div className='py-5'>
    <div className='flex gap-2 py-4 items-center'>       
           <p className='text-base'>Basic SEO optimization</p>
            <IoMdCheckmark className='size-6 text-[#E9BB71] bg-yellow-50 rounded-full'/>
    </div>

    <div className='flex gap-2 py-4 items-center'>       
           <p className='text-base'>Social media integration</p>
            <IoMdCheckmark className='size-6 text-[#E9BB71] bg-yellow-50 rounded-full'/>
    </div>
    <div className='flex gap-2 py-4 items-center'>       
           <p className='text-base'>Performance reports</p>
            <IoMdCheckmark className='size-6 text-[#E9BB71] bg-yellow-50 rounded-full'/>
    </div>
    <div className='flex gap-2 py-4 items-center'>       
           <p className='text-base'>Influencers management</p>
            <IoMdCheckmark className='size-6 text-[#E9BB71] bg-yellow-50 rounded-full'/>
    </div>
      <div className='flex gap-2 py-4 items-center'>       
           <p className='text-base'>Access to knowledge base</p>
            <IoMdCheckmark className='size-6 text-[#E9BB71] bg-yellow-50 rounded-full'/>
    </div>
    </div>


            </div>
            </div>




            <div className="col-span-12 md:col-span-6 ">
           <div className="bg-white text-black rounded-lg p-10  h-full">
      <p className='text-xl'>Agency</p>

      <p className="text-gray-500 py-5 leading-loose">For individuals and small teams trying out for an unlimited period.</p>

        
        <div className='flex gap-2 pb-6 text-gray-800'>
          <p className='text-xl font-mono'>$</p>

          <p className='text-6xl font-semibold'>99<span className='text-base text-gray-500'>/month</span></p>

        </div>

  
    <button class="before:ease relative h-12 w-full overflow-hidden rounded border border-[#295C51] bg-[#295C51] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-8 before:translate-x-20 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-[#295C51] hover:before:-translate-x-64">
      <span relative="relative z-10"> Subscribe now</span>
    </button>


    <div className='py-5'>
    <div className='flex gap-2 py-4 items-center'>       
           <p className='text-base'>Custom website design</p>
            <IoMdCheckmark className='size-6 text-[#E9BB71] bg-yellow-50 rounded-full'/>
    </div>

    <div className='flex gap-2 py-4 items-center'>       
           <p className='text-base'>Advanced SEO optimization</p>
            <IoMdCheckmark className='size-6 text-[#E9BB71] bg-yellow-50 rounded-full'/>
    </div>
    <div className='flex gap-2 py-4 items-center'>       
           <p className='text-base'>Social media management</p>
            <IoMdCheckmark className='size-6 text-[#E9BB71] bg-yellow-50 rounded-full'/>
    </div>
    <div className='flex gap-2 py-4 items-center'>       
           <p className='text-base'>Influencers management</p>
            <IoMdCheckmark className='size-6 text-[#E9BB71] bg-yellow-50 rounded-full'/>
    </div>
      <div className='flex gap-2 py-4 items-center'>       
           <p className='text-base'>Priority email support</p>
            <IoMdCheckmark className='size-6 text-[#E9BB71] bg-yellow-50 rounded-full'/>
    </div>
    <div className='flex gap-2 py-4 items-center'>       
           <p className='text-base'>Priority email support</p>
            <IoMdCheckmark className='size-6 text-[#E9BB71] bg-yellow-50 rounded-full'/>
    </div>
    </div>


            </div>
            </div>
      
            </div>
            </div>
            </div>
            </div>

            <div className="bg-[#fbf9f4]">
    <div className="grid grid-cols-12 gap-5 max-w-screen-xl mx-auto px-10 py-20">
          <div className="col-span-12 md:col-span-6  items-center">
          <div className="pb-10">
              <p className=" py-3 text-lg md:text-lg  font-roboto text-[#295C51]"> FAQs
              </p>
              <h1 className="text-gray-700 text-6xl font-semibold space-y-2 py-4"><span className='text-[#295C51]'>Questions?  </span>We&#39;re<br></br>glad you asked</h1>
              <div className=" leading-loose py-2 space-x-1 text-gray-500">
              Here&#39;s a little more about how we operate. Got a more specific question? Feel free to get in touch.
              </div>
              </div>
            </div>
            <div className='col-span-12 md:col-span-6'>
            <Accordion collapseAll>
      <AccordionPanel>
        <AccordionTitle>What is Flowbite?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
            dropdowns, modals, navbars, and more.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to&nbsp;
            <a
              href="https://flowbite.com/docs/getting-started/introduction/"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              get started&nbsp;
            </a>
            and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>Is there a Figma file available?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
            has a design equivalent in our Figma file.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out the
            <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
              Figma design system
            </a>
            based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>What are the differences between Flowbite and Tailwind UI?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Flowbite are open source under the MIT license, whereas
            Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
            components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
            technical reason stopping you from using the best of two worlds.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
            <li>
              <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                Flowbite Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>What is Flowbite?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
            dropdowns, modals, navbars, and more.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to&nbsp;
            <a
              href="https://flowbite.com/docs/getting-started/introduction/"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              get started&nbsp;
            </a>
            and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>Is there a Figma file available?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
            has a design equivalent in our Figma file.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out the
            <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
              Figma design system
            </a>
            based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>What are the differences between Flowbite and Tailwind UI?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Flowbite are open source under the MIT license, whereas
            Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
            components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
            technical reason stopping you from using the best of two worlds.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
            <li>
              <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                Flowbite Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>What is Flowbite?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
            dropdowns, modals, navbars, and more.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to&nbsp;
            <a
              href="https://flowbite.com/docs/getting-started/introduction/"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              get started&nbsp;
            </a>
            and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>Is there a Figma file available?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
            has a design equivalent in our Figma file.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out the
            <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
              Figma design system
            </a>
            based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>What are the differences between Flowbite and Tailwind UI?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Flowbite are open source under the MIT license, whereas
            Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
            components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
            technical reason stopping you from using the best of two worlds.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
            <li>
              <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                Flowbite Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
    
            </div>
            </div>
            </div>



            <div className='bg-white'>
            <div className="grid grid-cols-12 gap-5 max-w-screen-xl mx-auto px-10 py-20">
          <div className="col-span-12 md:col-span-5  items-center">
            <div className="pb-10">
              <p className=" py-3 text-lg md:text-lg  font-roboto text-[#295C51]">Growing Community
              </p>
              <h1 className="text-gray-700 text-6xl font-semibold space-y-2 py-1"><span className='text-[#295C51]'>Ready to unlock</span> your business potential?</h1>
              <div className=" leading-loose py-2 text-lg text-gray-500">
              We&#39;re building amazing tech, bringing together the best marketing minds out there.
              </div>

            </div>

<div className='gap-2 flex' >
<button class="relative h-12 w-36 overflow-hidden border border-[#E9BB71] text-[#E9BB71] shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#E9BB71] before:duration-300 before:ease-out hover:text-black rounded hover:shadow-[#E9BB71] hover:before:h-40 hover:before:w-40 hover:before:opacity-80">
      <span class="relative z-10"> Free consultation </span>
    </button>

    <button class="before:ease relative h-12 w-40 overflow-hidden rounded border border-[#295C51] bg-[#295C51] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-[#295C51] hover:before:-translate-x-40">
      <span relative="relative z-10"> Get in touch</span>
    </button>
</div>
        
          </div>
          <div className="col-span-12 md:col-span-7">
          <div className="grid grid-cols-12 gap-5 max-w-screen-xl mx-auto h-full ">
          <div className="col-span-12 md:col-span-6 h-full items-center">
              <div className="bg-white text-black rounded-lg p-4">
            <Image
              src="/landpress12.png"
              alt="land"
              className="dark:invert rounded-lg"
              width={400}
              height={300}
            />
          <p className="text-2xl py-5 font-semibold text-gray-800">Automate and make better business decisions</p> 
            
            <p className="text-gray-500">Automate your processes and gain insights to optimize efficiency and drive success in your business operations.</p>
            
            </div>
            </div>
            <div className="col-span-12 md:col-span-6 h-full items-center">
            <div className="bg-white rounded-lg p-4">
            <Image
              src="/landpress13.png"
              alt="land"
              className="dark:invert rounded-lg"
              width={400}
              height={300}
            />
            <p className="text-2xl py-5 font-semibold text-gray-800">Drive sustainable growth in today&#39;s market</p> 
            <p className="text-gray-500">Adapt to changing trends and seize opportunities to thrive in today&#39;s dynamic business landscape.</p>
            
            
            </div>
            </div>
      
            </div>
 
          </div>
        </div>
            </div>


            <div className={`bg-[#295C51]  `}>
    <div className="grid grid-cols-12 gap-5 max-w-screen-xl mx-auto px-10 py-20">
    <div className={`col-span-12 md:col-span-5 items-center `}>

          <p className=" py-3 text-lg md:text-lg  font-roboto text-white"> Flexible Pricing
              </p>
              <h1 className="text-white text-6xl font-semibold space-y-2 py-1"> Let&#39;s talk about <span className="text-[#E9BB71]">
              working together</span></h1>


              <div className="mt-3 leading-loose py-2 text-gray-200">
              Need a quick question answered? Our support team is available to answer any queries seven days a week.
              </div>


<p className='py-2 text-white text-2xl'>Contact information:</p>
<p className='py-2 text-white text-lg'>Email: hello@company.com</p>
<p className='py-2 text-white text-lg'>Phone: +1 (215) 555-1122</p>
 
 
            </div>


            <div  className="col-span-12 md:col-span-7 gap-2 px-3" >
    
    <Form/>
        
            </div>
            </div>
            </div>

    </>
  );
}
