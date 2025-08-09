import Link from 'next/link';

const appointmentHistory = () => {
  return (
    <div className="items-center bg-gray-100 font-sans grid grid-rows-[20px_1fr_20px] items-center
        justify-items-center rounded gap-10 sm:p-">
        <p>Appointment History</p>
        <Link href="/doctors/addAppointment">Tambah Pasien</Link>
        <div>tabel kunjungan</div>
        <Link href="/doctors/dashboardDokter">Back to Dashboard</Link>
    </div>
    );
}
export default appointmentHistory;