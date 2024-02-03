import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import BarbershopInfo from "./_components/barbershop-info"
import ServiceItem from "./_components/service-item";
import { Key } from "react";

interface BarbershopDetailsPageProps {
  params: { id: string };
}

const BarbershopDetailsPage = async ({ params }: BarbershopDetailsPageProps) => {
  if (!params.id) {
    // TODO: direcionar para home page
    return null
  }

  const Barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id
    },
    include: {
      Service: true
    }
  })

  if (!Barbershop) {
    // TODO: direcionar para home page
    return null
  }

  return <div>
    <BarbershopInfo barbershop={Barbershop}/>

    <div className="px-5 flex flex-col gap-4 py-6">
    {Barbershop.Service.map((service: { id: Key | null | undefined; }) => (
      <ServiceItem key={service.id} service={service}/>
    ))}
    </div>
  </div>;
}

export default BarbershopDetailsPage;