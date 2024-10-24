import DishesModule from "@/components/DishesModule";
import Feedback from "@/components/Feedback";
import HeroSection from "@/components/HeroSection";
import OurStory from "@/components/OurStory";
import RestaurantMenu from "@/components/RestaurantMenu";
import Team from "@/components/Team";


export default function Home() {
  return (
    <>
      <HeroSection />
      <OurStory />
      <RestaurantMenu />
      <DishesModule />
      <Feedback />
      <Team />
    </>
  )
}
