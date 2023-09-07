
import Image from 'next/image'
import {  CldUploadButton } from 'next-cloudinary';
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

    </main>
  )
}
