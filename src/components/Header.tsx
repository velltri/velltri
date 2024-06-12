"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@nextui-org/button"
import { usePathname } from "next/navigation"

import cn from "@/utils/cn"

export default function Header() {
    const pathname = usePathname()
    return (
        <header className="z-10 flex gap-4">
            {Routes.map((route) => (
                <HeaderButton
                    key={route.href}
                    text={route.text}
                    href={route.href}
                    active={pathname === route.href}
                />
            ))}
        </header>
    )
}

const Routes = [
    { href: "/", text: "Home" },
    { href: "/founders", text: "Fundadores" },
    { href: "/projects", text: "Projetos" },
    { href: "/clients", text: "Clientes" },
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
