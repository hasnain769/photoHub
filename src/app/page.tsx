"use client"
import Image from 'next/image'
import { CldImage, CldUploadButton } from 'next-cloudinary';
import { useState } from 'react';
import UploadImage from '@/components/ui/uploadImage';
import { Button } from '@/components/ui/button';
type uploadImage ={
  event :'success';
  info :{
    public_id : string,
  }
}

export default function Home() {

  return (
    <main className="flex justify-center items-center">
    
        <UploadImage/>
    
   
   
      {/* <CldImage 
  width="960"
  height="600"
  src={id}
  sizes="100vw"
  alt="Description of my image"
/> */}

    </main>
  )
}
