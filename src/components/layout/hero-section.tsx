// import { useState } from 'react';
import building from '../../assets/img/building.jpg';
// import Fasilty from './fasilty';
// import project1 from '../../assets/img/project-1.png';
// import project2 from '../../assets/img/project-2.png';
// import project3 from '../../assets/img/project-3.png';
// import project4 from '../../assets/img/project-4.png';
// import project5 from '../../assets/img/project-5.png';
// import project6 from '../../assets/img/project-6.png';
// import project7 from '../../assets/img/project-7.png';
// import project8 from '../../assets/img/project-8.png';
// import project9 from '../../assets/img/project-9.png';
// import project10 from '../../assets/img/project-10.png';
// import project11 from '../../assets/img/project-11.png';
// import project12 from '../../assets/img/project-12.png';

const HeroSection = () => {
  return (
    <>
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full" src={building} alt="" />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            {/* <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Brand new
            </p> */}
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              SMA Islam
              <br className="hidden md:block" />
              Modern <span className="inline-block text-deep-purple-accent-400">Al-Fakhir</span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
              SMA Islam yang mengusung konsep modern, mengadopsi model kelas dan program internasional, namun tetap mengutamakan pendidikan karakter, moral,
              akhlak dan nilai-nilai keislaman.
            </p>
            <div className="flex items-center">
              <a
                href="https://pendaftaran.smai.alfakhir.sch.id"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue hover:bg-teal-700 focus:shadow-outline focus:outline-none"
              >
                Daftar Sekarang
              </a>
              <a
                href="/about"
                aria-label=""
                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-blue"
              >
                Pelajari lebih lanjut
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <Fasilty /> */}
    </>
  );
};
export default HeroSection;
