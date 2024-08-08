import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react";
import { Button } from "./ui/button";
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import Link from "next/link";
import { quickSearchOption } from "../_constants/search";
import Image from "next/image";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";



const SidebarSheet = () => {
    return (

        <SheetContent className="overflow-y-auto">
            <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>

            <div className="py-5 border-b justify-between flex items-center border-solid gap-3">
                <h2 className="font-bold">Olá, faça seu login</h2>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button size="icon">
                            <LogInIcon />
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="w-[90%]">
                        <DialogHeader>
                            <DialogTitle>Faça login na plataforma</DialogTitle>
                            <DialogDescription>
                                Conecte-se usando sua conta do Google
                            </DialogDescription>
                        </DialogHeader>
                        <Button variant="outline" className="gap-1 font-bold">
                            <Image src="/Google.svg" width={18} height={18} alt="Icone Google" />
                            Google
                        </Button>
                    </DialogContent>
                </Dialog>

                {/* <Avatar>
                        <AvatarImage src="https://www.github.com/joaocstt.png" />
                    </Avatar>

                    <div className="">
                        <p className="font-bold">Shanks Code</p>
                        <p className="text-xs">jnc201820@gmail.com</p>
                    </div> */}
            </div>

            <div className="py-5 flex flex-col gap-2 border-b border-solid">
                <SheetClose asChild>
                    <Button className="gap-2 justify-start" variant="ghost" asChild>
                        <Link href="/">
                            <HomeIcon size={18} />
                            Inicio
                        </Link>
                    </Button>
                </SheetClose>
                <Button className="gap-2 justify-start" variant="ghost">
                    <CalendarIcon size={18} />
                    Agendamento
                </Button>

            </div>
            <div className="py-5 flex flex-col gap-2 border-b border-solid">
                {quickSearchOption.map(option => (
                    <Button key={option.title} className="gap-2 justify-start" variant="ghost">
                        <Image src={option.imageUrl} alt={option.title} height={18} width={18} />
                        {option.title}
                    </Button>
                ))}
            </div>

            <div className="flex flex-col gap-2 py-5">
                <Button variant="ghost" className="justify-start gap-2">
                    <LogOutIcon size={18} />
                    Sair da conta
                </Button>
            </div>

        </SheetContent>
    );
}

export default SidebarSheet;