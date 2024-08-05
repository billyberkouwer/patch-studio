import Footer from "@/components/footer/Footer";
import Button from "@/components/global/Button";
import CenterLogo from "@/components/global/CenterLogo";
import Tagline from "@/components/global/Tagline";
import ShootInfoSection from "@/components/home/ShootInfoSection";
import ParallaxImageHeader from "@/components/image/ParallaxImageHeader";
import ScrollingImages from "@/components/image/ScrollingImages";
import { headshotShootDetails, images, navItems } from "@/utils/constants";
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
      <ScrollingImages scrollDirection="right" images={images} />
      <ShootInfoSection
        shootDetails={headshotShootDetails}
        description={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Iste odit nesciunt enim doloremque repudiandae, unde omnis ipsam rerum reprehenderit nobis ullam aspernatur tenetur culpa dolore quam pariatur deserunt dolorum! 
          Vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quo molestias odit assumenda ullam modi suscipit necessitatibus repellendus, facere, labore animi beatae culpa nisi ipsam exercitationem minus, totam non nesciunt. 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse corporis soluta officiis incidunt eveniet veniam in necessitatibus error blanditiis ipsum distinctio, perferendis, ea, laudantium sequi magni rerum nihil sint? Aliquid!`}
      />
      <ScrollingImages images={images} />
      <ShootInfoSection
        shootDetails={headshotShootDetails}
        description={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Iste odit nesciunt enim doloremque repudiandae, unde omnis ipsam rerum reprehenderit nobis ullam aspernatur tenetur culpa dolore quam pariatur deserunt dolorum! 
        Vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quo molestias odit assumenda ullam modi suscipit necessitatibus repellendus, facere, labore animi beatae culpa nisi ipsam exercitationem minus, totam non nesciunt. 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse corporis soluta officiis incidunt eveniet veniam in necessitatibus error blanditiis ipsum distinctio, perferendis, ea, laudantium sequi magni rerum nihil sint? Aliquid!`}
      />
      <div className="fixed-book-button__wrapper">
        <Button state="invert" slug="/">
          Book Headshot
        </Button>
      </div>
    </div>
  );
}
