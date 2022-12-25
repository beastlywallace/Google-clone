import { useRef }  from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { MicrophoneIcon, XIcon } from '@heroicons/react/solid'
export const Header = () => {
    const router = useRouter()
    const searchInputRef=useRef(null)
  return (
      <header>
          <Image onClick={()=> router.push('/')} className="cursor-pointer" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" height={40} width={120 } />
          <form className='flex px-6 py-3  ml-10 mr-5 rounded-full  border border-gray-200 shadow-lg '>
              <input type="text" className='flex-grow w-full focus:outline-none' ref={searchInputRef} />
              <XIcon onClick={() => { searchInputRef.current.value = "" }} className='h-7 sm:mr-3 text-gray-500 transition duration-100 transform hover:scale-125' />
              <MicrophoneIcon className='mr-3 h-6 hidden  sm:inline-flex text-blue-500 border-l-2 border-gray-300'/>
   </form>
      </header>
  ) 
} 
