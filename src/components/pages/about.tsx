// import Breadcrumb from '../layout/breadcrumbs';
import Building from '../../assets/img/building.jpg';
import Footer from '../layout/footer';
import NavMenu from '../layout/nav-menu';
import Head from '../ui/Head';

function About() {
  return (
    <>
      <Head title="Sejarah" />
      <NavMenu />

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        {/* <Breadcrumb /> */}
        <nav aria-label="Breadcrumb" className="flex">
          <ol className="flex overflow-hidden rounded-lg border border-gray-200 text-gray-600">
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
                Sejarah
              </a>
            </li>
          </ol>
        </nav>
        {/* <Breadcrumb /> */}

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:pr-10">
            <a href="/" aria-label="Go Home" title="Logo" className="inline-block mb-5"></a>
            <h5 className="mb-4 text-4xl font-extrabold leading-none">Sejarah Sekolah</h5>
            <p className="mb-6 text-gray-900">
              SMA Islam Modern Al Fakhir didirikan oleh Bpk. Deni Irawan, M.Pd pada 1 Agustus 2024. Arti nama Al -Fakhir
              artinya adalah kemuliaan, kebesaran atau kebanggaan dengan harapan sekolah ini bisa menjadi sekolah yang
              besar dan juga setiap siswa-siswi yang bersekolah di sekolah ini menjadi sosok yang membanggakan bagi
              dirinya sendiri, keluarga, juga masyarakat.
            </p>
            <hr className="mb-5 border-gray-300" />
            <div className="flex items-center space-x-4">
              <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                </svg>
              </a>
              <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                  <circle cx="15" cy="15" r="4" />
                  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                </svg>
              </a>
              <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                </svg>
              </a>
              <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6">
                  <path d="M23.8,7.2c0,0-0.2-1.7-1-2.4c-0.9-1-1.9-1-2.4-1C17,3.6,12,3.6,12,3.6h0c0,0-5,0-8.4,0.2 c-0.5,0.1-1.5,0.1-2.4,1c-0.7,0.7-1,2.4-1,2.4S0,9.1,0,11.1v1.8c0,1.9,0.2,3.9,0.2,3.9s0.2,1.7,1,2.4c0.9,1,2.1,0.9,2.6,1 c1.9,0.2,8.2,0.2,8.2,0.2s5,0,8.4-0.3c0.5-0.1,1.5-0.1,2.4-1c0.7-0.7,1-2.4,1-2.4s0.2-1.9,0.2-3.9v-1.8C24,9.1,23.8,7.2,23.8,7.2z M9.5,15.1l0-6.7l6.5,3.4L9.5,15.1z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <img className="object-cover w-full h-56 rounded shadow-lg sm:h-96" src={Building} alt="" />
          </div>
        </div>
        <div className="mt-8">
          {/* timeline  */}
          {/* <ol className="border-l border-neutral-300 dark:border-neutral-500 md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t"> */}
          {/* First item  */}
          {/* <li>
              <div className="flex-start flex items-center pt-2 md:block md:pt-0">
                <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0"></div>
                <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
                  01.07.2021
                </p>
              </div>
              <div className="ml-4 mt-2 pb-5 md:ml-0">
                <h4 className="mb-1.5 text-xl font-semibold">
                  Title of section 1
                </h4>
                <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque scelerisque diam non nisi semper, et elementum lorem
                  ornare. Maecenas placerat facilisis mollis. Duis sagittis
                  ligula in sodales vehicula.
                </p>
              </div>
            </li> */}

          {/* <!--Second item--> */}
          {/* <li>
              <div className="flex-start flex items-center pt-2 md:block md:pt-0">
                <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0"></div>
                <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
                  13.09.2021
                </p>
              </div>
              <div className="ml-4 mt-2 pb-5 md:ml-0">
                <h4 className="mb-1.5 text-xl font-semibold">
                  Title of section 2
                </h4>
                <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                  Libero expedita explicabo eius fugiat quia aspernatur autem
                  laudantium error architecto recusandae natus sapiente sit nam
                  eaque, consectetur porro molestiae ipsam an deleniti.
                </p>
              </div>
            </li> */}

          {/* <!--Third item--> */}
          {/* <li>
              <div className="flex-start flex items-center pt-2 md:block md:pt-0">
                <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0"></div>
                <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
                  25.11.2021
                </p>
              </div>
              <div className="ml-4 mt-2 pb-5 md:ml-0">
                <h4 className="mb-1.5 text-xl font-semibold">
                  Title of section 3
                </h4>
                <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                  Voluptatibus temporibus esse illum eum aspernatur, fugiat
                  suscipit natus! Eum corporis illum nihil officiis tempore.
                  Excepturi illo natus libero sit doloremque, laborum molestias
                  rerum pariatur quam ipsam necessitatibus incidunt, explicabo.
                </p>
              </div>
            </li> */}
          {/* </ol> */}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
