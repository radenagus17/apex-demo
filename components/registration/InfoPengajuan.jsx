export default function InfoPengajuan({ pl, setPl }) {
  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
        <div className="space-y-1">
          <label>SIM yang dimohon</label>
          <select className="block border border-gray-400 outline-none  text-gray-400/90">
            <option value="">Pilih jenis SIM</option>
            <option value="">A</option>
            <option value="">B</option>
            <option value="">C</option>
          </select>
        </div>
        <div className="space-y-1">
          <label>SIM yang diajukan</label>
          <select className="block border border-gray-400 outline-none  text-gray-400/90">
            <option value="">Pilih jenis pengajuan SIM</option>
            <option value="">A</option>
            <option value="">B</option>
          </select>
        </div>
      </div>
      <div className="space-y-1">
        <label className="max-w-[12rem] block lg:max-w-full">
          Pernah melakukan pelanggaran lalu lintas?
        </label>
        <div className="flex flex-col lg:flex-row gap-1 lg:gap-10 pt-1 text-gray-400/90">
          {/* button yes */}
          <div
            onClick={() => setPl("yes")}
            className="flex cursor-pointer gap-2 max-w-[12rem]"
          >
            {/* rounded */}
            <div className="w-5 h-5 rounded-full border bg-white relative flex items-center justify-center border-black/50">
              {pl === "yes" && (
                <div className="bg-primary p-[0.4rem] rounded-full absolute" />
              )}
            </div>
            <span>Pernah</span>
          </div>
          {/* button no */}
          <div
            onClick={() => setPl("no")}
            className="flex cursor-pointer gap-2 max-w-[12rem]"
          >
            {/* rounded */}
            <div className="w-5 h-5 rounded-full border bg-white relative flex items-center justify-center border-black/50">
              {pl === "no" && (
                <div className="bg-primary p-[0.4rem] rounded-full absolute" />
              )}
            </div>
            <span>Tidak Pernah</span>
          </div>
        </div>
      </div>
      {pl === "yes" && (
        <div className="flex flex-col lg:flex-row gap-1 text-sm  lg:flex-nowrap lg:gap-2">
          <div className="space-y-1">
            <label>Berapa kali melanggar?</label>
            <input
              type="number"
              placeholder="Jumlah pelanggaran"
              className="border border-gray-400 outline-none py-1"
            />
          </div>
          <div className="space-y-1">
            <label>Jenis pelanggaran</label>
            <input
              type="text"
              placeholder="Jenis pelanggaran"
              className="border border-gray-400 outline-none py-1"
            />
          </div>
          <div className="space-y-1">
            <label>Kapan terjadi?</label>
            <input
              type="number"
              placeholder="Kapan terjadi (tahun)"
              className="border border-gray-400 outline-none py-1"
            />
          </div>
        </div>
      )}
      <div className="space-y-1">
        <label>Dimana belajar mengemudi?</label>
        <input
          type="text"
          placeholder="Tempat belajar mengemudi"
          className="border border-gray-400 outline-none"
        />
      </div>
      <div className="space-y-1">
        <label>Jenis kendaraan yang di bawa</label>
        <select className="block border border-gray-400 outline-none  text-gray-400/90">
          <option value="">Pilih jenis kendaraan</option>
          <option value="">Motor</option>
          <option value="">Mobil</option>
        </select>
      </div>
      <div className="space-y-1">
        <label className="max-w-[15rem] block lg:max-w-full">
          Apakah anda suka <br className="block lg:hidden" />
          menelpon saat berkendara?
        </label>
        <div className="flex flex-col lg:flex-row gap-1 lg:gap-10 pt-1 text-gray-400/90">
          {/* button yes */}
          <div
            onClick={() => setPl("yes")}
            className="flex cursor-pointer gap-2 max-w-[12rem] items-center"
          >
            {/* rounded */}
            <div className="w-5 h-5 rounded-full border bg-white relative flex items-center justify-center border-black/50">
              {pl === "yes" && (
                <div className="bg-primary p-[0.4rem] rounded-full absolute" />
              )}
            </div>
            <span>Suka</span>
          </div>
          {/* button no */}
          <div
            onClick={() => setPl("no")}
            className="flex cursor-pointer gap-2 max-w-[12rem] items-center"
          >
            {/* rounded */}
            <div className="w-5 h-5 rounded-full border bg-white relative flex items-center justify-center border-black/50">
              {pl === "no" && (
                <div className="bg-primary p-[0.4rem] rounded-full absolute" />
              )}
            </div>
            <span>Tidak Suka</span>
          </div>
        </div>
      </div>
      <div className="w-full h-[2px] bg-gray-400/50 rounded-full mt-4" />
    </>
  );
}
