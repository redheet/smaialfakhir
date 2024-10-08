import { Helmet, HelmetProvider } from 'react-helmet-async';
import icon from '/src/favicon.ico';

function Head({ title }) {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{title} - SMAI Modern Al-Fakhir</title>
          <meta
            name="description"
            content="Terwujudnya pendidikan yang bermutu tinggi dan berorientasi masa depan dalam membentuk siswa-siswi yang berakhlak, modern, dan menjadi kebanggaan orang tua, masyarakat, bangsa dan negara."
          />
          <meta property="og:site_name" content="School Center" />
          <link rel="shortcut icon" href={icon} />
        </Helmet>
      </HelmetProvider>
    </>
  );
}

export default Head;
