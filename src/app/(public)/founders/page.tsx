import { Metadata } from "next"

import CardItem from "@/components/CardItem"
import PageTitle from "@/components/PageTitle"
import SideContent from "@/components/SideContent"
import PageWrapper, {
    CardsWrapper,
    TitleWrapper,
} from "@/components/PageWrapper"

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
            <PageWrapper imgSrc={BgImage.src}>
                <TitleWrapper>
                    <PageTitle
                        title="Conheça os Fundadores"
                        description="Um time de especialistas dedicados a transformar ideias em realidade com inovação e excelência"
                    />
                </TitleWrapper>
                <CardsWrapper>
                    <CardItem
                        title="Igor Rocha"
                        href="/igor"
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
                        href="/isaac"
                        description={
                            <span>
                                Garante que nossas soluções sejam{" "}
                                <b className="text-bold">robustas</b> e baseadas
                                em <b className="text-bold">dados</b>.
                            </span>
                        }
                    />
                    <CardItem
                        title="João Rupp"
                        href="/rupp"
                        description={
                            <span>
                                Conduz com foco na{" "}
                                <b className="font-bold">
                                    inteligência artificial
                                </b>{" "}
                                e na <b className="font-bold">eficiência</b> dos
                                sistemas.
                            </span>
                        }
                    />
                </CardsWrapper>
            </PageWrapper>
        </main>
    )
}
