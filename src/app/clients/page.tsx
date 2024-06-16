import { Metadata } from "next"

import CardItem from "@/components/CardItem"
import PageTitle from "@/components/PageTitle"
import SideContent from "@/components/SideContent"
import PageWrapper, {
    CardsWrapper,
    TitleWrapper,
} from "@/components/PageWrapper"

import BgImage from "@/../public/bg-clients.png"

export const metadata: Metadata = {
    title: "Clientes",
    description: "Empresas que confiam na Velltri para inovar e crescer.",
}

export default function Clients() {
    return (
        <main className="mx-auto flex h-dvh w-dvw max-w-[1500px] gap-16 p-16">
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
        </main>
    )
}
