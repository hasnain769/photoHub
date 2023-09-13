import {
   
    CreditCard,
    
    User,
   
   FolderPlus, 
   Pencil,
  } from "lucide-react"
  
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
  
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import MenuIcon from "./MenuIcon"
import { Addtoalbum } from "./Addtoalbum"
import { searchResult } from "@/app/gallery/page"
import Link from "next/link"
  
  export function DropdownMenuDemo({image}:{image:searchResult}) {
    
    return (
      <div className='absolute top-7 right-[3rem] w-1 h-4 hover:text-black cursor-pointer'>
        
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
         <Button variant="ghost" className="w-10 h-8 rounded-none "><MenuIcon/> </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-32">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              {/* <FolderPlus className="mr-2 h-4 w-4" />
              <span>Add to Album</span> */}
              <Addtoalbum image={image}/>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href={`/edit?public_id=${encodeURIComponent(image.public_id)}`}><Pencil className="w-4 h-4 mr-8"/>Edit</Link>
            </DropdownMenuItem>
            
            
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          
          
          
        </DropdownMenuContent>
      </DropdownMenu>
      </div>
    )
  }
  