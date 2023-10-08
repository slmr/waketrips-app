import CategorySlider from "@/components/custom/category-slider";
import EnquireNow from "@/components/custom/enquire-now";
import HomeMain from "@/components/custom/home-main";
import ListPackage from "@/components/custom/list-package";
import OutPartners from "@/components/custom/out-partners";
import Reveal from "@/components/custom/reveal";
import Testimonial from "@/components/custom/testimonial";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { BadgeDollarSign, HeartHandshake, Rocket } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <div>
        <div className="relative h-[calc(100vh-4.2rem)] overflow-hidden">
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source src="/home-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="text-white backdrop-sepia-0 h-full bg-black/50 z-10 absolute inset-0">
            <HomeMain />
          </div>
        </div>
        <div>
          <div className="pb-12">
            <div className="flex items-center justify-center py-10">
              <Image src="/logo.svg" alt="WakeTrips" width={120} height={120} />
            </div>
            <div className="mb-10 px-4">
              <p className="text-center text-xl leading-relaxed font-serif text-stone-700">
                Memandu Anda melewati keajaiban Pulau Belitung yang menawan.
                Jelajahi pantai putih bersih, formasi batuan yang menakjubkan
                dan perairan biru kehijauan sebening kristal yang akan membuat
                Anda terkagum-kagum.
              </p>
            </div>
            <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-5 overflow-x-scroll px-4 pb-2">
              <div className="flex flex-col gap-1 justify-center items-center text-center w-40 h-40 rounded-full border-dashed border border-gray-300">
                <Rocket className="w-6 h-6 text-yellow-600" strokeWidth={1} />
                <h3 className="text-lg">Profesional</h3>
              </div>
              <div className="flex flex-col gap-1 justify-center items-center text-center w-40 h-40 rounded-full border-dashed border border-gray-300">
                <HeartHandshake
                  className="w-6 h-6 text-yellow-600"
                  strokeWidth={1}
                />
                <h3 className="text-lg">
                  Layanan
                  <br />
                  Terbaik
                </h3>
              </div>
              <div className="flex flex-col gap-1 justify-center items-center text-center w-40 h-40 rounded-full border-dashed border border-gray-300">
                <BadgeDollarSign
                  className="w-6 h-6 text-yellow-600"
                  strokeWidth={1}
                />
                <h3 className="text-lg">
                  Harga
                  <br />
                  Kompetitif
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ListPackage />
        </div>
        <div className="mt-20">
          <CategorySlider />
        </div>
        <div className="mt-20">
          <Testimonial />
        </div>
        <div className="mt-20">
          <EnquireNow />
        </div>
        <div className="mt-20">
          <OutPartners />
        </div>
        <Footer />
      </div>
    </div>
  );
}
