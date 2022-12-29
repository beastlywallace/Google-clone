import { useRef }  from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid'
import Avatar from './Avatar'
import { HeaderOptions } from './HeaderOptions'
export const Header = () => {
    const router = useRouter()
    const searchInputRef = useRef(null)
    function search(e) {
        e.preventDefault() 
        const term = searchInputRef.current.value

        if (!term) return
        
        router.push(`/search?term=${term}`)
    }
  return (
      <header className='sticky top-0 bg-white'>
          <div className='flex w-full p-6 items-center'> 
          <Image onClick={()=> router.push('/')} className="cursor-pointer" alt="pic" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" height={40} width={120 } />
          <form className='flex  flex-grow px-6 py-3  ml-10 mr-5 rounded-full  border border-gray-200 shadow-lg '>
              <input type="text" className='flex-grow w-full focus:outline-none' ref={searchInputRef} />
              <XIcon onClick={() => { searchInputRef.current.value = "" }} className='h-7 sm:mr-3 text-gray-500 transition duration-100 transform hover:scale-125' />
              <MicrophoneIcon className='mr-3 h-6 hidden  sm:inline-flex text-blue-500 border-l-2 border-gray-300' />
              <SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex' />
                  <button hidden type="submit" onClick={search}>search</button>
                  
              </form>
              <Avatar className="ml-auto" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0qwJQQGx-Ufp4qsLckPIbiPbOQNrq-UarMtj3-lWEj8uO0i4Vl5sdW8j3r5sW1bpWjjg&usqp=CAU"/>
          </div>
          <HeaderOptions/>
      </header>
  ) 
} 
