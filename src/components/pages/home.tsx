import { SpeedInsights } from '@vercel/speed-insights/react';
// import Cta from '@/components/layout/cta';
import HeroSection from '@/components/layout/hero-section';
import NavMenu from '@/components/layout/nav-menu';
import Head from '../ui/Head';
import Footer from '../layout/footer';
// import ModalVideo from '../layout/modal-video';
// import Features from '../layout/features';
// import GalleryWithLightbox from '@/components/layout/gallery-image';

function Home() {
  return (
    <>
      <Head title="Home" />
      <SpeedInsights />
      <NavMenu />
      <HeroSection />
      {/* <Features />
      <ModalVideo />
      <GalleryWithLightbox /> */}
      {/* <Cta /> */}
      <Footer />
    </>
  );
}

export default Home;
