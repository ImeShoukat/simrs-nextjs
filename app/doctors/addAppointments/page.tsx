import Link from 'next/link';
const appointmentHistory = () => {
  return (
    <div className="">
        <p>Appointment History</p>
        <Link href="/doctors/dashboardDokter">Back to Dashboard</Link> 
    </div>
  );
}
export default appointmentHistory;