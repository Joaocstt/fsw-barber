"use client"
import { SmartphoneIcon } from "lucide-react"
import { Button } from "./ui/button"
import { toast } from "sonner"

interface PhoneItemProps {
  phone: string
}

const handleCopyPhoneClick = (phone: string) => {
  navigator.clipboard.writeText(phone)
  toast.success("Telefone copiado com sucesso!")
}

const PhoneItem = ({ phone }: PhoneItemProps) => {
  return (
    <div className="flex justify-between" key={phone}>
      {/* ESQUERDA */}
      <div className="flex items-center">
        <SmartphoneIcon />
        <p className="text-sm">{phone}</p>
      </div>
      {/* DIREITA */}
      <div>
        <Button
          size="sm"
          variant="outline"
          onClick={() => handleCopyPhoneClick(phone)}
        >
          Copiar
        </Button>
      </div>
    </div>
  )
}

export default PhoneItem
