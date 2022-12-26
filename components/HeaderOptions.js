import React from 'react'
import HeaderOption  from './HeaderOption'
import {MapIcon,PlayIcon, DotsVerticalIcon, SearchIcon, PhotographIcon, NewspaperIcon} from '@heroicons/react/outline'
export const HeaderOptions = () => {
  return (
    <div className='flex w-full text-gray-700 justify-evenly  text-sm lg:ext-base lg:justify-start lg:space-x-32 lg:pl-52 border-b'>
      <div className='flex space-x-6'>
        <HeaderOption Icon={SearchIcon }  title="All" selected/>
        <HeaderOption Icon={ PhotographIcon}  title="Images"/>
        <HeaderOption Icon={ PlayIcon}  title="Videos"/>
        <HeaderOption Icon={NewspaperIcon}  title="News"/>
        <HeaderOption Icon={MapIcon}  title="Maps"/>
        <HeaderOption Icon={DotsVerticalIcon }  title="More"/>
      </div>
      <div className='flex space-x-4'>
        <p className='link'>settings</p>
        <p className='link'>tools</p>
      </div>
    </div> 
  )
}
