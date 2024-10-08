import { SpeedInsights } from '@vercel/speed-insights/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import VisiMisi from './pages/visi-misi';
import Team from './pages/team';
import NotFoundPages from './pages/notfoundpages';
import Program from './pages/program';
import Gallery from './pages/gallery';
import Schema from './pages/schema';
import Beasiswa from './pages/beasiswa';
import Fasilitas from './pages/fasilitas'
// import GalleryImages from './pages/galleryimages';
// import Registration from './pages/registration';

const routeComponents = [
  { path: "/", element: Home },
  { path: "/about", element: About },
  { path: "/visi-misi", element: VisiMisi },
  { path: "/team", element: Team },
  { path: "/beasiswa", element: Beasiswa },
  // { path: "/registration", element: Registration },
  { path: "/program", element: Program },
  { path: "/gallery", element: Gallery },
  { path: "/scheme", element: Schema },
  { path: "/fasilitas", element: Fasilitas },
  { path: "*", element: NotFoundPages },
  // { path: "/gallery-images", element: GalleryImages },
];

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {routeComponents.map(({ path, element: Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
      </Routes>
      <SpeedInsights />
    </BrowserRouter>
  );
}

export default Router;
