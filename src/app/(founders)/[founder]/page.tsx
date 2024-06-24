import Link from "next/link"
import { Metadata } from "next"
import { Chip } from "@nextui-org/chip"
import { Button } from "@nextui-org/button"

import { ExistingFounders, Founders } from "@/data/founders"

import NotFound from "@/components/NotFound"

type FounderPageProps = {
    params: {
        founder: string
    }
}

export function generateStaticParams() {
    return ExistingFounders.map((founder) => ({
        founder,
    }))
}

export function generateMetadata(props: FounderPageProps): Metadata {
    const { founder } = props.params

    if (!ExistingFounders.includes(founder))
        return {
            title: "404 - Not Found",
            description: "Página não encontrada.",
        }

    const founderData = Founders[founder as keyof typeof Founders]

    return {
        title: `${founderData.name}`,
        description: founderData.description,
        icons: {
            icon: "/assets/logo_round.png",
        },
    }
}

export default function FounderPage(props: FounderPageProps) {
    const { founder } = props.params

    if (!ExistingFounders.includes(founder)) return <NotFound />

    const founderData = Founders[founder as keyof typeof Founders]

    return (
        <main className="mx-auto flex h-dvh w-dvw max-w-[500px] gap-16 p-16">
            <div className="flex w-full flex-col items-center gap-4">
                {/* eslint-disable-next-line */}
                <img
                    src={founderData.photo}
                    alt={founderData.name}
                    className="h-48 w-48 rounded-full object-cover"
                />
                <h1 className="text-4xl font-bold">{founderData.name}</h1>
                <Chip
                    color="primary"
                    variant="bordered"
                    className="pl-2 text-white"
                    startContent={
                        <div className="h-2 w-2 rounded-full bg-primary" />
                    }
                >
                    {founderData.role}
                </Chip>
                <div className="mx-auto text-center text-sm">
                    <p>{founderData.description}</p>
                </div>
                <div className="flex w-full flex-col gap-4">
                    {founderData.links.map((link) => (
                        <Button
                            as={Link}
                            color="primary"
                            className="w-full"
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {link.name}
                        </Button>
                    ))}
                </div>
            </div>
        </main>
    )
}
