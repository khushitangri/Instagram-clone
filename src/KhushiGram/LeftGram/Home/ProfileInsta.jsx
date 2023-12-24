import React, { useState } from 'react'
import Navigation from '.';
import Dp from '../../../Images/dp.jpg'
import My1 from '../../../Images/me.jpg';
import My2 from '../../../Images/me1.jpg';
import My3 from '../../../Images/ME2.jpg';
import My4 from '../../../Images/me3.jpg';
import Bro from '../../../Images/bro5.jpg';
import Sis from '../../../Images/sis6.jpg';
import Bro2 from '../../../Images/me4.jpg';
import { Liked, MoreIcons, NotificationIcon, SettingsIcon,Comments,Send,Save } from '../../../Icons';


const ProfileInsta = () => {
  const Posts = [
  
    {
image: My1,
id:1,
comment1 : '😍😍',
commentedBy : 'poojaTangri',
commentedDp : Sis,
commentTime : '2w',
LikedBy : 'M_a_n_jit',
Others : '21',
postDate : 'December 10'
    },
    {
      image: My3,
      id:3,
      LikedBy: "aixy_23",
      Others: '19',
      postDate: 'December 1'
    
    }, {
      image:My4,
      id:4,
      comment1: 'Nice ❤️❤️',
      commentedBy:'poojaTangri',
      commentedDp: Sis,
      commentTime: '6w',
      LikedBy : "KaurBal_12",
      Others: '24',
      postDate: 'November 20 '

    }, {
      image: Bro,
      id:5,
      LikedBy : "Raveena_bal",
      Others: '27',
      postDate: "November 7 "
    },
    {
      image:Bro2,
      id:7,
      comment1: '🌺',
      commentedBy: 'nitinTangri',
commentedDp: Bro ,
commentTime: '12w',
LikedBy: "Manjit_kaur",
Others : "19",
postDate : ' October 22'
    }
  ]
  const [liked,setLiked]=useState()
  const[choose,setChoose]=useState()
  const[togle,setTogle]=useState(false)
  const[reply,setReply]=useState('')
  const[hide,setHide]=useState([])
  const[cmntid,setCmntid]=useState()
  console.log('reply',reply)
const ChooseImg = (id)=>{
  const arr = Posts?.find((v)=> v?.id === id)
  setChoose(arr)
  setTogle(true)
  console.log(choose)
}
const TogleFalse = ()=>{
  setTogle(false)
}
const ReplyButton = (id)=>{
setReply(`@${choose?.commentedBy}`)
setCmntid(id)
console.log('cmntid',cmntid)
}
const ChangingReply=(e)=>{
  setReply(e.target.value)
}
const HideReply = (id)=>{
setHide((prev)=> [...prev,{title: reply, id:id}])
setReply('')
}
console.log('cmntid',cmntid)
console.log('hide',hide)
const ChangeLiked = ()=>{
  setLiked(!liked)
}
  return (
    <div>
 {
     togle ? (
  
      <div className='fixed text-white bg-black  flex'>
      <div className='fixed h-[100%] bg-black opacity-40'>

<Navigation/>
      </div>
<div className='mx-60 pl-60 mt-10 bg-black'>
<div className='flex  gap-10 opacity-40'>
<div >
<img className='w-[150px] h-[150px] rounded-[50%] mt-4' src={Dp} alt="" />
</div>
<div>
  <div className='flex gap-4'>
  <div className='text-[20px]'>
    k_tangri
  </div>
  <buton className="bg-[#363636] px-2 flex items-center justify-center py-2 rounded-[5%] text-[14px]">
Edit Profile
  </buton>
  <button className="bg-[#363636] px-2 rounded-[5%] text-[14px]">
View Archeive
  </button>
  <button>
    <SettingsIcon/>
  </button>
  </div>
<div className='flex gap-8 pt-6'>
  <div>
    <span className='font-medium text-[19px]'>{Posts?.length}</span> posts
  </div>
  <div>
  <span className='font-medium text-[19px]'>22</span> followers
  </div>
  <div>
  <span className='font-medium text-[19px]'>2</span> following
  </div>
</div>
<div>
  <div className='mt-5 font-bold'>
    khushi Tangri
  </div>
  <div className='pt-2'>
  ❣ ਮਨ ਨੀਵਾਂ  ਮੱਤ ਉੱਚੀ ❣
  </div>
</div>
</div>

</div>
<div className='mt-14 border-t '>
<div className='mx-40 flex gap-20 pt-4 text-[15px] font-medium opacity-40'>
<div>
  Posts
</div>
<div>
  Reels
</div>
<div>
  Saved
</div>
<div>
  Tagged
</div>
</div>


<div>

<div className='grid grid-cols-3 p-2 opacity-40'>
{
 Posts?.map((val)=> (
  <div key={val?.id} className=''>
    <div>

    <img className='h-[350px] w-[400px] p-[2px]' src={val?.image} alt="" onClick={()=> ChooseImg(val?.id)}/>
    </div>

  </div>

 )) 
}
</div>
{togle && (
<div className='relative z-20 mt-[-968px] ml-[-235px] flex'>
<div className='fixed'>

<img className='w-[560px] h-[660px]' src={choose?.image} alt="" />
</div >
<div className='w-[460px] ml-[535px] h-[660px] bg-black border-[5%] fixed'>
<div className='flex justify-between pt-1 pl-2 pb-2 border-b'>
  <div className='flex gap-1 items-center'>
  <div>
    <img className='w-[40px] h-[36px] rounded-[50%]' src={Dp} alt="" />
  </div>
  <div className='font-medium ml-5'>
    k_tangri
  </div>
  </div>

  <div className='mr-[10px]'>
    <MoreIcons/>
  </div>
</div>
  <button onClick={TogleFalse} className='ml-[700px] font-bold text-[20px] absolute top-0'>
    X
  </button>
  <div>
 
 <div className='pt-2'>
  
 
  <div>
    {choose?.comment1? (
      <div>
      <div className='flex gap-2 items-center mt-2'>
       <div>
       <img className='w-[40px] ml-2 h-[36px] rounded-[50%]' src={choose?.commentedDp} alt="" />
       </div>
       <div className='font-medium'>
    {choose?.commentedBy}
  </div>
      <div>
       { choose?.comment1}
      </div>
      </div>
      <div>
      <div className='flex pl-16 gap-4 font-medium'>
      <div className='text-gray-200 text-[13px] '>
        {choose?.commentTime}
      </div>
      <button className='text-gray-200 text-[13px]' onClick={()=> ReplyButton(choose?.id)}>
        Reply
      </button>
      </div>
      {hide?.map((v)=> 
      choose?.id === v?.id  &&
          (
            
          <div className='flex gap-2 items-center ml-2 mt-2 text-[14px]'>
            <div> 
              <img className='h-[36px] w-[36px] rounded-[50%]' src={Dp} alt="" />
            </div>
            <div className='font-medium'>
              k_tangri
            </div>
            <div>

      {v?.title}
            </div>
          </div>
        ))
      }
      </div>
  
   

      </div>
    ): (
      <div className='text-center mt-[200px]'>
        <div className='font-bold text-[24px]'>

        No Comments yet.
        </div>
        <div>
        Start the conversation.
        </div>
      </div>
    )
}
<div className='border-t ml-[-2] w-[95%] absolute bottom-[10px]'>
<div className="flex items-center justify-between mt-2 ml-2">
            <div className="flex items-center gap-4 ">
              <div onClick={ChangeLiked}>
             
             {
              liked ?  <NotificationIcon/>: <Liked/> 
             }
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
          <div>
<div className='pt-4 pl-4'>
 <span>Liked by</span> <span>{choose?.LikedBy}</span> <span>and</span> <span>{choose?.Others} others</span>
</div>
<div className='text-[13px] text-gray-400 pl-4 border-b pb-2'>
{choose?.postDate}
</div>
          </div>
          <div className='flex items-center'>
          <div>
  <input className='text-[15px] bg-black outline-none ml-2 w-[300px] h-10 pl-2 mt-2' type="text" placeholder='Add a comment...' value={choose?.id === cmntid ? reply : null} onChange={ChangingReply}/>
</div>
{
  reply !== "" && (
    <button className='ml-[75px] font-medium text-blue-500' onClick={()=> HideReply(choose?.id)}>
      Post
    </button>
  )
}
          </div>

</div>
  </div>
 </div>

  </div>
</div>
</div>)

}
</div>


</div>
</div>
    </div>
     ) : (
        
    <div className='text-white bg-black  flex'>
    <div className='fixed h-[100%] bg-black'>

<Navigation/>
    </div>
<div className='mx-60 pl-60 mt-10 bg-black'>
<div className='flex  gap-10'>
<div >
<img className='w-[150px] h-[150px] rounded-[50%] mt-4' src={Dp} alt="" />
</div>
<div>
<div className='flex gap-4'>
<div className='text-[20px]'>
  k_tangri
</div>
<buton className="bg-[#363636] px-2 flex items-center justify-center py-2 rounded-[5%] text-[14px]">
Edit Profile
</buton>
<button className="bg-[#363636] px-2 rounded-[5%] text-[14px]">
View Archeive
</button>
<button>
  <SettingsIcon/>
</button>
</div>
<div className='flex gap-8 pt-6'>
<div>
  <span className='font-medium text-[19px]'>{Posts?.length}</span> posts
</div>
<div>
<span className='font-medium text-[19px]'>22</span> followers
</div>
<div>
<span className='font-medium text-[19px]'>22</span> following
</div>
</div>
<div>
<div className='mt-5 font-bold'>
  khushi Tangri
</div>
<div className='pt-2'>
❣ ਮਨ ਨੀਵਾਂ  ਮੱਤ ਉੱਚੀ ❣
</div>
</div>
</div>
<div>
</div>
</div>
<div className='mt-14 border-t '>
<div className='mx-40 flex gap-20 pt-4 text-[15px] font-medium'>
<div>
Posts
</div>
<div>
Reels
</div>
<div>
Saved
</div>
<div>
Tagged
</div>
</div>


<div>

<div className='grid grid-cols-3 p-2'>
{
Posts?.map((val)=> (
<div key={val?.id} className=''>
  <div>

  <img className='h-[350px] w-[400px] p-[2px]' src={val?.image} alt="" onClick={()=>ChooseImg(val?.id)}/>
  </div>

</div>

)) 
}
</div>
{/* {togle && (
<div className='relative z-20 mt-[-968px] ml-[-235px] flex'>
<div className='fixed'>

<img className='w-[560px] h-[660px]' src={choose?.image} alt="" />
</div >
<div className='w-[560px] ml-[535px] h-[660px] bg-red-400 border-[5%] fixed'>

</div>
</div>)

} */}
</div>


</div>
</div>
  </div>
     )
}
    </div>
 
    
  )
}

export default ProfileInsta
