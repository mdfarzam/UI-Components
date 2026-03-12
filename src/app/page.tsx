import AnimatedText from "@/components/AnimatedText";
import Clock from "@/components/Clock";
import ContractCard from "@/components/ContractCard";
import FocusRing from "@/components/FocusRing";
import HoverButton from "@/components/HoverButton";
import HoverCard from "@/components/HoverCard";
import MotionHook from "@/components/MotionHook";
import Navbar from "@/components/Navbar";
import SequenceMotion from "@/components/SequenceMotion";
import { SideBar } from "@/components/SideBar";
import Counter from "@/components/Counter";
import Dashboard from "@/dashboard/dashboard"
import { PromptInputBox } from "@/components/Promt";
import ScreenTimeCardDemo, { ScreenTimeCard } from "@/components/ScreenTimeCard";
import { Header } from "@/components/GooeyHeader";
import ButtonDemo from "@/components/PaymentButton";
import { ActivityDropdown } from "@/components/ActivityDropDown";
const page = () => {
  return (
    <div className="w-full min-h-screen bg-neutral-800 flex items-center  justify-center px-4">
      <div className="w-full">
      {/* 
      <ActivityDropdown/>
      <ButtonDemo/>
      <Header/>
      <ScreenTimeCardDemo/>
      <PromptInputBox /> 
      <Counter /> 
      <Dashboard />
      <SequenceMotion />
      <AnimatedText />
      <Navbar />
      <MotionHook />
      <SideBar />
      <HoverCard />
      <HoverButton />
      <ContractCard />
      <FocusRing />
      <Clock />
      */}
      </div>
    </div>
  );
};

export default page;
