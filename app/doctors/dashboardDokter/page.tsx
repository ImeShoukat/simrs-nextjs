import Link from 'next/link';
const DashboardDokter = () => {
  return (
    <div>
        <div>dashboard dokter</div> 
        <Link href="/doctors/appointmentHistory">Pasien 1</Link>
    </div>
  );
}
export default DashboardDokter;