import Link from "next/link"
import { Button, ButtonProps } from "@nextui-org/button"

import { FaCalendar, FaEnvelope } from "react-icons/fa"

import cn from "@/utils/cn"

export function EmailButton(props: ButtonProps) {
    return (
        <Button
            as={Link}
            href="mailto:contato@velltri.com"
            variant="bordered"
            radius="full"
            className={cn(
                "text-white hover:border-primary hover:bg-primary",
                props.className,
            )}
        >
            <FaEnvelope />
            Enviar email
        </Button>
    )
}

export function ScheduleButton(props: ButtonProps) {
    return (
        <Button
            as={Link}
            href="mailto:contato@velltri.com"
            variant="bordered"
            radius="full"
            className={cn(
                "text-white hover:border-primary hover:bg-primary",
                props.className,
            )}
        >
            <FaCalendar />
            Agendar reunião
        </Button>
    )
}
