import Image from "next/image";
import Link from "next/link";
import { GridPatternLinearGradient } from "./_components/GridPatternLinearGradient";
import { Karla } from 'next/font/google';
import { Button } from "@/components/ui/button";
import { IoInformationCircle, IoPricetag } from "react-icons/io5";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, ImageUp, LayoutTemplate, MousePointerClick, Save } from "lucide-react";
import { FeatureMarquee } from "./_components/FeatureMarquee";
import { FcExport } from "react-icons/fc";
import FooterComponent from "./_components/Footer";

const karla = Karla({
    subsets:["latin"],
    weight:"400"
})

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <GridPatternLinearGradient />

      <div className="mx-2 md:mx-7 lg:mx-32 mt-10 relative z-10">
        <div className="w-full bg-[#3a3a3a] h-10 rounded-3xl flex items-center justify-between px-2 overflow-hidden">
          <div className="flex items-center gap-x-2 bg-white px-3 rounded-2xl">
            <div className="relative">
              <Image width={36} height={36} src="/logo.svg" alt="logo" />
            </div>
            <h4 className="font-semibold">Canva</h4>
          </div>

          <div className="flex items-center gap-x-2 bg-white px-3 rounded-2xl">
            <Link href="/dashboard" className="font-semibold">
              Get Started
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-y-8 items-center">
            <h1 style={{
                fontWeight:"bold"
            }} className={`${karla.className} lg:w-[50%] text-balance text-2xl lg:text-5xl text-center`}>Your designs. Your flow. One smart canvas.</h1>
            <p className={`${karla.className} text-center text-sm lg:text-2xl lg:w-[60%] text-balance text-muted-foreground font-semibold`}>Everything you need to design social posts-slides, and with no complexity, just creativity</p>

            <Link href="/dashboard">
                <Button className="p-2 lg:p-7 bg-orange-500 hover:bg-orange-600 transition-colors rounded-4xl text-md lg:text-xl cursor-pointer">Get Started</Button>
            </Link>

            <p className="flex gap-2 items-center text-sm lg:text-md text-muted-foreground"> 
                <IoInformationCircle className="size-3 lg:size-5"/> No design degree required. just your ideas.
            </p>
        </div>

        <div className="w-full h-[200px] lg:h-[600px] mt-10 lg:mt-20">
            <video autoPlay loop muted className="w-full h-full rounded-md">
                <source src="/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>

        <div className="w-full h-[100px] md:h-[200px] mt-10 flex items-center justify-center gap-4">
            <Separator className="flex-1" />
            
            <div className="flex items-center gap-4 border-x-2 ">
                <Separator orientation="vertical" className="h-20" />

                <Image width={70} height={70} src="/logo.svg" alt="logo" />

                <Separator orientation="vertical" className="h-28" />
            </div>

            <Separator className="flex-1" />
        </div>

        <div className="my-6 sm:my-8 lg:my-10 px-4 sm:px-6">
            <div className="lg:flex flex-row gap-5 justify-around">
                <div className="flex flex-col items-center gap-4 mt-2">
                    <Save className="size-10 bg-orange-400 text-white p-2 rounded-full"/>
                    <p className="font-semibold">Auto Save</p>
                </div>
                <Separator orientation="vertical"/>
                <div className="flex flex-col items-center gap-4 mt-2">
                    <LayoutTemplate className="size-10 bg-orange-400 text-white p-2 rounded-full"/>
                    <p className="font-semibold">Smart Templates</p>
                </div>
                <Separator orientation="vertical"/>
                <div className="flex flex-col items-center gap-4 mt-2">
                    <MousePointerClick className="size-10 bg-orange-400 text-white p-2 rounded-full"/>
                    <p className="font-semibold">Drag & Drop Editing</p>
                </div>
                <Separator orientation="vertical"/>
                <div className="flex flex-col items-center gap-4 mt-2">
                    <ImageUp className="size-10 bg-orange-400 text-white p-2 rounded-full"/>
                    <p className="font-semibold">Image Upload</p>
                </div>
                <Separator orientation="vertical"/>
                <div className="flex flex-col items-center gap-4 mt-2">
                    <FcExport className="size-10 bg-orange-400 fill-white text-white p-2 rounded-full"/>
                    <p className="font-semibold text-balance">JPG PNG SVG JSON Exports</p>
                </div>
            </div>

           
        </div>
        
        <div className="my-36">
            <FeatureMarquee/>
        </div>

        <div className="flex flex-col gap-y-4 items-center justify-center my-10 sm:my-16 lg:my-20 px-4 sm:px-6 lg:px-0">
            <div className="flex flex-col gap-y-4 items-center justify-center text-center">
                <p className="flex items-center gap-2 text-white bg-[#333] p-2 sm:p-3 rounded-3xl text-sm sm:text-base">
                    <IoPricetag className="w-4 h-4 sm:w-5 sm:h-5"/>
                    Pricing
                </p>
                <h1 style={{
                    fontWeight:"900"
                }} className={`${karla.className} text-2xl sm:text-3xl lg:text-4xl font-extrabold px-2`}>
                    Affordable Subscriptions Option
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground px-4 max-w-2xl">
                    Get Pre-Designed Templates and AI background removal
                </p>
            </div>

            <div className="w-full max-w-[500px] mx-auto">
                <div className="bg-slate-200 flex flex-col gap-y-2 p-4 sm:p-5 text-lg sm:text-xl rounded-t-xl">
                    <div>
                        <h5 className="text-base sm:text-lg">Pro Plan</h5>
                    </div>
                    <div className="flex items-end gap-x-2 sm:gap-x-3">
                        <p className="text-lg sm:text-xl">&#8377;</p>
                        <p className="text-2xl sm:text-3xl font-bold">799</p>
                        <p className="text-sm sm:text-base">/per month</p>
                    </div>
                    <Link href="/dashboard" className="w-full mt-3">
                        <Button className="w-full bg-orange-500 hover:bg-orange-600 cursor-pointer text-sm sm:text-base py-2 sm:py-3">
                            Get Started
                        </Button>
                    </Link>
                </div>
                <div className=" rounded-b-xl p-4 sm:p-5">
                    <p className="text-base sm:text-lg mb-3 sm:mb-4">What&apos;s Included</p>
                    <ul className="flex flex-col gap-y-2 sm:gap-y-3">
                        <li className="flex items-center gap-x-2 sm:gap-x-3">
                            <CheckCircle className="bg-orange-500 text-white fill-orange-500 rounded-full w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"/>
                            <span className="text-sm sm:text-base">Unlimited Projects</span>
                        </li>
                        <li className="flex items-center gap-x-2 sm:gap-x-3">
                            <CheckCircle className="bg-orange-500 text-white fill-orange-500 rounded-full w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"/>
                            <span className="text-sm sm:text-base">Unlimited Templates Access</span>
                        </li>
                        <li className="flex items-center gap-x-2 sm:gap-x-3">
                            <CheckCircle className="bg-orange-500 text-white fill-orange-500 rounded-full w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"/>
                            <span className="text-sm sm:text-base">AI features</span>
                        </li>
                        <li className="flex items-center gap-x-2 sm:gap-x-3">
                            <CheckCircle className="bg-orange-500 text-white fill-orange-500 rounded-full w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"/>
                            <span className="text-sm sm:text-base">Support System</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
      <FooterComponent/>
    </div>
  );
}
