import Link from 'next/link';

const appointmentHistory = () => {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center
        justify-items-center min-h-screen p-8 pb-2 sm:p-20">
        <p>Appointment History</p>
        <Link href="/doctors/addAppointment">Tambah Pasien</Link>
        <div>tabel kunjungan</div>
        <Link href="/doctors/dashboardDokter">Back to Dashboard</Link>
    </div>
    );
}
export default appointmentHistory;