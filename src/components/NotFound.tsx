import Link from "next/link"
import { Button } from "@nextui-org/button"

import { LuSearchX } from "react-icons/lu"
import VelltriIcon from "./VelltriIcon"

export default function NotFound() {
    return (
        <main className="mx-auto flex h-dvh w-dvw max-w-[1500px] items-center justify-center gap-16 p-16">
            <div className="flex flex-col items-center justify-center gap-2">
                <LuSearchX size={150} />
                <p className="text-center text-xl font-bold uppercase">
                    Ops... Página não encontrada
                </p>
                <Button color="primary" as={Link} href="/">
                    <VelltriIcon />
                    Voltar para a página inicial
                </Button>
            </div>
        </main>
    )
}
