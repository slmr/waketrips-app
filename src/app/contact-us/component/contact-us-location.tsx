"use client";

import Reveal from "@/components/custom/reveal";
import dynamic from "next/dynamic";
const MapContainer = dynamic(
  () => import("react-leaflet").then(({ MapContainer }) => MapContainer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then(({ Marker }) => Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then(({ Popup }) => Popup),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then(({ TileLayer }) => TileLayer),
  { ssr: false }
);

const ContactUsLocation = () => {
  return (
    <div className="container max-w-4xl mt-10 md:mt-12">
      <Reveal wrapper hidden={{ y: -50 }}>
        <h1 className="font-serif text-3xl text-center mb-3">Our Location</h1>
      </Reveal>
      <Reveal>
        <div className="mb-4">
          <p className="font-sans text-sm text-center tracking-wider mb-1">
            Jln. Sijuk, Desa Air Selumar, RT/RW 007/004 NO 123D
          </p>
          <p className="font-sans text-sm text-slate-700 text-center tracking-wider">
            Senin - Sabtu 8.00 - 18.00 WIB
          </p>
        </div>
      </Reveal>
      <MapContainer
        center={[-2.612185, 107.752524]}
        zoom={10}
        scrollWheelZoom={false}
        className="border z-10 h-64 md:h-96"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-2.612185, 107.752524]}>
          <Popup>WakeTrips Tour & Travel</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default ContactUsLocation;
