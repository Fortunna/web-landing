import Image from "next/image";
import fortunaHero from "../../public/hero.gif";

export default function App() {
  return (
    <div className="overflow-hidden ">
      <Image className="md:w-full md:h-[430px] h-[200px]" src={fortunaHero} />
      {/* <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div> */}
    </div>
  );
}
