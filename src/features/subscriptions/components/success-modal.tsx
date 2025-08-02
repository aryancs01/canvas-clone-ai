"use client"

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCheckout } from "../api/use-checkout";
import { useRouter } from "next/navigation";
import { useSuccessModal } from "../store/use-success-modal";

export const SuccessModal = () => {
    const router = useRouter();
    const { isOpen, onClose } = useSuccessModal();
    const mutation = useCheckout();

    const handleClose =  () => {
        router.replace("/dashboard")
        onClose()
    }

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent>
                <DialogHeader className="flex items-center space-y-4">
                    <Image
                        src="/logo.svg"
                        alt="logo"
                        width={36}
                        height={36}
                    />
                    <DialogTitle className="text-center">
                       Subscription Successfull!
                    </DialogTitle>
                    <DialogDescription className="text-center">
                        You have successfully subscribed to our service
                    </DialogDescription>
                </DialogHeader>
                
                <DialogFooter className="pt-2 mt-4 gap-y-2">
                    <Button 
                        className="w-full"
                        onClick={handleClose}
                        disabled={mutation.isPending}
                    >
                        Continue
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}