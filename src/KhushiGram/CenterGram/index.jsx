import React, { useContext, useEffect, useState } from "react";
import { Apis } from "../../KhushiGram";
import axios from "axios";
import {
  Comments,
  Liked,
  MoreIcons,
  NotificationIcon,
  Save,
  Send,
} from "../../Icons";

const Centergram = () => {
  // const [one, setOne] = useState();

  const [bgclr, setBgclr] = useState([]);
  const [comment, setComment] = useState("");
  const [commentWrt, setCommentWrt] = useState();
  const [cmntsAdd, setCmntsAdd] = useState([""]);
  const states = useContext(Apis);

  const LikedPicture = (id) => {
    setBgclr((prev) =>
      prev?.includes(id) ? prev?.filter((v) => v !== id) : [...prev, id]
    );
  };

  const CommentsView = (id, e) => {
    setComment(e?.target?.value);
    setCommentWrt(id);
  };
  const Posting = (id) => {
    setCmntsAdd((prev) => [...prev, { title: comment, id: id }]);
    setComment("");
    console.log(cmntsAdd);
  };
  return (
    <div className="center-gram pl-[190px]">
      {states?.map((val) => (
        <div className="" key={val?.id}>
          <div className="flex gap-2 items-center justify-between mt-6">
            <div className="flex gap-2 items-center">
              <div className="">
                <img
                  className="w-[40px] h-[30px] rounded-[50%] "
                  src={val?.image}
                  alt=""
                />
              </div>
              <div className="text-[15px] font-bold">{val?.username}</div>
              <div className="text-[#94a3b8]">.{val?.id}d</div>
            </div>
            <div>
              <div>
                <MoreIcons />
              </div>
            </div>
          </div>
          <div>
            <img
              className="w-[470px] h-[630px] border px-10 mt-2"
              src={val?.image}
              alt=""
            />
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-4 ">
              <div onClick={() => LikedPicture(val.id)}>
                {bgclr?.includes(val?.id) ? <Liked /> : <NotificationIcon />}
              </div>
              <div>
                <Comments />
              </div>
              <div>
                <Send />
              </div>
            </div>
            <div>
              <Save />
            </div>
          </div>
          <div className="my-2 font-bold">
            {bgclr?.includes(val?.id) ? "You and " : null}
            {val?.height} likes
          </div>
          <div className="">
            {cmntsAdd?.map((v) => (
              <div className="">
                
                {v?.id === val?.id && commentWrt === val?.id && v?.title}
              </div>
            ))}
          </div>
          <div className="border-b pb-2 flex justify-between">
            <input
              className="bg-black outline-none"
              type="text"
              placeholder="Add a comment..."
              value={commentWrt === val?.id ? comment : null}
              onChange={(e) => CommentsView(val?.id, e)}
            />
            {commentWrt !== val?.id ? null : comment === "" ? null : (
              <button
                className="font-bold text-blue-800"
                onClick={() => Posting(val?.id)}
              >
                Post
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Centergram;
