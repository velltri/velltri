"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@nextui-org/button"
import { usePathname } from "next/navigation"
import { ScrollShadow } from "@nextui-org/scroll-shadow"

import cn from "@/utils/cn"

export default function Header() {
    const pathname = usePathname()
    return (
        <ScrollShadow
            orientation="horizontal"
            hideScrollBar
            className="z-10 mx-auto flex h-max min-h-[40px] w-full max-w-[65vw] sm:justify-center xl:mx-0 xl:max-w-[35vw] xl:justify-start"
        >
            <header className="flex gap-4">
                {Routes.map((route) => (
                    <HeaderButton
                        key={route.href}
                        text={route.text}
                        href={route.href}
                        active={pathname === route.href}
                    />
                ))}
            </header>
        </ScrollShadow>
    )
}

const Routes = [
    { href: "/", text: "Home" },
    { href: "/founders", text: "Quem Somos" },
    { href: "/projects", text: "Projetos" },
    // { href: "/clients", text: "Clientes" },
]

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
