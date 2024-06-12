import { Metadata } from "next"

import Header from "@/components/Header"
import CardItem from "@/components/CardItem"
import PageTitle from "@/components/PageTitle"
import ImageClip from "@/components/ImageClip"
import SideContent from "@/components/SideContent"

import BgImage from "@/../public/bg-clients.png"

export const metadata: Metadata = {
    title: "Clientes",
    description: "Empresas que confiam na Velltri para inovar e crescer.",
}

export default function Clients() {
    return (
        <main className="mx-auto flex h-dvh w-dvw max-w-[1500px] gap-16 p-16">
            <SideContent />
            <div className="relative flex flex-1 overflow-hidden rounded-3xl">
                <div className="relative flex flex-1 flex-col p-8 shadow-xl">
                    <Header />
                    <div className="z-10 mt-20 flex gap-8">
                        <div className="mt-36 flex-1">
                            <PageTitle
                                title="Parceiros de Sucesso"
                                description="Empresas que confiam na Velltri para inovar e crescer."
                            />
                        </div>
                        <div className="flex max-w-[360px] flex-1 flex-col gap-4">
                            <CardItem title="Carregando..." description="" />
                        </div>
                    </div>
                </div>

                <div className="absolute h-full w-full">
                    <ImageClip src={BgImage.src} />
                </div>
            </div>
        </main>
    )
}
