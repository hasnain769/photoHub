"use client";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { blur ,grayscale } from "@cloudinary/url-gen/actions/effect";
import { CldImage } from "next-cloudinary";

import React, { useState } from "react";

export default function Page({
  
  searchParams: { public_id },
}: {
  searchParams: {
    public_id: string;
  };
}) {
  const [transformation, settransformation] = useState<
    undefined | "generative-fill" | "blur" | "remove-background" | "grayscale"
  >();
  const [prompt,setprompt]=useState("car");
  return (
    <div className="flex flex-col">
      <h2 className="text-3xl">EDIT</h2>
      <div className="flex gap-4 mt-10 flex-wrap">
        <Button variant="secondary" onClick={() => settransformation(undefined)}>clear all</Button>
        
        <Button onClick={() => settransformation("blur")}>Blur</Button>
        <Button onClick={() => settransformation("grayscale")}>grayscale</Button>
        <Button onClick={() => settransformation("remove-background")}>Remove Background</Button>
      </div>
      <div className="flex gap-2 mt-5">
      <Input 
            onChange={(e)=>setprompt(e.target.value)}
            id="name" value={prompt}
             className="col-span-3" />
            <Button onClick={() => settransformation("generative-fill")}>
          Generative fill
        </Button>
      </div>
      
      <div className="mt-5 flex lg:flex-row flex-col  lg:gap-12 gap-4 ">
        {transformation===undefined &&(
          <CldImage src={public_id} alt="image" width={300} height={350} />
        )}
        
        {transformation ==="generative-fill" && (
          <CldImage
            src={public_id}
            alt="image"
            width={400}
            height={350}
            fillBackground ={{
                prompt,
              }
            }
          />
        )}
        {transformation == "blur" && (
          <CldImage
            src={public_id}
            alt="image"
            width={300}
            height={350}
            //blur="1200"
            />
        )}
        {transformation == "remove-background" && (
          <CldImage
            src={public_id}
            alt="image"
            width={300}
            height={350}
            removeBackground
          />
        )}
        {transformation == "grayscale" && (
          <CldImage
            src={public_id}
            alt="image"
            width={300}
            height={350}
           // grayscale
          />
        )}
      </div>
    </div>
  );
}
