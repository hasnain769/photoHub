'use client'
import { searchResult } from "@/app/gallery/page"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FolderPlus } from "lucide-react"
import { useState } from "react"
import { Movetoalbum } from "./actions"

export function Addtoalbum({image}:{image:searchResult}) {
    const [album,setalbum]= useState('family')
    const [open , openchange]=useState(false)
  return (
    <Dialog open={open} onOpenChange={openchange}>
      <DialogTrigger asChild>
        <Button variant="outline"><FolderPlus className="mr-2 h-4 w-4" />
              <span>Add to Album</span></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add to Album</DialogTitle>
          <DialogDescription>
            write a name to move image to album
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Album
            </Label>
            <Input 
            onChange={(e)=>setalbum(e.target.value)}
            id="name" value={album} className="col-span-3" />
          </div>
          
        </div>
        <DialogFooter>
          <Button type="submit"
          onClick={async()=>{
            openchange(false);
            await Movetoalbum(image,album)
          }}
          >Move to album</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
