"use client"

import { ComponentProps, useRef } from "react"
import { useDraggable } from "react-use-draggable-scroll"

export default function DraggableScroll(props: ComponentProps<"div">) {
    const ref =
        useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>
    const { events } = useDraggable(ref, {
        applyRubberBandEffect: true,
    })

    return (
        <div {...props} {...events} ref={ref}>
            {props.children}
        </div>
    )
}
