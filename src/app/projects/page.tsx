import { Metadata } from "next"

import Header from "@/components/Header"
import CardItem from "@/components/CardItem"
import PageTitle from "@/components/PageTitle"
import ImageClip from "@/components/ImageClip"
import SideContent from "@/components/SideContent"

import BgImage from "@/../public/bg-projects.png"

export const metadata: Metadata = {
    title: "Projetos",
    description:
        "Explore algumas das soluções inovadoras que criamos para transformar negócios.",
}

export default function Projects() {
    return (
        <main className="mx-auto flex h-dvh w-dvw max-w-[1500px] gap-16 p-16">
            <SideContent />
            <div className="relative flex flex-1 overflow-hidden rounded-3xl">
                <div className="relative flex flex-1 flex-col p-8 shadow-xl">
                    <Header />
                    <div className="z-10 mt-20 flex gap-8">
                        <div className="mt-36 flex-1">
                            <PageTitle
                                title="Nossos Projetos em Destaque"
                                description="Explore algumas das soluções inovadoras que criamos para transformar negócios."
                            />
                        </div>
                        <div className="flex max-w-[360px] flex-1 flex-col gap-4">
                            <CardItem
                                title="Central Lead"
                                description="Requalifique leads com disparo de mensagens eficiente."
                            />
                            <CardItem
                                title="Vista"
                                description="Descubra ambientes em 360º, a nova dimensão em imobiliária"
                            />
                            <CardItem
                                title="PesquiseAI"
                                description="Encontre o melhor perto de você com busca inteligente."
                            />
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
