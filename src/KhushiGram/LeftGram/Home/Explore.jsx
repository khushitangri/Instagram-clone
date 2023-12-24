import React, { useContext } from "react";
import Navigation from ".";
import { StateHandle } from "../../../KhushiGram";
import Nimrt from "../../../Images/nimrat1.jpg";
import Prabh from "../../../Images/Prabh.jpg";
import Nirvair from "../../../Images/nirvair.jpg";
import Waheguru from "../../../Images/chaar.webp";
import Post from '../../../Images/girl1.avif';
import God from '../../../Images/shiv.avif';
import Prabh2 from '../../../Images/Prabh2.webp';
import Man from '../../../Images/man2.jpg';
import Bride from '../../../Images/bride.avif';
import Nimrat2 from '../../../Images/nimrat2.jpg';
import Girl from '../../../Images/man3.webp';
import Gt from '../../../Images/man1.jpg';
import Mata from '../../../Images/mata.webp';
import Mehndi from '../../../Images/mhndi.jpg';
import Sunanda from '../../../Images/sunanda.jpg';
import Baba from '../../../Images/baba.jpg';
import Girl2 from '../../../Images/girl2.jpg';
import Baby from '../../../Images/girls3.jpg';
import Grl from '../../../Images/baby1.jpg';
import Prabh3 from '../../../Images/prabh3.webp'
const Explore = () => {
  const Explores = useContext(StateHandle);
  console.log("exp", Explores);
  return (
    <div className="flex  bg-black py-2">
      <div className="fixed h-[100%]">
        <Navigation />
      </div>
      <div className="ml-[400px] mr-[250px] mt-10">
        <div className="flex gap-2">
          <div>
            <img className="h-[300px] w-[300px]" src={Prabh} alt="" />
          </div>
          <div>
            <img className="h-[300px] w-[300px]" src={Nirvair} alt="" />
          </div>
          <div>
            <img className="h-[604px] w-[300px]" src={Nimrt} alt="" />
          </div>
        </div>
        <div className="flex gap-2 mt-[-300px]">
          <div className="">
            <img className="h-[300px] w-[285px]" src={Waheguru} alt="" />
          </div>
          <div>
            <img className="h-[300px] w-[285px]" src={Post} alt="" />
          </div>
        </div>
        <div className="flex gap-2 mt-2">
          <div>
<img  className="h-[604px] w-[300px]" src={Prabh3} alt="" />
          </div>
          <div>
            <img className="h-[300px] w-[300px]" src={Prabh2} alt="" />
          </div>
          <div>
            <img className="h-[300px] w-[300px]" src={Man} alt="" />
          </div>
        </div>
        <div className=" mt-[-298px]">
          <div>
            <img className="ml-[292px] h-[300px] w-[284px]" src={Bride} alt="" />
          </div>
          <div>
            <img className="ml-[585px] mt-[-298px] h-[300px] w-[284px]" src={Nimrat2} alt="" />
          </div>
        </div>
        <div className="flex gap-2 mt-2">
          <div>
            <img className="h-[300px] w-[300px]" src={Girl} alt="" />
          </div>
          <div>
            <img className="h-[300px] w-[300px]" src={Gt} alt="" />
          </div>
          <div>
            <img className="h-[604px] w-[300px]" src={Baba} alt="" />
          </div>
        </div>
        <div className="flex gap-2 mt-[-300px]">
          <div className="">
            <img className="h-[300px] w-[285px]" src={Mata} alt="" />
          </div>
          <div>
            <img className="h-[300px] w-[285px]" src={Mehndi} alt="" />
          </div>
        </div>
        <div className="flex gap-2 mt-2">
          <div>
<img  className="h-[604px] w-[300px]" src={God} alt="" />
          </div>
          <div>
            <img className="h-[300px] w-[300px]" src={Sunanda} alt="" />
          </div>
          <div>
            <img className="h-[300px] w-[300px]" src={Girl2} alt="" />
          </div>
        </div>
        <div className=" mt-[-298px]">
          <div>
            <img className="ml-[292px] h-[300px] w-[284px]" src={Baby} alt="" />
          </div>
          <div>
            <img className="ml-[585px] mt-[-298px] h-[300px] w-[284px]" src={Grl} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Explore;
