import Link from "next/link"

import { FaExternalLinkAlt } from "react-icons/fa"

type CardItemProps = {
    title: string
    description: string | React.ReactNode
    href?: string
}

export default function CardItem(props: CardItemProps) {
    const content = (
        <div className="z-20 flex w-full min-w-[300px] snap-center flex-col gap-2 rounded-xl bg-white/10 p-8 shadow-lg backdrop-blur-lg">
            <h3 className="text-lg font-bold lg:text-2xl">{props.title}</h3>
            <p className="text-sm font-light lg:text-medium">
                {props.description}
            </p>
        </div>
    )

    return props.href ? (
        <Link
            href={props.href}
            className="relative rounded-xl shadow-white backdrop-blur-lg transition-all hover:bg-white/5 hover:shadow-xl"
        >
            {content}

            <FaExternalLinkAlt className="absolute right-4 top-4 z-10" />
            <div className="absolute right-0 top-0 -z-20 h-8 w-8 rounded-tr-lg border-2 border-b-0 border-l-0 border-white" />
        </Link>
    ) : (
        content
    )
}
