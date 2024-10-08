import Footer from '../layout/footer';
import NavMenu from '../layout/nav-menu';
import Head from '../ui/Head';

function VisiMisi() {
  return (
    <>
      <Head title="Visi - Misi & Tujuan" />
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
                Visi - Misi & Tujuan
              </a>
            </li>
          </ol>
        </nav>
        <div className="max-w-xl mb-10 md:mx-auto text-center md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Visi & Misi
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
              <span className="relative">Visi - Misi</span>
            </span>
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Terwujudnya pendidikan yang bermutu tinggi dalam membentuk siswa-siswi yang berakhlak, modern, dan menjadi
            kebanggaan orang tua, masyarakat, bangsa dan negara.
          </p>
        </div>
        <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3 items-center text-center">
          <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2 ">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50 ml-[140px]">
              <svg className="w-10 h-10" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="m12.871 11.577l1.244-.902l1.22.902l-.48-1.45l1.245-.883h-1.53l-.455-1.475l-.465 1.475h-1.544l1.244.883zm-.876 4.654q1.753 0 2.994-1.226q1.242-1.226 1.242-3.002q0-.169-.013-.338q-.012-.169-.062-.33q-.233.99-1.035 1.634q-.802.643-1.88.643q-1.266 0-2.137-.872q-.871-.87-.871-2.12q0-.997.563-1.765q.564-.768 1.44-1.086h-.232q-1.779 0-3.007 1.237q-1.228 1.237-1.228 2.991q0 1.776 1.226 3.005q1.225 1.229 3 1.229M12 21.915L9.069 19H5v-4.069L2.085 12L5 9.069V5h4.069L12 2.085L14.931 5H19v4.069L21.915 12L19 14.931V19h-4.069zm0-1.415l2.5-2.5H18v-3.5l2.5-2.5L18 9.5V6h-3.5L12 3.5L9.5 6H6v3.5L3.5 12L6 14.5V18h3.5zm0-8.5"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Beribadah dengan benar</h6>
          </div>
          <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50 ml-[140px]">
              <svg className="w-10 h-10" viewBox="0 0 48 48">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M23.103 20.817a1 1 0 0 1 1.794 0l2.985 6.048a1 1 0 0 0 .753.548l6.675.97a1 1 0 0 1 .554 1.705l-4.83 4.708a1 1 0 0 0-.288.885l1.14 6.648a1 1 0 0 1-1.45 1.054l-5.97-3.138a1 1 0 0 0-.931 0l-5.97 3.138a1 1 0 0 1-1.452-1.054l1.14-6.648a1 1 0 0 0-.287-.885l-4.83-4.708a1 1 0 0 1 .554-1.706l6.675-.97a1 1 0 0 0 .753-.547zM36 4H12v10l12 5l12-5z"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Berakhlak Mulia</h6>
          </div>
          <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50 ml-[140px]">
              <svg className="w-10 h-10" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 21q-.45 0-.862-.162t-.738-.488l-6.7-6.725q-.875-.875-1.287-2T2 9.275Q2 6.7 3.675 4.85T7.85 3q1.2 0 2.263.475T12 4.8q.8-.85 1.863-1.325T16.125 3q2.5 0 4.188 1.85T22 9.25q0 1.225-.425 2.35t-1.275 2l-6.725 6.75q-.325.325-.725.488T12 21m1-13q.25 0 .475.125t.35.325l1.7 2.55h4.15q.175-.425.263-.862t.087-.888q-.05-1.725-1.15-2.963t-2.75-1.237q-.775 0-1.487.3t-1.238.875l-.675.725q-.125.15-.325.238t-.4.087q-.2 0-.4-.087t-.35-.238l-.675-.725q-.525-.575-1.225-.9T7.85 5Q6.2 5 5.1 6.263T4 9.25q0 .45.075.888t.25.862H9q.25 0 .475.125t.35.325l.875 1.3l1.35-4.05q.1-.3.362-.5T13 8m.3 3.25l-1.35 4.05q-.1.3-.375.5t-.6.2q-.25 0-.475-.125t-.35-.325L8.45 13H5.9l5.925 5.925q.05.05.088.063T12 19q.05 0 .088-.012t.087-.063l5.9-5.925H15q-.25 0-.475-.125t-.375-.325z"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Berbadan Sehat</h6>
          </div>
          <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2 ">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50 ml-[140px]">
              <svg className="w-10 h-10" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M13 3c3.9 0 7 3.1 7 7c0 2.8-1.6 5.2-4 6.3V21H9v-3H8c-1.1 0-2-.9-2-2v-3H4.5c-.4 0-.7-.5-.4-.8L6 9.7C6.2 5.9 9.2 3 13 3m0-2C8.4 1 4.6 4.4 4.1 8.9L2.5 11c-.6.8-.6 1.8-.2 2.6c.4.7 1 1.2 1.7 1.3V16c0 1.9 1.3 3.4 3 3.9V23h11v-5.5c2.5-1.7 4-4.4 4-7.5c0-5-4-9-9-9m-3 9c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m3 0c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m3 0c-.5 0-1-.4-1-1s.5-1 1-1s1 .4 1 1s-.5 1-1 1"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Berpengetahuan Luas</h6>
          </div>
          <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50 ml-[140px]">
              <svg className="w-10 h-10" viewBox="0 0 48 48">
                <g fill="none" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4.667"
                    d="M19.036 44c-.98-3.195-2.458-5.578-4.435-7.147c-2.965-2.353-7.676-.89-9.416-3.318c-1.74-2.428 1.219-6.892 2.257-9.526c1.039-2.634-3.98-3.565-3.394-4.313c.39-.499 2.927-1.937 7.609-4.316C12.987 7.794 17.9 4 26.398 4C39.144 4 44 14.806 44 21.68c0 6.872-5.88 14.276-14.256 15.873c-.749 1.09.331 3.24 3.24 6.447"
                  />
                  <path
                    strokeLinejoin="round"
                    strokeWidth="4"
                    d="M19.5 14.5c-.654 2.534-.46 4.314.583 5.339c1.042 1.024 2.818 1.695 5.328 2.01c-.57 3.269.125 4.802 2.083 4.6c1.958-.201 3.135-1.015 3.53-2.44c3.06.86 4.719.14 4.976-2.16c.385-3.45-1.475-6.201-2.238-6.201c-.762 0-2.738-.093-2.738-1.148s-2.308-1.65-4.391-1.65s-.83-1.405-3.69-.85c-1.907.37-3.055 1.203-3.443 2.5Z"
                    clipRule="evenodd"
                  />
                  <path
                    strokeLinecap="round"
                    strokeWidth="4"
                    d="M30.5 25.5c-1.017.631-2.412 1.68-3 2.5c-1.469 2.05-2.66 3.298-2.92 4.608"
                  />
                </g>
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Berfikir Kritis & Kreatif</h6>
          </div>
          <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50 ml-[140px]">
              <svg className="w-10 h-10" viewBox="0 0 48 48">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M23.224 13.542c2.496-2.86 4.767-5.13 3.701-6.28S8.613 12.515 9.586 14.187c.58.996 15.989 12.179 17.509 13.078c1.785 1.056 4.653-.18 4.4-2.144L29.168 7.11s1.178 1.582 1.542 2.675m4.374 16.722c-.252-1.963-2.327-18.012-2.327-18.012s1.178 1.582 1.542 2.676"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M28.383 33.87c0-6.218-2.09-20.011-2.09-20.011s1.178 1.581 1.543 2.675m-5.766-1.987c-.364-1.094-1.541-2.676-1.541-2.676s.593 7.208 4.041 8.638c-9.246-4.479-13.647 10.178-17.642 5.888c-2.851-3.06 2.27-7.36 2.27-7.36"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M37.916 14.03c-.365-1.093-1.542-2.675-1.542-2.675S38.4 29.25 38.832 33.87c.205 2.201-3.874 3.21-5.388-.49s-.126-4.753.799-4.753s2.44 3.084 0 4.514s-6.505 2.468-7.738 3.897s-3.393 4.71-4.823 4.71s-4.233-1.541-1.037-7.878m20.804-2.72c-.253-3.28-1.963-16.57-1.963-16.57s1.178 1.581 1.542 2.675M13.993 8.944c1.724-1.073 5.278-1.745 7.129-3.196M8.981 27.193C6.682 29.72 7.327 34.85 10.02 34.01c1.005-.314 2.215-2.404 4.233-3.308c3.387-1.516 7.719-2.29 7.458-4.71c-.336-3.126-3.336-4.945-3.336-4.945"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M25.818 29.019c-1.437-.635-1.907-1.367-1.907-1.367c1.164 2.6 2.061 4.184 2.09 5.432s-6.407 5.236-9.17 5.236c-3.216 0-5.57-2.312-4.656-6.15m-2.04-17.435c-2.114.98-3.425 5.617-1.813 5.149"
                />
                <circle
                  cx="24"
                  cy="24"
                  r="21.5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Cinta Al-Qur'an</h6>
          </div>
        </div>
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-gray-500 transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Selengkapnya
          </a>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">Tujuan</p>
            <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
              Sebagai ruang formal dalam membentuk generasi Islami Modern yang berpengetahuan luas, berakhlak baik dan
              dapat menerapkan ilmu pengetahuan di berbagai aspek kehidupan untuk kesuksesan hidup di dunia dan di
              akhirat.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default VisiMisi;
