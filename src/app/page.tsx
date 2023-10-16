import CategorySlider from "@/components/custom/category-slider";
import EnquireNow from "@/components/custom/enquire-now";
import HomeMain from "@/components/custom/home-main";
import ListPackage from "@/components/custom/list-package";
import OutPartners from "@/components/custom/out-partners";
import Testimonial from "@/components/custom/testimonial";
import Introduction from "./components/introduction";

export default function Home() {
  return (
    <div>
      <div className="relative h-[calc(100vh-3.75rem)] overflow-hidden">
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src="/home-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="text-white backdrop-sepia-0 h-full bg-black/50 z-10 absolute inset-0">
          <HomeMain />
        </div>
      </div>
      <Introduction />
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
    </div>
  );
}
