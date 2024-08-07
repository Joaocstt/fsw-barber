import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { quickSearchOption } from "../_constants/search";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";
const Header = () => {
    return (
        <Card>
            <CardContent className="flex p-5 flex-row justify-between items-center">
                <Image src="/fsw_logo.png" height={18} width={120} alt="logotipo" />

                <Sheet>
                    <SheetTrigger asChild>
                        <Button size="icon" variant="outline">
                            <MenuIcon />
                        </Button>
                    </SheetTrigger>
                    <SheetContent className="overflow-y-auto">
                        <SheetHeader>
                            <SheetTitle className="text-left">Menu</SheetTitle>
                        </SheetHeader>

                        <div className="py-5 border-b flex items-center border-solid gap-3">
                            <Avatar>
                                <AvatarImage src="https://www.github.com/joaocstt.png" />
                            </Avatar>

                            <div className="">
                                <p className="font-bold">Shanks Code</p>
                                <p className="text-xs">jnc201820@gmail.com</p>
                            </div>
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
                </Sheet>
            </CardContent>
        </Card>
    );
}

export default Header;