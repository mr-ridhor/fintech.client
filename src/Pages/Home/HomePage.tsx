// import Stars from "../../Icons/Stars";
import { Link } from "react-router-dom";
import Images from "../../Images/Images";
import List from "./Partials/List";

const HomePage = () => {
  return (
    <div
      className="h-full w-full p"
      style={{
        backgroundImage: `url(${Images.background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-[#F5F5DC] text-purple-600 h-12 flex items-center justify-between px-6 font-medium xl:text-xl">
        <div className="flex gap-2 ">
          <p className="cursor-pointer hover:text-yellow-600/90">Home</p>
          <p className="cursor-pointer hover:text-yellow-600/90">Personal</p>
          <p className="cursor-pointer hover:text-yellow-600/90">Business</p>
          <p className="cursor-pointer hover:text-yellow-600/90">Corporate</p>
        </div>
        <div className="flex gap-2">
        
          <Link to={"auth/register"} className="cursor-pointer hover:text-yellow-600/90">
          Open an account
          </Link>
          <p className="cursor-pointer hover:text-yellow-600/90">Internet Banking</p>
          <p className="cursor-pointer hover:text-yellow-600/90">Contact us</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-white font-bold">RH & CO</p>
        <div className="space-y-0.5">
          <div className="w-16 h-2  rounded-tr bg-yellow-400"></div>
          <div className="w-16 h-2  rounded-bl bg-yellow-400"></div>
        </div>
        <div className="mt-10">
          <p className="text-white font-bold leading-loose text-5xl w-[400px]">
            Banking, Finance & E-Pay App UI
          </p>
        </div>
        <div className="space-y-2">
          <List text="Instant transfer" />
          <List text="Virtual Card" />
          <List text="Instant Card" />
          <List text="Corporate Banking" />
          <List text="Business Banking" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
// <div className="bg-[#712FB8] h-full w-full p-4">
//   <div className="">
//     <div className="flex items-cente w-[70%] bg-green-500 justify-between">
//     <p className="text-white font-bold">RH & CO</p>
//     <div className="flex items-end">
//       <Stars height={10} width={40}/>

//     </div>

//     </div>
//     <div className="space-y-0.5">
//       <div className="w-16 h-2  rounded-tr bg-yellow-400"></div>
//       <div className="w-16 h-2  rounded-bl bg-yellow-400"></div>
//     </div>
//     <div className="w-[60%] items-center justify-end flex   bg-red-400 mt-1 ">
//       <Stars height={51} width={60}/>
//     </div>
//     <div className="mt-10 ">
//       <p className="text-white font-bold leading-10 text-3xl w-[300px]">
//         Banking, Finance & E-Pay App UI
//       </p>
//     </div>
//   </div>
// </div>
