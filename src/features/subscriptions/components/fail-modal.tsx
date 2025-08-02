"use client"

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCheckout } from "../api/use-checkout";
import { useFailModal } from "../store/use-fail-modal";
import { useRouter } from "next/navigation";

export const FailModal = () => {
    const router = useRouter();
    const { isOpen, onClose } = useFailModal();
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
                       Something went wrong
                    </DialogTitle>
                    <DialogDescription className="text-center">
                        We could not process your payment
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