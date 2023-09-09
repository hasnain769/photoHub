import {
   
    CreditCard,
    
    User,
   
   FolderPlus ,
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
  
  export function DropdownMenuDemo(props:any) {
    return (
      <div {...props}>
        
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
         <Button variant="ghost" className="w-10 h-8 rounded-none "><MenuIcon/> </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-32">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <FolderPlus className="mr-2 h-4 w-4" />
              <span>Add to Album</span>
              
            </DropdownMenuItem>
            
            
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          
          
          
        </DropdownMenuContent>
      </DropdownMenu>
      </div>
    )
  }
  