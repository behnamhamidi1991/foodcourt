import Foodsection from "@/components/Foodsection/Foodsection";
import Foodslider from "@/components/Foodslider/Foodslider";
import Homesection from "@/components/Homesection/Homesection";

export default function Home() {
  return (
    <div>
      <Homesection />
      <Foodslider />
      <Foodsection />
    </div>
  );
}
