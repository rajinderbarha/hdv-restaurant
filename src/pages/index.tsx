
import DishesModule from "@/components/DishesModule";
import Feedback from "@/components/Feedback";
import HeroSection from "@/components/HeroSection";
// import OnlineReservation from "@/components/OnlineReservation";
import OurStory from "@/components/OurStory";
import RestaurantMenu from "@/components/RestaurantMenu";
import Team from "@/components/Team";
import UpcomingEvents from "@/components/UpcomingEvents";


export default function Home() {
  return (
    <>
      <HeroSection />
      <OurStory />
      <RestaurantMenu />
      <DishesModule />
      <Feedback />
      <Team />
      {/* <OnlineReservation /> */}
      <UpcomingEvents />
    </>
  )
}
