import Footer from "@/components/footer/Footer";
import Button from "@/components/global/Button";
import CenterLogo from "@/components/global/CenterLogo";
import Tagline from "@/components/global/Tagline";
import ShootInfoSection from "@/components/home/ShootInfoSection";
import ParallaxImageHeader from "@/components/image/ParallaxImageHeader";
import ScrollingImages from "@/components/image/ScrollingImages";
import { images, navItems } from "@/utils/constants";
import "./page.scss";

export default function Home() {
  return (
    <div className="page__wrapper">
      <CenterLogo />
      <ParallaxImageHeader images={images} />
      <Tagline>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
        quaerat iste non delectus iusto molestias, sed suscipit aliquid ullam
        iure expedita sapiente aperiam quam quis cupiditate asperiores eveniet
        rerum a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
        rem voluptate saepe voluptatem cupiditate id fugit sequi accusantium!
        Laboriosam, nobis eligendi reprehenderit ipsa amet nemo similique totam
        dolorum velit aliquam?
      </Tagline>
      <ScrollingImages images={images} />
      <ShootInfoSection />
      <ScrollingImages images={images} />
      <ShootInfoSection />
      <div className="fixed-book-button__wrapper">
        <Button text="Book Headshot" state="invert" slug="/" />
      </div>
    </div>
  );
}
