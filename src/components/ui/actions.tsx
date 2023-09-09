"use server"
import { searchResult } from '@/app/gallery/page'
import cloudinary from 'cloudinary'
import { revalidatePath } from 'next/cache'
export default async function SetFavorite(public_id :string ,isfavorited :boolean) {
  if(isfavorited){
    await cloudinary.v2.uploader.add_tag("favorite",[public_id])
  } 
  else{
    await cloudinary.v2.uploader.remove_tag("favorite",[public_id])
  }
  await new Promise((resolve)=>setTimeout(resolve,1000));
 
  revalidatePath("/gallery")
}
export async function Movetoalbum(image :searchResult ,folder :string){
  
  const existingfolder =await cloudinary.v2.api.create_folder(folder);
  await cloudinary.v2.uploader.rename(image,`${folder}/${image}`); 
  
}
