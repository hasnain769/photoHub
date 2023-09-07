"use client"
import { CldImage } from "next-cloudinary"
import Heart from "./heart"
import SetFavorite from "./actions"
import {  useEffect, useState, useTransition } from "react"
import { searchResult } from "@/app/gallery/page"
import FullHeart from "./FullHeart"
export default function CloudineryImage(props :any & searchResult) {

  const [transition , starttransition]= useTransition();
  
 
  const isfavorited=props.image_data.tags.includes("favorite")
  
  return (
    <div className="flex justify-around pt-6 relative">
           <CldImage  {...props}/>
           {
            isfavorited ? 
            <FullHeart 
           onClick={()=>
            starttransition(()=>SetFavorite(props.image_data.public_id ,false))
          } 
           className="absolute top-8 right-2 w-6 h-6 text-red-600 hover:text-white cursor-pointer"/>
            :
            <Heart 
           onClick={()=>
            starttransition(()=>SetFavorite(props.image_data.public_id ,true))
          } 
           className="absolute top-8 right-2 w-6 h-6 hover:text-red-600 cursor-pointer"/>
           }
           
    </div>
  )
}
