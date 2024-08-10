import Image from "next/image";
import { Button } from "./ui/button";
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { signIn } from "next-auth/react";
const handleLoginWithGoogleClick = async () => {
    await signIn("google")
}

const SignInDialog = () => {
    return (  
        <>
        <DialogHeader>
            <DialogTitle>Faça login na plataforma</DialogTitle>
            <DialogDescription>
                Conecte-se usando sua conta do Google
            </DialogDescription>
        </DialogHeader>
        <Button variant="outline" className="gap-1 font-bold" onClick={handleLoginWithGoogleClick}>
            <Image src="/Google.svg" width={18} height={18} alt="Icone Google" />
            Google
        </Button>
        </>
    );
}
 
export default SignInDialog;