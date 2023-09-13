import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Folder } from "./page"

export function Albumcard({folder}:{folder:Folder}) {
  return (
    <Card className="w-[350px] rounded-md">
      <CardHeader>
        <CardTitle>{folder.name}</CardTitle>
        <CardDescription>photos Album of {folder.name}</CardDescription>
      </CardHeader>
     
      <CardFooter className="flex justify-between">
        
      <Link href={`/albums/${folder.name}`}><Button>Go to Album</Button> </Link>
      </CardFooter>
    </Card>
  )
}
