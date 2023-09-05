
import UploadImage from '@/components/ui/uploadImage'
import cloudinary from 'cloudinary'
export default function page() {
    cloudinary.v2.search
  .expression('resource_type:image ')
  .sort_by('public_id','desc')
  .max_results(30)
  .execute()
  
  return (
    <div className=''>
         <div className='flex justify-between text-4xl   font-semibold px-3'>
         <h2>Gallery</h2>
        

        <UploadImage/>
         </div>
        

    </div>
  )
}
