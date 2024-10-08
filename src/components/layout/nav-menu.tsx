import { Fragment } from 'react';

import {
  Bars3Icon,
  BookmarkSquareIcon,
  BriefcaseIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ComputerDesktopIcon,
  CursorArrowRaysIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  NewspaperIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  Squares2X2Icon,
  UserGroupIcon,
  XMarkIcon,
  PuzzlePieceIcon
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Popover, Transition } from '@headlessui/react';
import logo from '../../assets/img/logo-sma.png';

const solutions = [
  {
    name: 'Sejarah',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '/about',
    icon: ChartBarIcon
  },
  {
    name: 'Visi, Misi & Tujuan',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '/visi-misi',
    icon: CursorArrowRaysIcon
  },
  {
    name: 'Struktur Organisasi Sekolah',
    description: "Your customers' data will be safe and secure.",
    href: '/scheme',
    icon: ShieldCheckIcon
  },
  {
    name: 'Jajaran Guru & Staff',
    description: "Connect with third-party tools that you're already using.",
    href: '/team',
    icon: Squares2X2Icon
  }
];
const callsToAction = [
  { name: 'Video Kami', href: '#', icon: PlayIcon },
  { name: 'Detail Kurikulum', href: '#', icon: CheckCircleIcon },
  { name: 'Hubungi Kami', href: '#', icon: PhoneIcon }
];
const program = [
  { name: 'International Collab Class', href: '#', icon: NewspaperIcon },
  { name: 'Research Class', href: '#', icon: PuzzlePieceIcon },
  { name: 'Tahsin, BTQ, Praying Class ', href: '#', icon: InformationCircleIcon },
  { name: 'Tahfidz Class', href: '#', icon: GlobeAltIcon },
  { name: 'Fiqih & Akhlak Class', href: '/beasiswa', icon: AcademicCapIcon },
  { name: 'Muhadhoroh & Public Speaking Class', href: '/beasiswa', icon: AcademicCapIcon },
];
const program2 = [
  { name: 'Multimedia & Broadcasting', href: '#', icon: NewspaperIcon },
  { name: 'Information & Technology', href: '#', icon: PuzzlePieceIcon },
  { name: 'Career Planning  & Consultation', href: '#', icon: InformationCircleIcon },
  { name: 'Campus Corner', href: '#', icon: GlobeAltIcon },
  { name: 'Business Planning & Entrepreneur Program', href: '/beasiswa', icon: AcademicCapIcon },
  { name: 'Inspirational & Motivational Class', href: '/beasiswa', icon: AcademicCapIcon },
];
// const fasilitas = [
//   { name: 'Ruang Belajar / Ruang Kelas', href: '#', icon: InformationCircleIcon },
//   { name: 'Laboratorium Sains', href: '#', icon: BuildingOfficeIcon },
//   { name: 'Laboratorium Komputer', href: '#', icon: NewspaperIcon },
//   { name: 'Sarana Olahraga', href: '#', icon: BriefcaseIcon },
//   { name: 'Musholla', href: '#', icon: ShieldCheckIcon }
// ];
// const fasilitas2 = [
//   { name: 'Kolam Renang', href: '#', icon: ShieldCheckIcon },
//   { name: 'Auditorium', href: '#', icon: UserGroupIcon },
//   { name: 'Perpustakaan', href: '#', icon: GlobeAltIcon },
//   { name: 'Kantin/Mini Market', href: '#', icon: BookmarkSquareIcon },
//   { name: 'Ruang Multimedia', href: '#', icon: ComputerDesktopIcon }
// ];
// const resources = [
//   { name: 'Community', href: '#', icon: UserGroupIcon },
//   { name: 'Partners', href: '#', icon: GlobeAltIcon },
//   { name: 'Guides', href: '#', icon: BookmarkSquareIcon },
//   { name: 'Webinars', href: '#', icon: ComputerDesktopIcon }
// ];
// const blogPosts = [
//   {
//     id: 1,
//     name: 'Boost your conversion rate',
//     href: '#',
//     preview:
//       'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
//     imageUrl:
//       'https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80'
//   },
//   {
//     id: 2,
//     name: 'How to use search engine optimization to drive traffic to your site',
//     href: '#',
//     preview:
//       'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
//     imageUrl:
//       'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80'
//   }
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavMenu() {
  return (
    <header className="sticky z-10 top-0">
      <Popover className="relative bg-white">
        <div className="pointer-events-none absolute inset-0 z-30 shadow" aria-hidden="true" />
        <div className="relative z-20">
          <div className="mx-auto flex max-w-7xl items-center justify-between py-5 px-6 sm:py-4 md:justify-start md:space-x-10 lg:px-8">
            <div>
              <a href="/" className="flex">
                <span className="sr-only">SMPI Modern Al Fakhir</span>
                <img className="h-16 w-auto sm:h-16" src={logo} alt="" />
              </a>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
              <Popover.Group as="nav" className="flex space-x-10">
                {/* first menu  */}
                <Popover>
                  {({ open }) => (
                    <>
                       {/* <a
                      href="#"
                      className="text-base font-medium text-gray-500 hover:text-gray-900 mr-8"
                    >
                      Home
                    </a>  */}
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-900' : 'text-gray-500',
                          'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2'
                        )}
                      >
                        <span>Tentang Kami</span>
                        <ChevronDownIcon
                          className={classNames(open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500')}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 -translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 -translate-y-1"
                      >
                        <Popover.Panel className="absolute inset-x-0 top-full z-10 hidden transform bg-white shadow-lg md:block">
                          <div className="mx-auto grid max-w-7xl gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                            {solutions.map((item) => (
                              <a key={item.name} href={item.href} className="-m-3 flex flex-col justify-between rounded-lg p-3 hover:bg-gray-50">
                                <div className="flex md:h-full lg:flex-col">
                                  <div className="flex-shrink-0">
                                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-blue text-white sm:h-12 sm:w-12">
                                      <item.icon className="h-6 w-6" aria-hidden="true" />
                                    </span>
                                  </div>
                                  <div className="ml-4 md:flex md:flex-1 md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                    <div>
                                      <p className="text-base font-medium text-gray-900">{item.name}</p>
                                      {/* <p className="mt-1 text-sm text-gray-500">{item.description}</p> */}
                                    </div>
                                    <p className="mt-2 text-sm font-medium text-blue lg:mt-4">
                                      Selengkapnya
                                      <span aria-hidden="true"> &rarr;</span>
                                    </p>
                                  </div>
                                </div>
                              </a>
                            ))}
                          </div>
                          <div className="bg-gray-50">
                            <div className="mx-auto max-w-7xl space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                              {callsToAction.map((item) => (
                                <div key={item.name} className="flow-root">
                                  <a href={item.href} className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100">
                                    <item.icon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                    <span className="ml-3">{item.name}</span>
                                  </a>
                                </div>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

                {/* second menu  */}
                <Popover>
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-900' : 'text-gray-500',
                          'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2'
                        )}
                      >
                        <span>Program</span>
                        <ChevronDownIcon
                          className={classNames(open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500')}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 -translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 -translate-y-1"
                      >
                        <Popover.Panel className="absolute inset-x-0 top-full z-10 hidden transform shadow-lg md:block">
                          <div className="absolute inset-0 flex">
                            <div className="w-1/2 bg-white" />
                            <div className="w-1/2 bg-gray-50" />
                          </div>
                          <div className="relative mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                            <nav className="grid gap-y-10 bg-white px-4 py-8 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
                              <div>
                                <h3 className="text-base font-medium text-gray-500">
                                  {/* <a href="/program">Program Kami</a> */}
                                </h3>
                                <ul role="list" className="mt-5 space-y-6">
                                  {program.map((item) => (
                                    <li key={item.name} className="flow-root">
                                      <a
                                        href={item.href}
                                        className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                                      >
                                        <item.icon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                        <span className="ml-4">{item.name}</span>
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                              {/* <h3 className="text-base font-medium text-gray-500">
                                Resources
                              </h3> */}
                              <ul role="list" className="mt-5 space-y-6">
                                {program2.map((item) => (
                                  <li key={item.name} className="flow-root">
                                    <a
                                      href={item.href}
                                      className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                                    >
                                      <item.icon
                                        className="h-6 w-6 flex-shrink-0 text-gray-400"
                                        aria-hidden="true"
                                      />
                                      <span className="ml-4">{item.name}</span>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            </nav>
                            {/* <div className="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                              <div>
                                <h3 className="text-base font-medium text-gray-500">
                                  From the blog
                                </h3>
                                <ul role="list" className="mt-6 space-y-6">
                                  {blogPosts.map((post) => (
                                    <li key={post.id} className="flow-root">
                                      <a
                                        href={post.href}
                                        className="-m-3 flex rounded-lg p-3 hover:bg-gray-100"
                                      >
                                        <div className="hidden flex-shrink-0 sm:block">
                                          <img
                                            className="h-20 w-32 rounded-md object-cover"
                                            src={post.imageUrl}
                                            alt=""
                                          />
                                        </div>
                                        <div className="w-0 flex-1 sm:ml-8">
                                          <h4 className="truncate text-base font-medium text-gray-900">
                                            {post.name}
                                          </h4>
                                          <p className="mt-1 text-sm text-gray-500">
                                            {post.preview}
                                          </p>
                                        </div>
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="mt-6 text-sm font-medium">
                                <a
                                  href="#"
                                  className="text-blue hover:text-teal-500"
                                >
                                  View all posts
                                  <span aria-hidden="true"> &rarr;</span>
                                </a>
                              </div>
                            </div> */}
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

                {/* third menu  */}
                {/* <Popover>
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-900' : 'text-gray-500',
                          'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2'
                        )}
                      >
                        <span>Fasilitas</span>
                        <ChevronDownIcon
                          className={classNames(open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500')}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 -translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 -translate-y-1"
                      >
                        <Popover.Panel className="absolute inset-x-0 top-full z-10 hidden transform shadow-lg md:block">
                          <div className="absolute inset-0 flex">
                            <div className="w-1/2 bg-white" />
                            <div className="w-1/2 bg-gray-50" />
                          </div>
                          <div className="relative mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                            <nav className="grid gap-y-10 bg-white px-4 py-8 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
                              <div>
                                <h3 className="text-base font-medium text-gray-500">
                                program
                              </h3>
                                <ul role="list" className="mt-5 space-y-6">
                                  {fasilitas.map((item) => (
                                    <li key={item.name} className="flow-root">
                                      <a
                                        href={item.href}
                                        className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                                      >
                                        <item.icon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                        <span className="ml-4">{item.name}</span>
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <ul role="list" className="mt-5 space-y-6">
                                  {fasilitas2.map((item) => (
                                    <li key={item.name} className="flow-root">
                                      <a
                                        href={item.href}
                                        className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                                      >
                                        <item.icon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                        <span className="ml-4">{item.name}</span>
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </nav>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover> */}
                <a
                      href="/fasilitas"
                      className="text-base font-medium text-gray-500 hover:text-gray-900 mr-8"
                    >
                      Fasilitas
                    </a> 
                {/* <a href="/gallery" className="text-base font-medium text-gray-500 hover:text-gray-900 mr-8">
                  Gallery
                </a> */}
              </Popover.Group>

              <div className="flex items-center md:ml-12">
                {/* <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
                <ModeToggle></ModeToggle>
              </ThemeProvider> */}

                <a
                  href="https://pendaftaran.smai.alfakhir.sch.id"
                  target='_blank'
                  className="ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-blue px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue/75"
                >
                  Pendaftaran
                </a>
              </div>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6 sm:pb-8">
                <div className="flex items-center justify-between">
                  <div>
                    <img className="h-8 w-auto" src={logo} alt="SMPI Modern Al Fakhir" />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6 sm:mt-8">
                  <nav>
                    <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                      {solutions.map((item) => (
                        <a key={item.name} href={item.href} className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-blue text-white sm:h-12 sm:w-12">
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                        </a>
                      ))}
                    </div>
                    <div className="mt-8 text-base">
                      <a href="/program" className="font-medium text-blue hover:text-teal-500">
                        View all program
                        <span aria-hidden="true"> &rarr;</span>
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5">
                <div className="grid grid-cols-2 gap-4">
                  <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                    Fasilitas
                  </a>
                  <a href="/gallery" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                    Galery
                  </a>
                </div>
                <div className="mt-6">
                  <a
                    href="https://pendaftaran.smpialfakhir.sch.id"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-teal-700"
                  >
                    Pendaftaran
                  </a>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
}
