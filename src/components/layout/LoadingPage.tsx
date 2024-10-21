"use client";

import Loading from "@/app/loading";

function LoadingPage() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <div className='flex items-center justify-center'>
        <Loading />
      </div>
    </div>
  );
}

export default LoadingPage;
