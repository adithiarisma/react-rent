import { Link } from "react-router-dom";

const Search = () => {
  return (
    <div className="bg-white shadow-md w-11/12 mx-auto p-8 my-10 rounded-lg sm:max-w-[1200px] sm:-mt-14 sm:relative sm:z-10 ">
      <form className="sm:flex sm:justify-between" onSubmit={(e) => e.preventDefault()}>
        <form className="flex flex-row items-center gap-x-8" action="">
          <div className="flex flex-col gap-y-4">
            <label htmlFor="tipeDriver">Tipe Driver</label>
            <input placeholder="Pilih Tipe Driver" className="h-10 w-52 px-3 border-1 border-border-gray-200  rounded-sm" type="text" />
          </div>
          <div className="flex flex-col gap-y-4">
            <label htmlFor="tanggal">Tanggal</label>
            <input className="h-10 w-52 px-3 border-1 bborder-border-gray-200 rounded-sm" type="date" />
          </div>
          <div className="flex flex-col gap-y-4">
            <label htmlFor="waktuJemput">Waktu Jemput/Ambil</label>
            <input type="time" placeholder="Pilih Waktu" className="h-10 w-52 px-3 border-1 border-border-gray-200 rounded-sm" />
          </div>
          <div className="flex flex-col gap-y-4">
            <label htmlFor="jumlahPenumpang">Jumlah Penumpang (optional)</label>
            <input type="number" placeholder="Jumlah Penumpang" className="h-10 w-52 px-3 border-1 border-border-gray-200  rounded-sm" />
          </div>
          <Link to={"/result"}>
            <button className="flex justify-center bg-[#5CB85F] rounded-lg h-12 w-28 items-center shadow-custom-shadow-1">
              <div className="font-helvetica text-white font-bold">Cari Mobil</div>
            </button>
          </Link>
          {/* <Listbox.Label className="block text-sm font-medium text-gray-700">Assigned to</Listbox.Label> */}
        </form>
      </form>
    </div>
  );
};

export default Search;
