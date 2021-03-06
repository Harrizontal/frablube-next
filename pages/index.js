import Script from 'next/script'
import Image from 'next/image'
import { useRef } from 'react'
import styled from 'styled-components'
import Head from 'next/head'

const stats = [
  { label: 'Sensational enhancing formulas', value: 'Designed to make the wearer, look, feel and smell like they’ve been to paradise and back.' },
  { label: 'Employees', value: '5' },
  { label: 'Beta Users', value: '521' },
  { label: 'Raised', value: '$25M' },
]

const whyFrabLube = [
  { number: 1, title: "Nature's enhancing formulas", description: 'Designed to make the wearer, look and feel like they’ve been to paradise and back.' },
  { number: 2, title: "Sensual waves promised", description: "Make you feel like you’re on a getaway in the golden age of sensitivity in the best way" },
  { number: 3, title: 'Gentle enough for the all types', description: "Made for those with sensitive skin in mind and of course, no stains on clothing" }
]

  const waysToOrder = [
    {title:"Online", description: "No matter where you are, you can order lube in your area and get delivered straight to your door. We charged and wrapped with Privacy in mind.", image: "/frab_mobileapp.png"},
    {title:"Self pick up", description: "For the bravest one. We'll throw in a towel while you collect your lube.", image: "/frab_physicalstore.png"}
  ]

  const ImageWrapper = styled.div`
    transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
    transition-duration: 200ms;
  `

  const ProductContainer = styled.div`
    background-color: rgba(249, 246, 246);
    width: 100%;
    position: relative;
    overflow-x: hidden;
    overflow-y: hidden;
    height: fit-content;
    padding-bottom: 20px;
    height: 160vw;
    @media (min-width: 768px) {
      // background-color: pink;
      height: 100vw;
    }
  `

  const ProductImageOne = styled.div`
    width: 60%;
    position: absolute;
    cursor: pointer;
    top: 5vw;
    left: 5vw;
    transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
    transition-duration: 200ms;
    &:hover ${ImageWrapper}{
      transform: rotate(-5deg);
    }
    &:hover > div.absolute > div {
      background-color: white
    }
    // &:hover > div.absolute > span:nth-child(2) {
    //   opacity: 1
    // }
    @media (min-width: 768px) {
      width: 50%;
    }
  `

  const ProductImageTwo = styled.div`
    width: 55%;
    position: absolute;
    cursor: pointer;
    left: 60vw;
    top: 15vw;
    transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
    transition-duration: 200ms;
    &:hover ${ImageWrapper}{
      transform: rotate(-30deg);
    }
    & > ${ImageWrapper}{
      transform: rotate(-25deg);
    }
    &:hover > div.absolute > div {
      background-color: white
    }
    @media (min-width: 768px) {
      width: 50%;
    }
  `

  const ProductImageThree = styled.div`
    width: 60%;
    position: absolute;
    cursor: pointer;
    left: -15vw;
    top: 70vw;
    transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
    transition-duration: 200ms;
    &:hover ${ImageWrapper}{
      transform: rotate(35deg);
    }
    & > ${ImageWrapper}{
      transform: rotate(40deg);
    }
    &:hover > div.absolute > div {
      background-color: white
    }
    @media (min-width: 768px) {
      width: 60%;
      top: 50vw;
      & > ${ImageWrapper}{
        transform: rotate(70deg);
      }
      &:hover ${ImageWrapper}{
        transform: rotate(65deg);
      }
    }
  `

  const ProductImageFour = styled.div`
    width: 50%;
    position: absolute;
    cursor: pointer;
    left: 45vw;
    top: 85vw;
    transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
    transition-duration: 200ms;
    &:hover ${ImageWrapper}{
      transform: rotate(-5deg);
    }
    &:hover > div.absolute > div {
      background-color: white
    }
    @media (min-width: 768px) {
      width: 40%;
      top: 60vw;
      left: 50vw;
    }
  `

