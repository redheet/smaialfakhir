import { YouTubeEmbed } from 'react-social-media-embed';

function modalVideo() {
  return (
    // <div style={{ display: 'flex', justifyContent: 'center' }}>
    //   <YouTubeEmbed url="https://www.youtube.com/watch?v=HpVOs5imUN0" width={800} height={420} />
    // </div>

    //
    <section className="py-6 dark:bg-gray-800">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <YouTubeEmbed url="https://youtu.be/aza0yReeog8?si=-JnssznzccfhMgQL" width={390} height={255} />
            <div className="p-5 border border-t-0">
              {/* <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <a
                  href="/"
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title="Sejarah"
                >
                  Sejarah
                </a>
                <span className="text-gray-600"> — 28 Dec 2020</span>
              </p> */}
              <a
                href="https://youtu.be/aza0yReeog8?si=-JnssznzccfhMgQL/"
                aria-label="Category"
                title="Sejarah"
                target="_blank"
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Sejarah Al-Fakhir
              </a>
              <p className="mb-2 text-gray-700">SMP Islam Modern Al Fakhir didirikan oleh Bpk. Deni Irawan, M.Pd pada bulan Oktober 2023.</p>
              <a
                href="https://youtu.be/aza0yReeog8?si=-JnssznzccfhMgQL/"
                aria-label=""
                target="_blank"
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Selengkapnya
              </a>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <YouTubeEmbed url="https://youtu.be/yDqB-8-UQAw?si=bNWtRffnThELm0Sm" width={390} height={255} />

            <div className="p-5 border border-t-0">
              <a
                href="https://youtu.be/yDqB-8-UQAw?si=bNWtRffnThELm0Sm"
                aria-label="Category"
                title="manfaat"
                target="_blank"
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Al-Fakhir Bersama UST Deni
              </a>
              <p className="mb-2 text-gray-700">Pembahasan tentang manfaat SMP Islam Modern Al-Fakhir untuk masyarakat.</p>
              <a
                href="https://youtu.be/yDqB-8-UQAw?si=bNWtRffnThELm0Sm"
                aria-label=""
                target="_blank"
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Selengkapnya
              </a>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <YouTubeEmbed url="https://youtube.com/shorts/RnmgymAINOU?si=37GvYkMwZcokrvjT" width={390} height={255} />

            <div className="p-5 border border-t-0">
              <a
                href="https://youtube.com/shorts/RnmgymAINOU?si=37GvYkMwZcokrvjT"
                aria-label="Category"
                title="alfakhir"
                target="_blank"
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Siswa Al-Fakhir
              </a>
              <p className="mb-2 text-gray-700">Yumna - Siswi yang mendaftar melalui program beasiswa Al-Fakhir.</p>
              <a
                href="https://youtube.com/shorts/RnmgymAINOU?si=37GvYkMwZcokrvjT"
                aria-label=""
                target="_blank"
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Selengkapnya
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* popup message */}
      {/* <aside className="fixed bottom-4 end-4 z-50 flex items-center justify-center gap-4 rounded-lg bg-black px-5 py-3 text-white">
        <a href="#" target="_blank" rel="noreferrer" className="text-sm font-medium hover:opacity-75">
          Hey! Come Check This Out 👋
        </a>

        <button className="rounded bg-white/20 p-1 hover:bg-white/10">
          <span className="sr-only">Close</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </aside> */}
    </section>
  );
}

export default modalVideo;
