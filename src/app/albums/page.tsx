
import UploadImage from '@/components/ui/uploadImage'
import cloudinary from 'cloudinary'
import CloudineryImage from '@/components/ui/cloudineryImage';
import { Albumcard } from './Album-card';

export type Folder={
    name :string;
    path :string;
};



export default async function Album() {
   const {folders} = (await cloudinary.v2.api.root_folders() ) as{ folders : Folder[]} ;
  
  

  return (
    <div className='flex justify-around flex-wrap gap-5'>
        {
            folders.map((item)=>(
                <Albumcard folder={item}/>
            ))
        }
    </div>
    
  )
}
