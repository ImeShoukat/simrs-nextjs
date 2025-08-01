import Link from 'next/link';
const employeesList = () => {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center
        justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <p>Employees List</p>
        <Link href="/lockets/dashboardLocket">Back to Dashboard</Link>
        {/* --- IGNORE --- */}  
    </div>
  );
}
export default employeesList;