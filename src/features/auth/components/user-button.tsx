/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client"
import { useSession,signOut } from "next-auth/react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { CreditCard, Loader, LogOut } from "lucide-react"

export default function UserButton (){
    const session = useSession();
    if(session.status === "loading"){
        return (
            <Loader className="size-4 animate-spin"/>
        )
    }

    if(session.status === "unauthenticated" || !session.data){
        return null;
    }

    //@ts-ignore
    const { name, image } = session.data.user;

    return (
       <DropdownMenu modal={false}>
            <DropdownMenuTrigger>
                <Avatar className="size-10 hover:opacity-75 transition">
                    <AvatarImage alt={name} src={image || ""}/>
                    <AvatarFallback className="bg-blue-500 font-medium text-white flex items-center justify-center">
                        {name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-60">
                <DropdownMenuItem
                    disabled={false}
                    onClick={()=>{}}
                    className="h-10"
                >
                    <CreditCard className="size-4 mr-2"/>
                    Billing
                </DropdownMenuItem>
                <DropdownMenuSeparator/>
                <DropdownMenuItem
                    disabled={false}
                    onClick={()=>signOut()}
                    className="h-10"
                >
                    <LogOut className="size-4 mr-2"/>
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}