export default function Home() {

  const subscribeNewsletterRef = useRef(null)

  const scrollToNewsletter = () => {
    subscribeNewsletterRef.current?.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <>
      <Script src="https://fierce-inventor-7508.ck.page/d68e008518/index.js"/>
      <Script scr="https://f.convertkit.com/ckjs/ck.5.js"/>
      <Head>
        <title>FrabLube | Taking over the Lube industry</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className='bg-white relative'>
      <div className='bg-white h-20 fixed top-0 left-0 right-0 z-10'>
        <div className='w-full relative'>
          <div className='ml-8'>
            <Image src={"/logo_frablube.png"} width={"100px"} height={"100%"} objectFit="contain"/>
          </div>
        </div>
      </div>
        <div className='flex flex-col h-160 mt-20 relative justify-between lg:flex-row'>
          <div className='absolute w-full bottom-96 lg:bottom-32'> 
            <div className='w-11/12 mx-auto lg:w-9/12'>
              <div className="flex flex-col w-full lg:w-7/12">
                <span className='text-xl mb-4'>For everyone, duh</span>
                <span className='text-7xl'>Every Lube, satisfied.</span>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-end bg-white h-1/2 w-11/12 mx-auto lg:p-32 lg:w-7/12 lg:h-full'>
          </div>
          <div className='w-full h-1/2 relative lg:w-5/12 lg:h-full'>
            <Image src="/hero_lube.jpg" layout='fill' objectFit="cover" priority="true"/>
          </div>
        </div>
        <div className='bg-black w-full h-20'>
          <div className='w-11/12 h-full mx-auto flex items-center lg:w-9/12'>
            <button onClick={scrollToNewsletter}><span className='text-white'>Get on the waitlist</span></button>
          </div>
        </div>
        <div className='w-full h-20' style={{backgroundColor: "#267B73"}}>

        </div>
        <div className='flex flex-col h-auto justify-between w-11/12 mx-auto mt-20 lg:flex-row lg:h-96 lg:w-9/12'>
          <div className='w-full mb-6 lg:w-1/2 lg:mb-0'>
            <span className='text-xl'>Overview</span>
          </div>
          <div className='w-full lg:w-1/2'>
            <span className='text-4xl'>Every day, FrabLube delivers lube and towels to millions of consumers islandwide. With a few squeeze on any of our lubes, we assure you to have a great time (ok, it depends...)</span>
          </div>
        </div>
        <div className='mt-10 w-11/12 pb-24 mx-auto lg:w-9/12'>

          <div className='border-t-2 border-gray-700'>

          </div>
          <div className='mt-20'>
            <span className='text-xl'>Why FrabLube?</span>
          </div>

          <div className="divide-y-2 divide-gray-300">
          {whyFrabLube.map((reason) => (
                  <div className='flex flex-col justify-between mb-20 pt-20 lg:flex-row'>
                    <div className='mb-4'>
                      <span className='text-4xl font-medium'>{reason.number}</span>
                    </div>
                    <div className='w-full lg:w-5/12 mb-4'>
                      <span className='text-4xl font-medium'>{reason.title}</span>
                    </div>
                    <div className='w-full lg:w-6/12'>
                      <span className='text-xl font-light'>{reason.description}</span>
                    </div>      
                  </div>
                  ))}
          </div>
        </div>
        
        <div className='pt-20' style={{backgroundColor:"rgba(249, 246, 246)"}}>
          <div className='w-11/12 mx-auto pt-10 pb-10  lg:h-128 lg:w-9/12'>
            <div className='flex flex-col h-auto justify-between lg:flex-row'>
              <div className='w-full mb-10 lg:w-4/6 lg:mb-0'>
                <span className='text-4xl font-bold'>FrabLube Summer Exclusives</span>
              </div>
              <div className='w-full lg:w-2/6'>
                <div className='grid grid-rows-4 grid-cols-1 grid-flow-col gap-4'>
                  <div className='flex flex-row'>
                    <span className='font-bold text-xl'>A</span>
                    <div className='flex flex-col ml-4'>
                      <span className='font-bold text-xl'>Frab's Slip & Slide® Oil-based Lube</span>
                      <span className='text-xl'></span>
                    </div>
                  </div>
                  <div className='flex flex-row'>
                    <span className='font-bold text-xl'>B</span>
                    <div className='flex flex-col ml-4'>
                      <span className='font-bold text-xl'>Frab's Slip & Slide® Water-based Lube</span>
                      <span className='text-xl'></span>
                    </div>
                  </div>
                  <div className='flex flex-row'>
                    <span className='font-bold text-xl'>C</span>
                    <div className='flex flex-col ml-4'>
                      <span className='font-bold text-xl'>Frab's Slip & Slide® Silion-based Lube</span>
                      <span className='text-xl'></span>
                    </div>
                  </div>
                  <div className='flex flex-row'>
                    <span className='font-bold text-xl'>D</span>
                    <div className='flex flex-col ml-4'>
                      <span className='font-bold text-xl'>Frab® Towel</span>
                      <span className='text-xl'>Premium Woven Cotton with triple of the usual thread count</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProductContainer>
          <ProductImageOne>
            <ImageWrapper>
              <Image src="/image1.png" layout='responsive' width={"100%"} height={"100%"} objectFit='contain' priority="true"/>
            </ImageWrapper>
            <div className='absolute w-5/6 flex' style={{left: '10vw', top: 0}}>
              <div className=' w-min border-2 border-black hover:bg-white mx-0'>
                <span className='mx-2'>A</span>
              </div>
            </div>
          </ProductImageOne>
          <ProductImageTwo>
            <ImageWrapper>
              <Image src="/image2.png" layout='responsive' width={"100%"} height={"100%"} objectFit='contain' priority="true"/>
            </ImageWrapper>
            <div className='absolute w-5/6 flex' style={{left: '5vw', top: 0}}>
              <div className=' w-min border-2 border-black hover:bg-white mx-0'>
                <span className='mx-2'>B</span>
              </div>
            </div>
          </ProductImageTwo>
          <ProductImageThree>
            <ImageWrapper>
              <Image src="/image3.png" layout='responsive' width={"100%"} height={"100%"} objectFit='contain' priority="true"/>
            </ImageWrapper>
            <div className='absolute w-5/6 flex' style={{left: '50vw', top: '10vw'}}>
              <div className=' w-min border-2 border-black hover:bg-white mx-0'>
                <span className='mx-2'>C</span>
              </div>
            </div>
          </ProductImageThree>
          <ProductImageFour>
            <ImageWrapper>
              <Image src="/image4.png" layout='responsive' width={"100%"} height={"100%"} objectFit='contain' priority="true"/>
            </ImageWrapper>
            <div className='absolute w-5/6 flex' style={{left: '30vw', top: '3vw'}}>
              <div className=' w-min border-2 border-black hover:bg-white mx-0'>
                <span className='mx-2'>D</span>
              </div>
            </div>
          </ProductImageFour>
        </ProductContainer>
        <div className='bg-beige'>
          <div className='pt-24 pb-14 lg:pb-36 w-11/12 mx-auto lg:w-9/12'>
            <div>
              <span className='text-xl'>Ways to order</span>
            </div>
            {waysToOrder.map((order) => (
              <div className='flex flex-col justify-between mb-20 mt-20 lg:flex-row'>
                  <div className='flex flex-col mr-8 mb-5 lg:mb-0 lg:w-3/6'>
                    <span className='text-4xl mb-5'>{order.title}</span>
                    <span className='text-xl font-light'>{order.description}</span>
                  </div>
                  <div className='h-80 bg-purple-200 lg:w-3/6 lg:h-96 relative'>
                    <Image src={order.image} layout='fill' objectFit="cover" priority="true"/>
                  </div>
              </div>
            ))}
          </div>
        </div>
        <div className='bg-beige pb-16 lg:pb-48'>
          <div className='w-11/12 mx-auto lg:w-9/12'>
            <div className='w-full h-80 relative'>
                  <Image src="/banner_lube.jpg" layout='fill' objectFit="cover" priority="true"/>
            </div>
          </div>
        </div>
        <div className='bg-white'>
          <div className='flex flex-col w-11/12 mx-auto mt-20 pb-20 lg:w-9/12 lg:flex-row'>
            <div className='flex flex-col items-start mr-16 w-full lg:w-3/5'>
              <span className='text-4xl mb-5'>Ready to dominate Asia with Lube?</span>
              <span className='text-lg font-light'>Sign up for our waiting list</span>
              <span className='text-lg font-light'>Just joking. Sign up to <a href='https://twitter.com/butterterm' target="_blank" className='underline underline-offset-8'>Butterterm</a> to hear what happens next</span>
            </div>
            <div className='flex flex-row w-full mt-8 lg:mt-0 lg:w-2/5' ref={subscribeNewsletterRef}>
              <form action="https://app.convertkit.com/forms/2958770/subscriptions" className='w-full' class="seva-form formkit-form"  method="post" data-sv-form="2958770" data-uid="d68e008518" data-format="inline" data-version="5" data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Success! Now check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null,&quot;sparkloop&quot;:null,&quot;googletagmanager&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:true,&quot;url&quot;:&quot;https://convertkit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}">
              <div data-style="clean">
                <ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
                <div data-element="fields" data-stacked="false" class="seva-fields formkit-fields">
                  <div>
                    <input aria-label="First Name" className='w-full' name="fields[first_name]" required="" placeholder="First Name" type="text" />
                  </div>
                  <div className='mt-2'>
                    <input name="email_address" className='w-full' aria-label="Email Address" placeholder="Email Address" required="" type="email"/>
                  </div>
                <button data-element="submit" class="formkit-submit formkit-submit mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full">
                  <div class="formkit-spinner"><div>
                    </div><div></div><div></div></div><span className='w-full'>Subscribe</span></button>
                  </div>          
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='bg-white'>
          <div className='flex flex-col pt-24 pb-10 w-11/12 mx-auto lg:w-11/12 lg:flex-row lg:justify-between'>
            <span className='text-sm'>© Copyright 2021 FrabLube Technologies, Inc. All rights reserved. Various trademarks held by their respective owners</span>
            <span className='text-sm mt-8 lg:mt-0'><a href='https://twitter.com/butterterm' target="_blank">Twitter</a></span>
          </div>
        </div>
      </div>
    </>
  )
}