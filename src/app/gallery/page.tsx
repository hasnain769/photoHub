import React from 'react'
import UploadImage from '@/components/ui/uploadImage'
export default function page() {
  return (
    <div className=''>
         <div className='flex justify-between text-4xl   font-semibold px-3'>
         <h2>Gallery</h2>
        

        <UploadImage/>
         </div>
        

    </div>
  )
}
