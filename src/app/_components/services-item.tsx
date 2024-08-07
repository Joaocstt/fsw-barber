import { BarbershopService } from "@prisma/client";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface ServiceItempProps {
    service: BarbershopService
}

const ServiceItem = ({ service }: ServiceItempProps) => {
    return (
     <Card>
        <CardContent  className="flex items-center gap-3 p-4">
            <div className="relative min-h-[110px] min-w-[110px] max-h-[110px] max-w-[110px]">
                <Image src={service.imageUrl} alt={service.name}  fill className="object-cover rounded-xl" />
            </div>

            <div className="space-y-2">
                <h3 className="font-semibold text-sm">{service.name}</h3>
                <p className="text-gray-400">{service.description}</p>
                 {/* PREÇO E BOTÃO */}
                <div className="flex items-center justify-between">
                    <p className="text-sm font-bold text-primary">{Intl.NumberFormat("pt-BR", {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(Number(service.price))}
                    </p>

                    <Button variant="secondary" size="sm">Reservar</Button>
                </div>
            </div>
        </CardContent>
     </Card>
    );
}

export default ServiceItem;