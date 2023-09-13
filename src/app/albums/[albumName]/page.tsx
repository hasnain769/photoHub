
import UploadImage from '@/components/ui/uploadImage'
import cloudinary from 'cloudinary'
import CloudineryImage from '@/components/ui/cloudineryImage';
import { Tags } from 'lucide-react';
import { searchResult } from '@/app/gallery/page';


export default async function page({params}:{params :{albumName :string}}) {
   const result=await cloudinary.v2.search
  .expression(`resource_type:image AND folder=${params.albumName}`)
  .sort_by('created_at','desc')
  .with_field("tags")
  .max_results(15)
  .execute() as {resources : searchResult[]}; 
  

  return (
    <div className='flex flex-col'>
         <div className='flex justify-between text-4xl   font-semibold px-3'>
         <h2>{params.albumName}</h2>
        
         </div>
        
        <div className='flex   justify-evenly flex-wrap pt-16'>
        {
            result.resources.map((item)=>(
             <CloudineryImage src={item.public_id}
              key={item.public_id}
              image_data ={item}
             alt="something"
             width='400'
             height ='350'
             />
            ))
        }
        </div>

    </div>
  )
}
