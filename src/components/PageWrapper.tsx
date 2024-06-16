import React from "react"

import cn from "@/utils/cn"

import Header from "./Header"
import ImageClip from "./ImageClip"
import { SocialLinks } from "./SideContent"
import { EmailButton, ScheduleButton } from "./DefaultButtons"
import DraggableScroll from "./DraggableScroll"

type PageWrapperProps = {
    children: React.ReactNode
    imgSrc: string
}

export default function PageWrapper(props: PageWrapperProps) {
    return (
        <div className="relative flex flex-1 overflow-hidden rounded-3xl">
            <div
                className={cn(
                    "absolute right-6 top-4 z-10 hidden w-[32%] max-w-[350px] xl:block",
                )}
            >
                <ScheduleButton className={cn("w-full px-8 py-6 text-xl")} />
            </div>
            <div className="relative flex flex-1 flex-col p-8 shadow-xl">
                <Header />
                <div className="z-10 mt-12 flex flex-col justify-between gap-8 md:mt-20 md:flex-row">
                    {props.children}
                </div>
            </div>
            <div
                className={cn(
                    "absolute bottom-4 left-0 right-0 z-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:px-8",
                    "xl:hidden",
                )}
            >
                <EmailButton
                    className={cn("w-2/3 sm:w-full md:py-6 md:text-lg")}
                />
                <ScheduleButton
                    className={cn("w-2/3 sm:w-full md:py-6 md:text-lg")}
                />
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
            {/* ! Normal */}
            <div className="hidden max-w-[360px] items-start gap-4 md:flex md:flex-col">
                {props.children}
            </div>
            {/* ! Scroll */}
            <DraggableScroll className="flex h-fit w-full max-w-[80vw] snap-x items-center gap-8 overflow-x-auto pb-4 md:hidden">
                {props.children}
            </DraggableScroll>
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
