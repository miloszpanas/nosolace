"use server";

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const SkeletonCardGrid = async () => {
  return (
    <div className="grid grid-cols-3 gap-12 items-center justify-items-center">
      {Array.from({ length: 9 }).map((_, index) => (
        <div className="flex flex-col space-y-3" key={index}>
          <Skeleton className="h-[225px] w-[350px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[350px]" />
            <Skeleton className="h-4 w-[300px]" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonCardGrid;
