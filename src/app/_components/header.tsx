import {MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Sheet,SheetTrigger } from "./ui/sheet";
import SidebarSheet from "./sidebar-sheet";

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
                    
                    <SidebarSheet />
                </Sheet>
            </CardContent>
        </Card>
    );
}

export default Header;