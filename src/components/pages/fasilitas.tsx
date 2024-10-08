import Footer from '../layout/footer';
import NavMenu from '../layout/nav-menu';
import Head from '../ui/Head';
// import user from '../../assets/img/profile.png';
// import scheme from '../../assets/img/scheme2.png';
// import { LazyLoadImage } from 'react-lazy-load-image-component';


const data = [
    { id: 1, name: 'Ruang Belajar / Ruang Kelas', qty: 2 },
    { id: 2, name: 'Ruang Kepala Sekolah', qty: 1 },
    { id: 3, name: 'Ruang Guru', qty: 1 },
    { id: 4, name: 'Ruang Tata Usaha', qty: 1 },
    { id: 5, name: 'Toilet', qty: 4 },
    { id: 6, name: 'Mushola', qty: 1 },
    { id: 7, name: 'Lapangan Olah Raga', qty: 1 },
    { id: 8, name: 'Ruang Perpustakaan', qty: 1 },
    { id: 9, name: 'Ruang Multimedia', qty: 1 },
    { id: 10, name: 'Lobby', qty: 1 },
    { id: 11, name: 'Pos Security', qty: 2 },
    { id: 12, name: 'Ruang Meeting', qty: 1 },
    { id: 13, name: 'Ruang Tamu', qty: 1 },
    { id: 14, name: 'Ruang BK', qty: 1 },
    { id: 15, name: 'Ruang UKS', qty: 1 },
    { id: 16, name: 'Kantin', qty: 1 },
    { id: 17, name: 'Kolam Renang', qty: 1 },
  ];

function Fasilitas() {
  return (
    <>
      <Head title="Struktur Organisasi Sekolah" />
      <NavMenu />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <nav aria-label="Breadcrumb" className="flex">
          <ol className="flex overflow-hidden rounded-lg border border-gray-200 text-gray-600 mb-5">
            <li className="flex items-center">
              <a href="/" className="flex h-10 items-center gap-1.5 bg-gray-100 px-4 transition hover:text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>

                <span className="ms-1.5 text-xs font-medium"> Home </span>
              </a>
            </li>

            <li className="relative flex items-center">
              <span className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"></span>

              <a
                href="#"
                className="flex h-10 items-center bg-white pe-4 ps-8 text-xs font-medium transition hover:text-gray-900"
              >
                Fasilitas Sekolah
              </a>
            </li>
          </ol>
        </nav>
        <div className="max-w-xl mb-10 md:mx-auto text-center md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Sarana dan Prasarana
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern id="d9d7687a-355f-4502-8ec4-7945db034688" x="0" y="0" width=".135" height=".30">
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect fill="url(#d9d7687a-355f-4502-8ec4-7945db034688)" width="52" height="24" />
              </svg>
              <span className="relative">Fasilitas Sekolah</span>
            </span>
          </h2>
        </div>
      </div>

      <div className="flex flex-col container mx-auto">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Nama Fasilitas
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Jumlah
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{item.id}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{item.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{item.qty}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}

export default Fasilitas;
