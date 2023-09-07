
import UploadImage from '@/components/ui/uploadImage'
import cloudinary from 'cloudinary'
import CloudineryImage from '@/components/ui/cloudineryImage';
 type searchResult ={
    public_id : string,
}

export default async function page() {
   const result=await cloudinary.v2.search
  .expression('resource_type:image ')
  .sort_by('public_id','desc')
  .max_results(10)
  .execute() as {resources : searchResult[]}; 
  

  return (
    <div className='flex flex-col'>
         <div className='flex justify-between text-4xl   font-semibold px-3'>
         <h2>Gallery</h2>
        <UploadImage/>
         </div>
        
        <div className='flex   justify-evenly flex-wrap pt-16'>
        {
            result.resources.map((item)=>(
             <CloudineryImage src={item.public_id}
              key={item.public_id}
             alt="something"
             width='400'
             height ='300'
             />
            ))
        }
        </div>

    </div>
  )
}
