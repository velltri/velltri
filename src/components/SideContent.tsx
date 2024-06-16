import Link from "next/link"
import Image from "next/image"
import { Button } from "@nextui-org/button"

import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"

import cn from "@/utils/cn"

import Logo from "@/../public/logo.svg"
import { EmailButton } from "./DefaultButtons"

export default function SideContent() {
    return (
        <div className="relative hidden h-full flex-col justify-between xl:flex">
            <div>
                <Image src={Logo} alt="Velltri logo" />
            </div>
            <SocialLinks alwaysShow />
            <div></div>
            <div className="absolute bottom-4 z-10 w-[35vw] max-w-[500px]">
                <EmailButton className={cn("w-full px-8 py-6 text-xl")} />
            </div>
        </div>
    )
}

export function SocialLinks(props: { alwaysShow?: boolean }) {
    return (
        <div
            className={cn(
                "flex-col gap-4",
                props.alwaysShow ? "flex" : "flex xl:hidden",
            )}
        >
            <h2 className="text-medium font-medium lg:text-2xl lg:font-bold">
                Entre em contato
            </h2>
            <div className="flex gap-4">
                <SocialLinkButton href="https://github.com/velltri">
                    <FaGithub size={24} />
                </SocialLinkButton>
                <SocialLinkButton href="https://www.linkedin.com/company/velltri">
                    <FaLinkedin size={24} />
                </SocialLinkButton>
                <SocialLinkButton href="https://api.whatsapp.com/send?phone=557399301800&text=Quero%20marcar%20uma%20reuni%C3%A3o%20com%20a%20Velltri">
                    <FaWhatsapp size={24} />
                </SocialLinkButton>
                <SocialLinkButton href="mailto:contato@velltri.com">
                    <FaEnvelope size={24} />
                </SocialLinkButton>
            </div>
        </div>
    )
}

export function SocialLinkButton(props: {
    href: string
    children: React.ReactNode
}) {
    return (
        <Button
            as={Link}
            className="min-w-0 bg-white px-2 text-foreground hover:bg-primary hover:text-white"
            radius="full"
            href={props.href}
        >
            {props.children}
        </Button>
    )
}
