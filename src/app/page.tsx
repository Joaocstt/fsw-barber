import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { Badge } from "./_components/ui/badge";
import { Avatar } from "./_components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";

export default async function Home() {
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: 'desc'
    }
  })
  console.log({barbershops})
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

        { /* BUSCA RÁPIDA */}

        <div className="flex gap-3 mt-6 overflow-x-scroll  [&::-webkit-scrollbar]:hidden">
          <Button className="gap-2" variant="secondary">
              <Image src="/tesoura.svg" width={16} height={16} alt="icone de bigode" />
              Cabelo
          </Button>

          <Button className="gap-2" variant="secondary">
              <Image src="/bigode.svg" width={16} height={16} alt="icone de barba/bigode" />
              Barba
          </Button>

          <Button className="gap-2" variant="secondary">
              <Image src="/acabamento.svg" width={16} height={16} alt="icone de barba/bigode" />
              Acabamento
          </Button>

          <Button className="gap-2" variant="secondary">
              <Image src="/tesoura.svg" width={16} height={16} alt="icone de bigode" />
              Pezinho
          </Button>
        </div>

        <div className="relative w-full h-[150px] mt-6 ">
          <Image
            src="/banner-01.png"
            fill
            className="object-cover rounded-xl"
            alt="Banner" />
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">Agendamentos</h2>
        <Card className="mt-6">
          <CardContent className="flex justify-between p-0">
            {/* ESQUERDA */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-bold">Corte de Cabelo</h3>

              <div className="flex items-center gap-2">
                <Avatar className="h-6  w-6">
                  <AvatarImage src="https://utfs.io/f/45331760-899c-4b4b-910e-e00babb6ed81-16q.png" />
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center px-5 border-l-2 border-solid">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">05</p>
              <p className="text-sm">20:00</p>
            </div>
          </CardContent>
        </Card>

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

      <footer>
      <Card>
            <CardContent className="px-5 py-6">
              <p className="text-sm text-gray-400">
                2024 Copyright <span className="font-bold">FSW Barber</span> FSW barber
              </p>
            </CardContent>
          </Card>
      </footer>
    </div>

  );
}
