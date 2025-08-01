import Link from 'next/link';
const dashboardLockets = () => {
    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center
            justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <p>Dashboard Lockets</p>
            <Link href="/lockets/dasboardLockets">Back to Dashboard</Link>
            {/* --- IGNORE --- */}  
        </div>
    );
}
export default dashboardLockets;