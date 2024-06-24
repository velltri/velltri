import { Metadata } from "next"

import CardItem from "@/components/CardItem"
import PageTitle from "@/components/PageTitle"
import MainWrapper from "@/components/MainWrapper"
import SideContent from "@/components/SideContent"
import PageWrapper, {
    CardsWrapper,
    TitleWrapper,
} from "@/components/PageWrapper"

import BgImage from "@/../public/assets/bg-founders.png"

export const metadata: Metadata = {
    title: "Fundadores",
    description:
        "Um time de especialistas dedicados a transformar ideias em realidade com inovação e excelência.",
}

export default function Founders() {
    return (
        <MainWrapper>
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
        </MainWrapper>
    )
}
