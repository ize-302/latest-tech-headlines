import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonLoader = () => {
  return (
    <div className="bg-red-400 border sm:border-none bg-white sm:bg-transparent p-4 sm:p-0 lg:w-1/2 md:flex lg:justify-between mb-10 md:mb-20 rounded-lg">
      <div className="rounded-lg mb-5 md:mb-0 w-full md:w-2/5">
        <Skeleton
          style={{
            borderRadius: "inherit",
            width: "100%",
            objectFit: "cover",
          }}
          className="h-64 md:h-40"
        />
      </div>
      <div className="w-full md:w-3/5 md:ml-8 md:mr-16 flex flex-col justify-between">
        <div className="md:text-lg font-bold hover:text-orange-400">
          <Skeleton />
          <Skeleton />
          <Skeleton width={140} />
        </div>
        <div className="mt-5 md:mt-0">
          <p>
            {" "}
            <Skeleton width={100} />
          </p>
          <p className="text-xs md:text-sm">
            <Skeleton width={150} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
