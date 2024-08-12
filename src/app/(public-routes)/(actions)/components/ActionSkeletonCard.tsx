import React from "react";
// Components
import { Skeleton } from "@/components/ui/skeleton";

export function ActionSkeletonCard() {
  return (
    <div className='rounded-lg border p-4 shadow-md'>
      <article>
        <header className='flex flex-col gap-4'>
          <div className='flex flex-col gap-3'>
            <Skeleton className='h-6 w-3/4' />
            <div className='flex flex-row items-center justify-between'>
              <Skeleton className='h-4 w-1/4' />
              <Skeleton className='h-4 w-1/4' />
            </div>
          </div>
          <section className='flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
              <Skeleton className='h-4 w-1/4' />
            </div>
            <div className='flex items-center gap-2'>
              <Skeleton className='h-4 w-1/4' />
            </div>
            <div className='flex items-center gap-2'>
              <Skeleton className='h-4 w-1/4' />
            </div>
          </section>
          <section className='flex flex-col gap-4'>
            <div className='flex flex-col gap-4'>
              <div className='bold flex flex-row justify-between'>
                <Skeleton className='h-4 w-1/4' />
                <Skeleton className='h-4 w-1/4' />
              </div>
              <Skeleton className='h-4 w-full' />
            </div>
            <div className='flex flex-row items-center justify-center gap-2'>
              {Array(3)
                .fill(0)
                .map((_, index) => (
                  <Skeleton key={index} className='h-10 w-10 rounded-full' />
                ))}
            </div>
          </section>
        </header>
        <section className='mt-4'>
          <Skeleton className='mb-2 h-6 w-1/2' />
          <Skeleton className='h-4 w-full' />
          <Skeleton className='h-4 w-full' />
          <Skeleton className='h-4 w-full' />
          <Skeleton className='h-4 w-full' />
          <Skeleton className='h-4 w-full' />
        </section>
        <footer className='mt-4 flex flex-row justify-between'>
          <div className='flex gap-2'>
            <Skeleton className='h-10 w-20' />
          </div>
          <div className='flex gap-2'>
            <Skeleton className='h-10 w-20' />
          </div>
        </footer>
      </article>
    </div>
  );
}
