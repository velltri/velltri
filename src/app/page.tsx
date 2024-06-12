import Image from "next/image"

import Header from "@/components/Header"
import CardItem from "@/components/CardItem"
import PageTitle from "@/components/PageTitle"
import SideContent from "@/components/SideContent"

import BgImage from "@/../public/bg-home.png"
import MSPartner from "@/../public/ms-partner.png"
import ImageClip from "@/components/ImageClip"

export default function Home() {
    return (
        <main className="mx-auto flex h-dvh w-dvw max-w-[1500px] gap-16 p-16">
            <SideContent />
            <div className="relative flex flex-1 overflow-hidden rounded-3xl">
                <div className="relative flex flex-1 flex-col p-8 shadow-xl">
                    <Header />
                    <div className="z-10 mt-20 flex gap-8">
                        <div className="mt-36 flex-1">
                            <PageTitle
                                title="Transforme seu Negócio com IA"
                                description="Criamos soluções inovadoras que impulsionam sua empresa para o futuro."
                            />
                        </div>
                        <div className="flex max-w-[360px] flex-1 flex-col gap-4">
                            <div className="shadow-lg">
                                <Image
                                    src={MSPartner}
                                    alt="Microsoft Partner"
                                />
                            </div>
                            <CardItem
                                title="350k+"
                                description="Mais de 350 mil transações realizadas nos nossos servidores"
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
