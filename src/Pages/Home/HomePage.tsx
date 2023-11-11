// import Stars from "../../Icons/Stars";
import Images from "../../Images/Images";
import {GrCheckmark} from 'react-icons/gr'
const HomePage = () => {
  return (
    <div
    className="h-full w-full p-10"
    style={{
      backgroundImage: `url(${Images.background})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}
    >
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
      <div className="">
        <span className="bg-yellow-400 h-3 w-3 flex items-center justify-center text-white">
          <GrCheckmark color="white" size={30}/>
        </span>
        {/* <IoMdCheckmarkCircle clasName=""/> */}
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
