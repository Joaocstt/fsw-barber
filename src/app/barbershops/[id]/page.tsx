import PhoneItem from "@/app/_components/phone-item";
import ServiceItem from "@/app/_components/services-item";
import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, SmartphoneIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
interface BarbershopPagesProps {
    params: {
        id: string
    }
}

const BarbershopPage = async ({params}: BarbershopPagesProps) => {

    const barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id
        },
        include: {
            services: true
        }
    })

    if(!barbershop) {
        return notFound();
    }


    return (  
        <div>
            {/*  IMAGEM */}
            <div className="relative w-full h-[250px]">
              
            <Image 
                src={barbershop?.imageUrl} 
                fill 
                className="object-cover" 
                alt={barbershop?.name} 
            />        

            <Button size="icon" variant="secondary" className="absolute top-4 left-4">
                <Link href="/">
                    <ChevronLeftIcon />
                </Link>
            </Button>

            <Button size="icon" variant="secondary" className="absolute top-4 right-4">
                <MenuIcon />
            </Button>

            </div>

            <div className="p-5 border-b border-solid">
                <h1 className="mb-3 font-bold text-xl">{barbershop?.name}</h1>
                <div className="flex items-center gap-1 mb-2">
                    <MapPinIcon className="text-primary" size={18}/>
                    <p className="text-sm">{barbershop?.address}</p>
                </div>
                
                <div className="flex items-center gap-2">
                    <StarIcon className="fill-primary text-primary" size={18} />
                    <p className="text-sm">5,0 (499 avaliações)</p>
                </div>
            </div>

        {/* DESCRIÇÃO */}
        <div className="border-b border-solid p-5 space-y-3">
            <h2 className="font-bold uppercase text-gray-400">Sobre nós</h2>
            <p className="text-sm">{barbershop?.description}</p>
        </div>

        {/* SERVIÇOS */}
        <div className="space-y-3 border-b border-solid p-5">
            <h2 className="font-bold uppercase text-gray-400">Sobre nós</h2>
            <div className="space-y-3">
                {barbershop.services.map(service => <ServiceItem key={service.id} service={service} />)}

            </div>
        </div>


        <div className="p-5 space-y-3">
            {barbershop.phones.map(phone => (
               <PhoneItem phone={phone} key={phone} />
            ))}
        </div>

        </div>
    );
}
 
export default BarbershopPage;