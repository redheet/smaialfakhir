import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
// import { useState } from 'react';

// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue
// } from '@/components/ui/select';

const Form = () => {
  return (
    <>
      <form className="space-y-6" action="#" method="POST">
        <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
          <h2 className="text-center text-4xl mb-2">Peserta Didik</h2>

          {/* nama lengkap  */}
          <div className="w-full items-center gap-1.5">
            <Label htmlFor="fullname">Nama Lengkap Sesuai Akta</Label>
            <Input
              name="NamaLengkap"
              type="fullname"
              id="fullname"
              placeholder="Nama Lengkap"
              className="mt-2"
            />
          </div>

          {/* kelamin  */}
          <div className="mt-4 w-full items-center gap-1.5">
            <Label htmlFor="gender">Pilih Jenis Kelamin</Label>
            <select
              name="Kelamin"
              className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-6 mt-2 rounded-lg"
              id="gender"
            >
              <option value="man">Laki-Laki</option>
              <option value="woman">Perempuan</option>
            </select>
          </div>

          {/* nisn number  */}
          <div className="mt-4 w-full items-center gap-1.5">
            <Label htmlFor="nisn">No NISN</Label>
            <Input
              name="NISN"
              type="number"
              id="nisn"
              placeholder="No NISN"
              className="mt-2"
            />
          </div>

          {/* nik  */}
          <div className="mt-4 w-full items-center gap-1.5">
            <Label htmlFor="nik">NIK</Label>
            <Input
              name="NIK"
              type="number"
              id="nik"
              placeholder="Nomor Induk Keluarga"
              className="mt-2"
            />
          </div>

          {/* Tempat lahir  */}
          <div className="mt-4 w-full items-center gap-1.5">
            <Label htmlFor="address">Tempat Lahir</Label>
            <Input
              name="TempatLahir"
              type="address"
              id="address"
              placeholder="Tempat Lahir"
              className="mt-2 "
            />
          </div>

          {/* tanggal lahir  */}
          <div className="mt-4 w-full items-center gap-1.5">
            <Label htmlFor="date">Tanggal Lahir</Label>
            <input
              name="TanggalLahir"
              id="date"
              type="date"
              className="block w-full px-4 py-2 mt-2 bg-white border border-gray-300 rounded-md  "
            />
          </div>

          {/* handphone  */}
          <div className="mt-4 w-full items-center gap-1.5">
            <Label htmlFor="tel">No Handphone</Label>
            <Input
              name="Phone"
              type="tel"
              id="tel"
              placeholder="No Handphone"
              className="mt-2"
            />
          </div>

          <h2 className="text-center text-4xl mb-2 mt-8">Asal Sekolah</h2>
          {/* asal sekolah  */}
          <div className="mt-4 w-full items-center gap-1.5">
            <Label htmlFor="school">Nama Asal Sekolah</Label>
            <Input
              name="NamaSekolah"
              type="school"
              id="school"
              placeholder="Nama Asal Sekolah"
              className="mt-2 "
            />
          </div>

          {/* npsn number  */}
          <div className="mt-4 w-full items-center gap-1.5">
            <Label htmlFor="npsn">NPSN Sekolah Asal</Label>
            <Input
              name="NPSN"
              type="number"
              id="npsn"
              placeholder="NPSN Sekolah Asal"
              className="mt-2"
            />
          </div>

          {/* addres school  */}
          <div className="mt-4 w-full items-center gap-1.5">
            <Label htmlFor="schoolAddress">Alamat Sekolah Asal</Label>
            <Input
              name="AlamatSekolah"
              type="address"
              id="schoolAddress"
              placeholder="Alamat Sekolah Asal"
              className="mt-2 "
            />
          </div>

          <h2 className="text-center text-4xl mb-2 mt-8">
            Alamat Peserta Didik
          </h2>
          {/* alamat peserta didik  */}
          <div className="mt-4 w-full items-center gap-1.5">
            <Label htmlFor="place">Alamat Lengkap</Label>
            <Input
              name="AlamatLengkap"
              type="text"
              id="place"
              placeholder="Alamat Lengkap"
              className="mt-2 "
            />
          </div>

          {/* city */}
          <div className="mt-4 w-full items-center gap-1.5">
            <Label htmlFor="city">Kota</Label>
            <Input
              name="Kota"
              type="city"
              id="city"
              placeholder="Kota"
              className="mt-2 "
            />
          </div>

          {/* psotalcode */}
          <div className="mt-4 w-full items-center gap-1.5">
            <Label htmlFor="postalcode">Kode Pos</Label>
            <Input
              name="KodePos"
              type="postalcode"
              id="postalcode"
              placeholder="Kode Pos"
              className="mt-2 "
            />
          </div>

          <div className="mt-4 text-center w-[68px]">
            <Input type="submit" />
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
