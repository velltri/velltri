import Image from "next/image"

import CardItem from "@/components/CardItem"
import PageTitle from "@/components/PageTitle"
import SideContent from "@/components/SideContent"
import PageWrapper, {
    CardsWrapper,
    TitleWrapper,
} from "@/components/PageWrapper"

import BgImage from "@/../public/bg-home.png"
import MSPartner from "@/../public/ms-partner.png"

export default function Home() {
    return (
        <main className="mx-auto flex h-dvh w-dvw max-w-[1500px] gap-16 p-16">
            <SideContent />
            <PageWrapper imgSrc={BgImage.src}>
                <TitleWrapper>
                    <PageTitle
                        title="Transforme seu Negócio com IA"
                        description="Criamos soluções inovadoras que impulsionam sua empresa para o futuro."
                    />
                </TitleWrapper>
                <CardsWrapper>
                    <div className="h-fit w-full min-w-[300px] md:min-w-0">
                        <Image
                            src={MSPartner}
                            alt="Microsoft Partner"
                            className="max-h-full max-w-full shadow-lg"
                            height={336}
                        />
                    </div>
                    <CardItem
                        title="350k+"
                        description="Mais de 350 mil transações realizadas nos nossos servidores"
                    />
                </CardsWrapper>
            </PageWrapper>
        </main>
    )
}
