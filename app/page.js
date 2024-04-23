
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import { Card } from "../components/component/card.jsx";
import { Organic } from "../components/component/Organic.jsx";
import { Gallery } from "../components/component/Gallery.jsx";

export default function Home() {
  return (
    <div style={{backgroundColor:'#DDDDDD'}}>
<HeroSection />
<Services />
<Card />
<br />
  <Organic />
  <div style={{backgroundColor:'#DDDDDD'}}><Gallery /></div>
  
    </div>
  );
}
