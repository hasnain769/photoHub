"use client"
import { CldImage } from "next-cloudinary"
export default function CloudineryImage(props :any) {
  return (
    <div className="flex justify-around pt-6">
           <CldImage  {...props}/>
    </div>
  )
}
