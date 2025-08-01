import Link from 'next/link';

const queuePage = () => {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center
        justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <p>Queue Page</p>
        <Link href="/patiensDisplay/queue">Back to Queue</Link>
        {/* --- IGNORE --- */}  
    </div>
  );
}
export default queuePage;