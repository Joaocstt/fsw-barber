import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";
import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";
import { quickSearchOption } from "./_constants/search";
import BookingItem from "./_components/booking-item";
import Search from "./_components/search";
import Link from "next/link";


export default async function Home() {
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: 'desc'
    }
  })
  console.log({ barbershops })
  return (
    <div>
      { /* Header */}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Shanks</h2>
        <p>Segunda-feira, 05 de agosto</p>

        {/* BUSCA (SEARCH) */}
        <div className="mt-6">
          <Search />
        </div>

        { /* BUSCA RÁPIDA */}

        <div className="flex gap-3 mt-6 overflow-x-scroll  [&::-webkit-scrollbar]:hidden">
          {quickSearchOption.map(option => (
            <Button 
            className="gap-2" 
            variant="secondary" 
            key={option.title} 
            asChild>
              <Link href={`/barbershops?service=${option.title}`}>
                <Image src={option.imageUrl} width={16} height={16} alt={option.title} />
                {option.title}
                
              </Link>
            </Button>

          ))}

        </div>

        <div className="relative w-full h-[150px] mt-6 ">
          <Image
            src="/banner-01.png"
            fill
            className="object-cover rounded-xl"
            alt="Banner" />
        </div>

          {/* AGENDAMENTOS */}
          
          <BookingItem />

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {
            barbershops.map(barbershop => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))
          }
        </div>



        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {
            popularBarbershops.map(barbershop => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))
          }
        </div>
      </div>


    </div>

  );
}
