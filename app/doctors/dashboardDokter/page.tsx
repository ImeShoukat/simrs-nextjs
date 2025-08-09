import Link from 'next/link';
const DashboardDokter = () => {
  return (
    <div>
        <div>dashboard dokter</div> 
        <Link href="/doctors/appointmentHistory">Pasien 1</Link>
    </div>
  );
}
export const metadata = {
  title: "Dashboard Dokter",
  description: "Tempat dokter mengelola data kunjungan pasien",
};
export default DashboardDokter;