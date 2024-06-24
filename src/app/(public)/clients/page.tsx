import { Metadata } from "next"

import CardItem from "@/components/CardItem"
import PageTitle from "@/components/PageTitle"
import MainWrapper from "@/components/MainWrapper"
import SideContent from "@/components/SideContent"
import PageWrapper, {
    CardsWrapper,
    TitleWrapper,
} from "@/components/PageWrapper"

import BgImage from "@/../public/assets/bg-clients.png"

export const metadata: Metadata = {
    title: "Clientes",
    description: "Empresas que confiam na Velltri para inovar e crescer.",
}

export default function Clients() {
    return (
        <MainWrapper>
            <SideContent />
            <PageWrapper imgSrc={BgImage.src}>
                <TitleWrapper>
                    <PageTitle
                        title="Parceiros de Sucesso"
                        description="Empresas que confiam na Velltri para inovar e crescer."
                    />
                </TitleWrapper>
                <CardsWrapper>
                    <CardItem title="Carregando..." description="" />
                </CardsWrapper>
            </PageWrapper>
        </MainWrapper>
    )
}
