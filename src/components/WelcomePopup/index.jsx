import { CgClose } from "react-icons/cg";

const WelcomePopup = () => {
  return (
    <div className="absolute w-screen h-screen">
      <div className="container mx-auto w-full h-full flex justify-center items-center">
        <div className="relative w-1/2 h-1/2 bg-white z-[502] rounded-xl p-5">
          <div>Уважаемые посетители сайта</div>
          <div className="absolute top-0 right-0 z-[502] p-5 cursor-pointer">
            <CgClose size={30} />
          </div>
        </div>
      </div>

      <div className="fixed top-0 right-0 z-[502] p-5 cursor-pointer">
        <CgClose size={50} className="text-white" />
      </div>
      <div className="fixed top-0 right-0 bottom-0 left-0 bg-black opacity-40 z-[500]" />
    </div>
  );
};

export default WelcomePopup;
