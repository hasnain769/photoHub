

import cloudinary from 'cloudinary'
import CloudineryImage from '@/components/ui/cloudineryImage';
import { Tags } from 'lucide-react';
import { searchResult } from '../gallery/page';


export default async function page() {
   const result=await cloudinary.v2.search
  .expression('resource_type:image AND tags =favorite')
  .sort_by('created_at','desc')
  .with_field("tags")
  .max_results(20)
  .execute() as {resources : searchResult[]}; 
  

  return (
    <div className='flex flex-col'>
         <div className='flex justify-center text-4xl   font-semibold px-3'>
         <h2>Favorites</h2>
       
         </div>
        
        <div className='flex   justify-evenly flex-wrap pt-16'>
        {
            result.resources.map((item)=>(
             <CloudineryImage src={item.public_id}
              key={item.public_id}
              image_data ={item}
             alt="something"
             width='400'
             height ='500'
             />
            ))
        }
        </div>

    </div>
  )
}
