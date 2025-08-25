import Intro from "../../components/Intro";
import Hero from "../../components/Hero";
import Categories from "../../components/CategoriesComp";
import CouponSec from "@/components/CouponSec";
import ProductsCarousel from "../../components/ProductsCarouselComp";
import GameSec from "@/components/GameSec";
import EventsSec from "@/components/EventsSec";
import Separator from "@/components/Separator";

export default function Home() {
  return (
    <div>
      <Intro />
      <Hero />
      <Categories />
      <CouponSec />
      <Separator />
      <ProductsCarousel />
      <GameSec />
      <Separator />
      <EventsSec />
    </div>
  );
}
