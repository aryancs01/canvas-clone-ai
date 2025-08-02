/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client"
import { useSession,signOut } from "next-auth/react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { CreditCard, Crown, Loader, LogOut } from "lucide-react"
import { usePaywall } from "@/features/subscriptions/hooks/use-paywall"
import { useBilling } from "@/features/subscriptions/api/use-billing"

export default function UserButton (){
    const { shouldBlock, triggerPaywall, isLoading } = usePaywall()
    const mutation = useBilling()
    const session = useSession();

    const onClick = () => {
        if(shouldBlock){
            triggerPaywall()
            return;
        }

        mutation.mutate()
    }

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
            <DropdownMenuTrigger className="outline-none relative">
                {!shouldBlock && !isLoading && 
                <div className="absolute -top-1 -left-1 z-10 flex items-center justify-center">
                    <div className="rounded-full bg-white flex items-center justify-center p-1 drop-shadow-sm">
                        <Crown className="size-3 text-yellow-500 fill-yellow-500"/>
                    </div>
                </div>}
                <Avatar className="size-10 hover:opacity-75 transition">
                    <AvatarImage alt={name} src={image || ""}/>
                    <AvatarFallback className="bg-blue-500 font-medium text-white flex items-center justify-center">
                        {name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-60">
                <DropdownMenuItem
                    disabled={mutation.isPending}
                    onClick={onClick}
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