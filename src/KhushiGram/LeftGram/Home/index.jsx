import React, { useState } from "react";
import {
  Create,
  Explore,
  HomeIcon,
  InstaGramIcons,
  Messages,
  MoreOptions,
  NotificationIcon,
  Reels,
  Search,
} from "../../../Icons";
import InstGramLogo from "../../../Images/logo.png";
import SearchBar from "./Search";
import { Link } from "react-router-dom";
import Dp from '../../../Images/dp.jpg'
const Navigation = () => {
  const [search, setSearch] = useState(false);

  return (
    <div className="pt-10 w-[250px] border-r h-[100%] bg-black text-white">
      
    <div className="leading-[50px] ml-6  mt-4">
      {search ?  (
        <div className="mt-[-20px]  fixed">
<InstaGramIcons/>
        </div>
      ):(
        <div className="w-[100px]  ml-2 fixed mt-[-30px]">
          <img src={InstGramLogo} alt="" />
        </div>
      ) }
      <div className=" ">
        {search ?  (
          <div className="flex gap-2 items-center fixed mt-[46px] ">
            <Link to={'/'}>
              <div>

            <HomeIcon />{" "}
              </div>
        </Link>
          </div>
        ) :(
          <div>
             <Link to={'/'}>
          <div className="flex gap-2 items-center mt-[34px] fixed">
           <HomeIcon  />
             <span className="text-[20px]">Home</span>
          </div>
             </Link>
             </div>
        )}
        <br />
        <SearchBar search={search} setSearch={setSearch} />
        <br />
        {search ? (
        <Link to={'/explore'}>
          <div className="flex gap-2 items-center fixed mt-[46px] ">
            <Explore />{" "}
          </div>
          </Link>
        ): (
          <Link to={'/explore'}>
          <div className="flex gap-2 items-center fixed mt-[34px] ">
            <Explore /> <span className="text-[20px]">Explore</span>
          </div>
          </Link>
        ) }
        <br />
        {search ? (
          <Link to={'/reels'}>
          <div className="flex gap-2 items-center fixed mt-[46px] ">
            <Reels />{" "}
          </div>
          </Link>
        ) : (
        <Link to={'/reels'}>
          <div className="flex gap-2 items-center fixed mt-[34px]">
            <Reels /> <span className="text-[20px]">Reels</span>
          </div>
          </Link>
        ) }
        <br />
        {search ? (
          <Link to={'/messages'}>
          <div className="flex gap-2 items-center fixed mt-[46px] ">
            <Messages />{" "}
          </div>
          </Link>
        ): (
          <Link to={'/messages'}>
          <div className="flex gap-2 items-center fixed mt-[34px]">
            <Messages /> <span className="text-[20px] ">Messages</span>
          </div>
          </Link>
        ) }

        <br />
        {search ?  (
          <div className="flex gap-2 items-center fixed mt-[44px] ">
            <NotificationIcon />{" "}
          </div>
        ):(
          <div className="flex gap-2 items-center fixed mt-[32px]">
            <NotificationIcon />{" "}
            <span className="text-[20px] ">Notifications</span>
          </div>
        )}
        <br />
        {search ?   (
          <div className="flex gap-2 items-center fixed mt-[42px] ">
            <Create />{" "}
          </div>
        ):(
          <div className="flex gap-2 items-center fixed mt-[30px]">
            <Create /> <span className="text-[20px]">Create</span>
          </div>
        )}
      </div>
      {
       search ? (
        <Link to={'/profile'}>
        <div className="flex gap-2 items-center fixed mt-[90px] ">
  <img className="w-[36px] h-[36px] rounded-[50%]" src={Dp} alt="" />
        </div>
        </Link>
       ) : 
       <Link to={'/profile'}>
       <div className="flex gap-2 items-center fixed mt-[80px]">
        <img className="w-[36px] h-[36px] rounded-[50%]" src={Dp} alt="" />
       <span className="text-[20px] font-medium">Profile</span>
     </div>
     </Link>
      }
      {search ?   (
          <div className=" bottom-[0px] flex items-center mt-[260px] pb-5 fixed mt-[42px]">
            <MoreOptions />
          </div>
        ):
   (   <div className=" bottom-[0px] flex items-center mt-[260px] pb-5 fixed mt-[42px]">
        <MoreOptions /> <span className="text-[20px]">More</span>
      </div>)}
    </div>
    </div>
  );
};
export default Navigation;
