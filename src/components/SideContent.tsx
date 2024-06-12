import Link from "next/link"
import Image from "next/image"
import { Button } from "@nextui-org/button"

import { FaGithub, FaLinkedin } from "react-icons/fa"

import Logo from "@/../public/logo.svg"

export default function SideContent() {
    return (
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
    )
}
