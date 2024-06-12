import React from "react"

type PageTitleProps = {
    title: string
    description?: string
}

export default function PageTitle(props: PageTitleProps) {
    return (
        <div className="max-w-[360px]">
            <h1 className="text-[3rem] font-bold leading-tight">
                {props.title}
            </h1>
            {props.description && (
                <p className="text-lg font-light">{props.description}</p>
            )}
        </div>
    )
}
