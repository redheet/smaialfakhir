import { useState } from 'react';

// Contoh gambar, gantilah dengan gambar Anda sendiri
import image1 from '@/assets/img/project-1.png';
import image2 from '@/assets/img/project-2.png';
import image3 from '@/assets/img/project-3.png';
import image4 from '@/assets/img/project-4.png';
import image5 from '@/assets/img/project-5.png';
import image6 from '@/assets/img/project-6.png';

const images = [image1, image2, image3, image4, image5, image6];

const GalleryWithLightbox = () => {
  const [showLightbox, setShowLightbox] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setShowLightbox(true);
  };

  const closeLightbox = () => {
    setShowLightbox(false);
  };

  const goToPrevious = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4">
        {images.map((image, index) => (
          <div key={index} className="w-1/2 md:w-1/3 lg:w-1/4">
            <img
              src={image}
              alt={`Gallery ${index}`}
              className="w-full h-full object-none cursor-pointer"
              onClick={() => openLightbox(index)}
            />
          </div>
        ))}
      </div>
      

      {showLightbox && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={closeLightbox}
        >
          <button
            className="absolute left-10 text-white font-bold text-2xl"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
          >
            &#8592;
          </button>
          <img src={images[selectedImageIndex]} alt="Selected" className="max-w-full max-h-full" />
          <button
            className="absolute right-10 text-white font-bold text-2xl"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
          >
            &#8594;
          </button>
        </div>
      )}
    </div>
  );
};

export default GalleryWithLightbox;