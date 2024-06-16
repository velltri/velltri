import { Metadata } from "next"

import CardItem from "@/components/CardItem"
import PageTitle from "@/components/PageTitle"
import MainWrapper from "@/components/MainWrapper"
import SideContent from "@/components/SideContent"

import BgImage from "@/../public/bg-projects.png"
import PageWrapper, {
    CardsWrapper,
    TitleWrapper,
} from "@/components/PageWrapper"

export const metadata: Metadata = {
    title: "Projetos",
    description:
        "Explore algumas das soluções inovadoras que criamos para transformar negócios.",
}

export default function Projects() {
    return (
        <MainWrapper>
            <SideContent />
            <PageWrapper imgSrc={BgImage.src}>
                <TitleWrapper>
                    <PageTitle
                        title="Nossos Projetos em Destaque"
                        description="Explore algumas das soluções inovadoras que criamos para transformar negócios."
                    />
                </TitleWrapper>
                <CardsWrapper>
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
                </CardsWrapper>
            </PageWrapper>
        </MainWrapper>
    )
}
