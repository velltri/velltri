import React from "react"
import Link from "next/link"
import { Button } from "@nextui-org/button"

import cn from "@/utils/cn"

export default function Header() {
    return (
        <header className="z-10 flex gap-4">
            <HeaderButton href="/" text="Home" active />
            <HeaderButton href="/founders" text="Fundadores" />
            <HeaderButton href="/projects" text="Projetos" />
            <HeaderButton href="/clientes" text="Clientes" />
        </header>
    )
}

type HeaderButtonProps = {
    href: string
    text: string
    active?: boolean
}

function HeaderButton(props: HeaderButtonProps) {
    return (
        <Button
            as={Link}
            href={props.href}
            variant="bordered"
            radius="full"
            className={cn("px-8 text-white", {
                "border-primary bg-primary": props.active,
                "hover:bg-white/10": !props.active,
            })}
        >
            {props.text}
        </Button>
    )
}
