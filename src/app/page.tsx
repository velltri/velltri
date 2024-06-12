import Link from "next/link"
import Image from "next/image"
import { Button } from "@nextui-org/button"

import { FaGithub, FaLinkedin } from "react-icons/fa"

import Header from "@/components/Header"
import PageTitle from "@/components/PageTitle"
import CardItem from "@/components/CardItem"

import Logo from "@/../public/logo.svg"
import BgHome from "@/../public/bg-home.png"
import MSPartner from "@/../public/ms-partner.png"

export default function Home() {
    return (
        <main className="mx-auto flex h-dvh w-dvw max-w-[1500px] gap-16 p-16">
            <div className="flex h-full flex-col justify-between">
                <div>
                    <Image src={Logo} alt="Velltri logo" />
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold">Entre em contato</h2>
                    <div className="flex flex-col gap-2">
                        <Link
                            className="underline"
                            href="mailto:contato@velltri.com"
                        >
                            contato@velltri.com
                        </Link>
                        <Link
                            className="underline"
                            href="https://api.whatsapp.com/send?phone=557399301800&text=Quero%20marcar%20uma%20reuni%C3%A3o%20com%20a%20Velltri"
                        >
                            (73) 9 9930-1800
                        </Link>
                        <div className="flex gap-4">
                            <Button
                                as={Link}
                                className="min-w-0 bg-white px-2 text-primary"
                                radius="full"
                                href="https://github.com/velltri"
                            >
                                <FaGithub size={24} />
                            </Button>
                            <Button
                                as={Link}
                                className="min-w-0 bg-white px-2 text-primary"
                                radius="full"
                                href="https://github.com/velltri"
                            >
                                <FaLinkedin size={24} />
                            </Button>
                        </div>
                    </div>
                </div>
                <div>
                    <Button
                        as={Link}
                        href="mailto:contato@velltri.com"
                        variant="bordered"
                        radius="full"
                        className="px-8 text-white"
                    >
                        Clique para enviar um email
                    </Button>
                </div>
            </div>
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
                        <div className="flex max-w-[330px] flex-1 flex-col gap-4">
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

                <div className="absolute h-full w-full flex-1 bg-black/10">
                    <Image
                        src={BgHome}
                        alt="Background"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
        </main>
    )
}
