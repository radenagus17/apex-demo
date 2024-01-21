import DatePicker from "react-datepicker";

// datepicker css
import "react-datepicker/dist/react-datepicker.css";

export default function RiwayatHidup({
  name,
  setName,
  tempat,
  setTempat,
  tanggalLahir,
  setTanggalLahir,
}) {
  return (
    <>
      <div className="space-y-1">
        <label>Nama</label>
        <input
          type="text"
          placeholder="Nama lengkap"
          className="border border-gray-400 outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="space-y-1">
        <label>Tempat / Tanggal Lahir</label>
        <div className="flex gap-4 relative">
          <input
            type="text"
            placeholder="Tempat"
            className="border border-gray-400 outline-none flex-1"
            value={tempat}
            onChange={(e) => setTempat(e.target.value)}
          />
          <div className="flex-1 lg:flex-none">
            <DatePicker
              className="border lg:w-[24vh] border-gray-400 outline-none w-full"
              dateFormat="dd/MM/yyyy"
              selected={tanggalLahir}
              onChange={(date) => setTanggalLahir(date)}
              dropdownMode="select"
              showMonthDropdown
              showYearDropdown
              placeholderText="(dd/mm/yy)"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="space-y-1">
          <label>Jenis Kelamin</label>
          <select className="block border border-gray-400 outline-none text-gray-400/90">
            <option value="">Pilih gender</option>
            <option value="">Male</option>
            <option value="">Female</option>
          </select>
        </div>
        <div className="space-y-1 lg:order-3">
          <label>Agama</label>
          <select className="block border border-gray-400 outline-none text-gray-400/90">
            <option value="">Pilih agama</option>
            <option value="">Islam</option>
            <option value="">Kristen</option>
            <option value="">Budha</option>
          </select>
        </div>
        <div className="space-y-1 lg:order-2">
          <label>Status</label>
          <select className="block border border-gray-400 outline-none text-gray-400/90">
            <option value="">Pilih status</option>
            <option value="">Single</option>
            <option value="">Parent</option>
          </select>
        </div>
        <div className="space-y-1 lg:order-4">
          <label>Pekerjaan</label>
          <select className="block border border-gray-400 outline-none text-gray-400/90">
            <option value="">Pekerjaan saat ini</option>
            <option value="">Swasta</option>
            <option value="">PNS</option>
          </select>
        </div>
      </div>
      <div className="space-y-1">
        <label>Suku / Bangsa</label>
        <select className="block border border-gray-400 outline-none text-gray-400/90">
          <option value="">Pilih status kebangsaan</option>
          <option value="">Indonesia</option>
          <option value="">Jerman</option>
        </select>
      </div>
      <div className="space-y-1">
        <label>Alamat Lengkap</label>
        <textarea
          placeholder="Alamat tempat tinggal"
          className="block border border-gray-400 outline-none"
          rows="4"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label>No.tlp/hp</label>
          <input
            type="text"
            placeholder="+62 1234 5678"
            className="border border-gray-400 outline-none"
          />
        </div>
        <div className="space-y-1">
          <label>Pendidikan Terakhir</label>
          <select className="block border border-gray-400 outline-none text-gray-400/90">
            <option value="">Pilih pendidikan terakhir</option>
            <option value="">Diploma</option>
            <option value="">Sarjana</option>
          </select>
        </div>
      </div>
    </>
  );
}
