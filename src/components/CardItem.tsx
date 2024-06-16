import Link from "next/link"

import { FaExternalLinkAlt } from "react-icons/fa"

type CardItemProps = {
    title: string
    description: string | React.ReactNode
    href?: string
}

export default function CardItem(props: CardItemProps) {
    const content = (
        <div className="flex w-full min-w-[300px] flex-col gap-2 rounded-xl bg-white/10 p-8 shadow-lg backdrop-blur-lg">
            <h3 className="text-lg font-bold lg:text-2xl">{props.title}</h3>
            <p className="text-sm font-light lg:text-medium">
                {props.description}
            </p>
        </div>
    )

    return props.href ? (
        <Link
            href={props.href}
            className="relative rounded-xl shadow-white transition-all hover:bg-white/10 hover:shadow-xl"
        >
            <FaExternalLinkAlt className="absolute right-4 top-4 z-10" />
            <div className="absolute right-1 top-1 h-4 w-4 rounded-2xl bg-white" />

            {content}
        </Link>
    ) : (
        content
    )
}
