import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';

import project1 from '../../assets/img/project-1.png';
import project2 from '../../assets/img/project-2.png';
import project3 from '../../assets/img/project-3.png';
import project4 from '../../assets/img/project-4.png';
import project5 from '../../assets/img/project-5.png';
import project6 from '../../assets/img/project-6.png';
import project7 from '../../assets/img/project-7.png';

const Fasilty = () => {
  return (
    <div className="bg-white">
      <div className="flex text-4xl items-center justify-center">
        <span className="font-semibold uppercase text-gray-900">Fasilitas Kami</span>
      </div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef
  });

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%']);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div key={card.id} className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200">
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">{card.title}</p>
      </div>
    </div>
  );
};

export default Fasilty;

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: project1,
    title: 'Title 1',
    id: 1
  },
  {
    url: project2,
    title: 'Title 2',
    id: 2
  },
  {
    url: project3,
    title: 'Title 3',
    id: 3
  },
  {
    url: project4,
    title: 'Title 4',
    id: 4
  },
  {
    url: project5,
    title: 'Title 5',
    id: 5
  },
  {
    url: project6,
    title: 'Title 6',
    id: 6
  },
  {
    url: project7,
    title: 'Title 7',
    id: 7
  }
];
