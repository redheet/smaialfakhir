import Footer from '../layout/footer';
import NavMenu from '../layout/nav-menu';
import Head from '../ui/Head';

function Beasiswa() {
  return (
    <>
      <Head title="Program Beasiswa" />
      <NavMenu />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <nav aria-label="Breadcrumb" className="flex">
          <ol className="flex overflow-hidden rounded-lg border border-gray-200 text-gray-600 mb-5">
            <li className="flex items-center">
              <a href="/" className="flex h-10 items-center gap-1.5 bg-gray-100 px-4 transition hover:text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

              <a href="#" className="flex h-10 items-center bg-white pe-4 ps-8 text-xs font-medium transition hover:text-gray-900">
                Program Beasiswa
              </a>
            </li>
          </ol>
        </nav>
        <div className="max-w-xl mb-10 md:mx-auto text-center md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Program Beasiswa
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
              <span className="relative">Program Beasiswa</span>
            </span>
          </h2>
          <h3 className="inline-block font-sans text-lg font-semibold tracking-wider mb-4 md:mx-auto">
            Raih Beasiswa bagi Kamu Siswa/i yang Mendapat Predikat 10 Terbaik di Kelas!
          </h3>
          <p className="text-base text-gray-700 mb-5 md:text-lg">
            Bagi kamu siswa/i SD atau MI sederajat yang saat ini duduk di kelas 6, SMPI Modern Al Fakhir memberikan peluang diskon hingga 75% loh! 👏🏻👏🏻
          </p>
          <span className="inline-block font-sans text-lg font-semibold tracking-wider mb-4 md:mx-auto">PERSYARATAN :</span>
          <p className="text-base text-gray-700 mb-7 md:text-lg">
            1. Surat Keterangan Siswa Terbaik dari Sekolah Asal2. Foto Copy Rapor dari kelas 4-6 SD/MI <br />
            2. Foto Copy Rapor kelas 4-6 SD/MI <br />
            3. Foto Copy Akta Kelahiran dan Kartu Keluarga
          </p>
          <span className="inline-block font-sans text-lg font-semibold tracking-wider mb-4 md:mx-auto">
            Yuk segera daftarkan diri kalian selambatnya 29 Februari 2024 karena kuota terbatas!
          </span>
          <p className="text-base text-gray-700 md:text-lg">
            Untuk informasi lebih lanjut, silakan menghubungi kami di, Tlp./WA :{' '}
            <a href="https://wa.me/6285281752123" target="_blank">
              <span className="font-semibold">0852-8175-2123</span>
            </a>{' '}
            Kantor IYSA :{' '}
            <a href="https://maps.app.goo.gl/ZjWyUgaUz3QDijgu9" target="_blank">
              <span className="font-semibold">Jl. Kemang Raya Rt.03 Rw.06, Pasir Putih, Sawangan Depok, 16519</span>
            </a>
          </p>
        </div>
      </div>
      {/* <div className="bg-white">
        <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">Tujuan</p>
            <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
              Sebagai ruang formal dalam membentuk generasi Islami Modern yang berpengetahuan luas, berakhlak baik dan dapat menerapkan ilmu pengetahuan di
              berbagai aspek kehidupan untuk kesuksesan hidup.di dunia dan di akhirat.
            </p>
          </div>
        </div>
      </div> */}
      <Footer />
    </>
  );
}

export default Beasiswa;
