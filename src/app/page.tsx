import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GridBackground } from "./_components/grid";

export default function HomePage(){
    return <div className="">
        <div className="flex justify-between items-center mx-10">
            <div className="flex gap-3 items-center">
                <div className="size-14 relative">
                    <Image className="" fill src="/logo.svg" alt="logo"/>
                </div>
                <div>
                    <h2 className="font-bold text-2xl">Canva</h2>
                </div>
            </div>
            <div>
                <Link className={buttonVariants({
                    variant:"outline"
                })} href="/dashboard">
                    Get Started
                </Link>
            </div>
        </div>

        <div className="h-32">
            <div className="relative w-full h-full flex flex-col justify-center items-center font-bold">
                <h1 className="maintext mt-20">CANVA</h1>
            </div>
        </div>

        <div
            className="absolute top-0 left-14 w-[50%] h-2 opacity-70 origin-left"
            style={{
            background: "linear-gradient(90deg, transparent 0%, #87ceeb 20%, #4169e1 50%, #87ceeb 80%, transparent 100%)",
            transform: "rotate(25deg) translateY(60px)",
            transformOrigin: "left center",
            }}
        />

      <div
        className="absolute top-0 right-14 w-[50%] h-2 opacity-70 origin-right"
        style={{
          background: "linear-gradient(90deg, transparent 0%, #ffd700 20%, #ffb347 50%, #ffd700 80%, transparent 100%)",
          transform: "rotate(-25deg) translateY(80px)",
          transformOrigin: "right center",
        }}
      />
        
        <div className="w-full h-full flex justify-between relative">
            <div className="rightTriangleLeft"></div>
            <div className="rightTriangleRight"></div>
            <div style={{backgroundColor:"red"}} className="absolute clay bg-red-600 size-28 top-40 left-36"></div>
            <div style={{backgroundColor:"blue"}} className="absolute clay bg-blue-600 size-28 top-40 right-36"></div>
        </div>


        <div className="px-10 w-full h-screen flex flex-col mt-20">
            <div className="flex flex-col gap-y-4">
                <h3 className="text-5xl font-bold">Design Anything in Seconds</h3>
                <p className="text-md w-[40%] text-muted-foreground">From simple shapes to advanced tools like background removal, everything you need to create stunning visuals is here.</p>
            </div>

            <div className="flex w-full h-[500px] gap-x-10 justify-center items-start">
                <Card className="w-64 h-56 mt-52">
                    <CardHeader>
                        <CardTitle>Drag & Drop Simplicity</CardTitle>
                        <CardDescription>Easily arrange shapes, images, and elements on your canvas with our intuitive editor.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <GridBackground>
                            <div className="size-20">
                                
                            </div>
                        </GridBackground>
                    </CardContent>
                </Card>
                <Card className="w-64 h-56 mt-32">
                    <CardHeader>
                        <CardTitle>Powerful Brush Tools</CardTitle>
                        <CardDescription>Add a personal touch to your designs using flexible and responsive brush features.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <GridBackground color="#4169e1">
                            <div className="size-20">
                                
                            </div>
                        </GridBackground>
                    </CardContent>
                </Card>
                <Card className="w-64 h-56 mt-10">
                    <CardHeader>
                        <CardTitle>Remove Background Instantly</CardTitle>
                        <CardDescription>Clean up your images with one click using our smart background removal tool.</CardDescription>
                    </CardHeader>
                     <CardContent>
                        <GridBackground color="#ffb347">
                            <div className="size-20">
                                
                            </div>
                        </GridBackground>
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
}