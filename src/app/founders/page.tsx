import { Metadata } from "next"

import Header from "@/components/Header"
import CardItem from "@/components/CardItem"
import PageTitle from "@/components/PageTitle"
import ImageClip from "@/components/ImageClip"
import SideContent from "@/components/SideContent"

import BgImage from "@/../public/bg-founders.png"

export const metadata: Metadata = {
    title: "Fundadores",
    description:
        "Um time de especialistas dedicados a transformar ideias em realidade com inovação e excelência.",
}

export default function Founders() {
    return (
        <main className="mx-auto flex h-dvh w-dvw max-w-[1500px] gap-16 p-16">
            <SideContent />
            <div className="relative flex flex-1 overflow-hidden rounded-3xl">
                <div className="relative flex flex-1 flex-col p-8 shadow-xl">
                    <Header />
                    <div className="z-10 mt-20 flex gap-8">
                        <div className="mt-36 flex-1">
                            <PageTitle
                                title="Conheça os Fundadores"
                                description="Um time de especialistas dedicados a transformar ideias em realidade com inovação e excelência"
                            />
                        </div>
                        <div className="flex max-w-[360px] flex-1 flex-col gap-4">
                            <CardItem
                                title="Igor Rocha"
                                description={
                                    <span>
                                        Lidera com uma visão centrada na{" "}
                                        <b className="text-bold">
                                            experiência do usuário
                                        </b>{" "}
                                        e na estética{" "}
                                        <b className="text-bold">moderna</b>.
                                    </span>
                                }
                            />
                            <CardItem
                                title="Isaac Lima"
                                description={
                                    <span>
                                        Garante que nossas soluções sejam{" "}
                                        <b className="text-bold">robustas</b> e
                                        baseadas em{" "}
                                        <b className="text-bold">dados</b>.
                                    </span>
                                }
                            />
                            <CardItem
                                title="João Rupp"
                                description={
                                    <span>
                                        Conduz com foco na{" "}
                                        <b className="font-bold">
                                            inteligência artificial
                                        </b>{" "}
                                        e na{" "}
                                        <b className="font-bold">eficiência</b>{" "}
                                        dos sistemas.
                                    </span>
                                }
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
