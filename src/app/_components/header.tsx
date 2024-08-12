import { MenuIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Sheet, SheetTrigger } from "./ui/sheet"
import SidebarSheet from "./sidebar-sheet"
import Link from "next/link"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Link href="/">
          <Image src="/fsw_logo.png" height={18} width={120} alt="logotipo" />
        </Link>

           {/* Menu Desktop */}
           <nav className="hidden sm:flex sm:items-center space-x-6">
            <Link href="/" className="text-white text-sm hover:text-gray-600">
            Agendamentos
            </Link>
            <Button size="sm">
              Icon Perfil
            </Button>
        </nav>


        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="sm:hidden" >
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SidebarSheet />
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
