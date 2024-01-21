export default function HeaderReg({ step }) {
  return (
    <h2
      className={`${
        step === "bayar" ? "mt-0 lg:mt-36 text-left" : "text-left"
      }`}
    >
      {step === "riwayat" ? (
        <>Riwayat Hidup</>
      ) : step === "info" ? (
        <>Info Pengajuan</>
      ) : step === "bayar" ? (
        <>Pilih Pembayaran</>
      ) : (
        <>Status Pembayaran</>
      )}
    </h2>
  );
}
