import React from 'react'
import {MapIcon,PlayIcon, DotsVerticalIcon, SearchIcon, PhotographIcon, NewspaperIcon} from '@heroicons/react/outline'
export const HeaderOptions = () => {
  return (
    <div>
      <div className='flex space-x-6'>
        <HeaderOption icon={SearchIcon }  title="All" selected/>
        <HeaderOption icon={ PhotographIcon}  title="Images"/>
        <HeaderOption icon={ PlayIcon}  title="Videos"/>
        <HeaderOption icon={NewspaperIcon}  title="News"/>
        <HeaderOption icon={MapIcon}  title="Maps"/>
        <HeaderOption icon={DotsVerticalIcon }  title="More"/>
      </div>
      <div className='flex space-x-4'>
        <p className='link'>settings</p>
        <p className='link'>tools</p>
      </div>
    </div>
  )
}
