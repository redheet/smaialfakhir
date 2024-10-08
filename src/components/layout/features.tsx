import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import { FreeMode, Pagination } from 'swiper/modules';

import { RxArrowTopRight } from 'react-icons/rx';
import { ProgramData } from '@/constant/program';

const Features = () => {
  return (
    <section>
      <div className="flex items-center justify-center flex-col sm:h-[600px] bg-white">
        <h1 className="font-semibold text-gray-900 text-4xl my-8">Program Kami</h1>
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 15
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 15
            }
          }}
          freeMode={true}
          pagination={{
            clickable: true
          }}
          modules={[FreeMode, Pagination]}
          className="max-w-[90%] lg:max-w-[80%]"
        >
          {ProgramData.map((item) => (
            <SwiperSlide key={item.title}>
              <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${item.backgroundImage})` }} />
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                <a href={item.link}>
                  <div className="relative flex flex-col gap-3">
                    <item.icon className="text-blue group-hover:text-teal-400 w-[32px] h-[32px]" />

                    <h1 className="text-xl lg:text-2xl ">{item.title} </h1>
                    {/* <p className="lg:text-[18px]">{item.content} </p> */}
                  </div>
                  <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-teal-500 group-hover:rotate-45 duration-100" />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Features;
