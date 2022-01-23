import { useState, useEffect } from 'react'
import { useRouter } from "next/router";
import { supabase } from '../utils/supabaseClient'

import {
  CalendarIcon,
  CogIcon,
  HomeIcon,
  MapIcon,
  MenuIcon,
  SearchCircleIcon,
  SpeakerphoneIcon,
  UserGroupIcon,
  ViewGridAddIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronLeftIcon, FilterIcon, MailIcon, PhoneIcon, SearchIcon } from '@heroicons/react/solid'

const tabs = [
  { name: 'Profile', href: '#', current: true },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Recognition', href: '#', current: false },
]

const profile = {
  name: 'Ricardo Cooper',
  imageUrl:
    'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  coverImageUrl:
    'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  about: `
    <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
    <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
  `,
  fields: {
    Phone: '(555) 123-4567',
    Email: 'ricardocooper@example.com',
    Title: 'Senior Front-End Developer',
    Team: 'Product Development',
    Location: 'San Francisco',
    Sits: 'Oasis, 4th floor',
    Salary: '$145,000',
    Birthday: 'June 8, 1990',
  },
}

const team = [
  {
    name: 'Leslie Alexander',
    handle: 'lesliealexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Michael Foster',
    handle: 'michaelfoster',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Dries Vincent',
    handle: 'driesvincent',
    role: 'Manager, Business Relations',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Lindsay Walton',
    handle: 'lindsaywalton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

const stats = [
  { label: 'Vacation days left', value: 12 },
  { label: 'Sick days left', value: 4 },
  { label: 'Personal days left', value: 2 },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const UsernamePage = () => {

    const router = useRouter()
    const { username } = router.query

    const [loading, setLoading] = useState(true)
    const [username2, setUsername2] = useState(null)
    const [website, setWebsite] = useState(null)
    const [avatar_url, setAvatarUrl] = useState(null)

    useEffect(() => {
        getProfile()
      }, [])
    
      
      async function getProfile() {
        try {
          setLoading(true)
          const user = supabase.auth.user()
    
          let { data, error, status } = await supabase
            .from('profiles')
            .select(`username, website, avatar_url`)
            .eq('username', 'Harrison2')
            .single()
    
          if (error && status !== 406) {
            console.log(error);
            throw error
          }
    
          if (data) {
            setUsername2(data.username)
            setWebsite(data.website)
            setAvatarUrl(data.avatar_url)
          }
        } catch (error) {
          //alert(error.message)
        } finally {
          setLoading(false)
        }
      }  

    return <>
        {/* <p>Username: {username}</p>
        <p>{username2}</p>
        <p>hello</p> */}

          <article className="p-8">
            <p className="text-base">@harrizontal</p>
            <p className="text-4xl font-bold mt-2">Harrison Wong</p>
            <div className="flex justify-between mt-4">
              <div className="flex flex-col">
                <p className="text-base">Lives in Singapore</p>
                <p className="text-base mt-2">28 years old</p>
              </div>
              <img
                className="h-36 w-36 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                src={profile.imageUrl}
                alt=""
              />
            </div>
            <div className="flex justify-left mt-8">
                <button
                  type="button"
                  className="inline-flex items-center justify-center w-full px-2 py-2 border border-black shadow-sm text-base font-medium rounded-md text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Let's hang out!
                </button>
            </div>
            <div className="mt-8">
              <p className="text-xl font-bold">My Interest</p>
              <p className="text-base tracking-tight">
                Art, Board game addict, Foodie, Tech, Walking
              </p>
            </div>
            <div className="mt-8">
              <p className="text-xl font-bold">About me</p>
              <p className="text-base tracking-tight">
              I grew up and lived in Singapore!

I’m here looking for a woman that doesn’t want to be labeled and put in a box! Most people on this site seem to have one interest that defines them. They say, “I love rock climbing - I only want another rock climber.” That’s boring-happiness comes from variety

If you’re the kind of girl who wants to go hking onday, and spend the next night checking a speakeasy somewhere off the beaten path then drop me a line!
              </p>
            </div>
            
          </article>
    </>
}

export default UsernamePage;