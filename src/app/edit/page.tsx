"use client";
import { Button } from "@/components/ui/button";
import CloudineryImage from "@/components/ui/cloudineryImage";
import { Search } from "lucide-react";
import { CldImage } from "next-cloudinary";
import React, { useState } from "react";

export default function page({
  searchParams: { public_id },
}: {
  searchParams: {
    public_id: string;
  };
}) {
  const [transformation, settransformation] = useState<
    undefined | "generative-fill" | "blur" | "remove-background" | "grayscale"
  >();
  return (
    <div className="flex flex-col">
      <h2 className="text-3xl">EDIT</h2>
      <div className="flex gap-4 mt-10">
        <Button variant="secondary" onClick={() => settransformation(undefined)}>clear all</Button>
        <Button onClick={() => settransformation("generative-fill")}>
          Generative fill
        </Button>
        <Button onClick={() => settransformation("blur")}>Blur</Button>
        <Button onClick={() => settransformation("grayscale")}>grayscale</Button>
        <Button onClick={() => settransformation("remove-background")}>Remove Background</Button>
      </div>
      <div className="mt-5 flex gap-12">
        <CldImage src={public_id} alt="image" width={300} height={350} />
        {transformation == "generative-fill" && (
          <CldImage
            src={public_id}
            alt="image"
            width={300}
            height={350}
            crop="pad" // Returns the given size with padding
            fillBackground
          />
        )}
        {transformation == "blur" && (
          <CldImage
            src={public_id}
            alt="image"
            width={300}
            height={350}
            blur="1200"
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
            grayscale
          />
        )}
      </div>
    </div>
  );
}
