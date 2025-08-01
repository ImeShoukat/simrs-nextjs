import Link from 'next/link';
const stockHistory = () => {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center
        justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <p>Tickets Page</p>
        <Link href="/patiensDisplay/tickets">Back to Tickets</Link>
        {/* --- IGNORE --- */}  
    </div>
  );
}
export default stockHistory;