import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
  <div>
      { /* Header */}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Shanks</h2>
        <p>Segunda-feira, 05 de agosto</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button size="icon">
            <SearchIcon />
          </Button>
        </div>

        <div className="relative w-full h-[150px] mt-6 ">
          <Image 
            src="/banner-01.png" 
            fill 
            className="object-cover rounded-xl" 
            alt="Banner" />
        </div>

      </div>
  </div>  
  );
}
