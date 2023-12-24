import KhushiGram from "./KhushiGram";
import Explore from "./KhushiGram/LeftGram/Home/Explore";
import { Routes,Route } from "react-router-dom";
import ReelsMaking from "./KhushiGram/LeftGram/Home/ReelsMaking";
import MessageBox from "./KhushiGram/LeftGram/Home/MessageBox";
import RequestCom from "./KhushiGram/LeftGram/Home/RequestCom";
import ProfileInsta from "./KhushiGram/LeftGram/Home/ProfileInsta";
function App() {
  return (
  <>
  {/* <ComponentOne/> */}
  {/* <Counter/> */}
  {/* <AddVideo/> */}
  {/* <Reducer/> */}
  {/* <Input/> */}
  <div className="bg-black h-[1200px]">
  <Routes>
    <Route path="/" element={<KhushiGram/>}/>
   <Route path="/explore" element={<Explore/>}/>
   <Route path="/reels" element={<ReelsMaking/>}/>
   <Route exact path="/messages" element={<MessageBox/>}>
    </Route>
    <Route exact path="/message/request" element={<RequestCom/>}/>
<Route path="/profile" element={<ProfileInsta/>}/>
  </Routes>
  </div>

  </>
  );
}

export default App;
