import Image from "next/image"

import CardItem from "@/components/CardItem"
import PageTitle from "@/components/PageTitle"
import MainWrapper from "@/components/MainWrapper"
import SideContent from "@/components/SideContent"
import Footer from '@/components/Footer';
import PageWrapper, {
    CardsWrapper,
    TitleWrapper,
} from "@/components/PageWrapper"

import BgImage from "@/../public/assets/bg-home.png"
import MSPartner from "@/../public/assets/ms-partner.png"

export default function Home() {
    return (
        <MainWrapper>
            <SideContent />
            <PageWrapper imgSrc={BgImage.src}>
                <TitleWrapper>
                    <PageTitle
                        title="Transforme seu Negócio com IA"
                        description="Criamos soluções inovadoras que impulsionam sua empresa para o futuro."
                    />
                </TitleWrapper>
                <CardsWrapper>
                    <div className="h-fit w-full min-w-[300px] snap-center md:min-w-0">
                        {/* eslint-disable-next-line */}
                        <img
                            src={MSPartner.src}
                            alt="Microsoft Partner"
                            className="max-h-full max-w-full shadow-lg"
                            height={336}
                        />
                    </div>
                    <CardItem
                        title="350k+"
                        description="Mais de 350 mil transações realizadas nos nossos servidores"
                    />
                    <Footer />  
                </CardsWrapper>
            </PageWrapper>
        </MainWrapper>
    )
}
