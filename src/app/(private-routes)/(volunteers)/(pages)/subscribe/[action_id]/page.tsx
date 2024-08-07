import SubscribeActionButton from "@/app/(public-routes)/(actions)/components/SubscribeActionButton";

const ActionSubscribe = async ({
  params,
}: {
  params: { action_id: string };
}) => {
  return (
    <main className='flex min-h-[95%] flex-col gap-4 bg-muted/40 md:gap-8 md:p-8'>
      <div>Subscribe</div>
      <div className='flex justify-center'>
        <SubscribeActionButton action_id={params.action_id} />
      </div>
    </main>
  );
};

export default ActionSubscribe;
