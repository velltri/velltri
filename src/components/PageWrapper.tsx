import React from "react"
import ImageClip from "./ImageClip"
import Header from "./Header"
import { SocialLinks } from "./SideContent"
import { ScrollShadow } from "@nextui-org/scroll-shadow"

type PageWrapperProps = {
    children: React.ReactNode
    imgSrc: string
}

export default function PageWrapper(props: PageWrapperProps) {
    return (
        <div className="relative flex flex-1 overflow-hidden rounded-3xl">
            <div className="relative flex flex-1 flex-col p-8 shadow-xl">
                <Header />
                <div className="z-10 mt-20 flex flex-col justify-between gap-8 md:flex-row">
                    {props.children}
                </div>
            </div>
            <div className="absolute h-full w-full">
                <ImageClip src={props.imgSrc} />
            </div>
        </div>
    )
}

export function CardsWrapper(props: { children: React.ReactNode }) {
    return (
        <>
            <div className="mt-16 hidden max-w-[360px] items-start gap-4 md:flex md:flex-col">
                {props.children}
            </div>
            <ScrollShadow className="h-fit w-full md:hidden">
                <div className="mt-16 hidden max-w-[360px] items-start gap-8 md:flex md:flex-col">
                    {props.children}
                </div>
            </ScrollShadow>
        </>
    )
}

export function TitleWrapper(props: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col gap-4">
            <div>{props.children}</div>
            <SocialLinks />
        </div>
    )
}
