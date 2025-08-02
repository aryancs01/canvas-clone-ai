"use client"
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useSearchParams } from "next/navigation";
import { TriangleAlert } from "lucide-react";

export default function SignInCard(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");

    const params = useSearchParams();
    const error = params.get("error")

    const onCredentialSignin =  (
        e:React.FormEvent<HTMLFormElement>
    )=>{
        e.preventDefault();

        signIn("credentials",{
            email:email,
            password:password,
            callbackUrl:"/"
        })
    }

    const onProviderSignIn = (provider: "github" | "google") => {
        signIn(provider, { callbackUrl:"/dashboard"})
    }

    return (
       <Card className="w-full h-full p-8">
        <CardHeader className="px-0 pt-0">
            <CardTitle>Login to continue </CardTitle>
            <CardDescription>
                Use your email or another service to continue
            </CardDescription>
        </CardHeader>
        {!!error && (
            <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-1">
                <TriangleAlert className="size-4"/>
                <p>Invalid Email & Password</p>
            </div>
        )}
        <CardContent className="space-y-5 px-0 pb-0">
            <form onSubmit={onCredentialSignin}
                className="space-y-2.5"
            >
                <Input
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    placeholder="Email"
                    type="email"
                    required
                />
                <Input
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    placeholder="Password"
                    type="password"
                    required
                />
                <Button type="submit" className="w-full" size="lg">
                    Continue
                </Button>
            </form>
            <Separator/>
            <div className="flex flex-col gap-y-2.5">
                <Button
                    onClick={()=>onProviderSignIn("github")}
                    variant="outline"
                    size="lg"
                    className="w-full relative"
                >
                    <FaGithub className="mr-2 size-5 top-2.5 left-2.5 absolute"/>
                    Continue with Github
                </Button>
                <Button
                    onClick={()=>onProviderSignIn("google")}
                    variant="outline"
                    size="lg"
                    className="w-full relative"
                >
                    <FcGoogle className="mr-2 size-5 top-2.5 left-2.5 absolute"/>
                    Continue with Google
                </Button>
            </div>
            <p className="text-xs text-muted-foreground">
                Don&apos;t have an account 
                <Link href="/signup" className="text-sky-700 hover:underline ml-1">Sign up</Link>
            </p>
        </CardContent>
       </Card>
    )
}