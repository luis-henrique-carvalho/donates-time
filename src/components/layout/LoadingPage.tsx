"use client";

import Loading from "@/app/loading";

function LoadingPage() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <div className='pb-4'>Just give us a second.</div>
      <div className='flex items-center justify-center'>
        <Loading />
      </div>
    </div>
  );
}

export default LoadingPage;
