import React from "react"

type PageTitleProps = {
    title: string
    description?: string
}

export default function PageTitle(props: PageTitleProps) {
    return (
        <div className="md:max-w-[360px] xl:mt-24">
            <h1 className="text-3xl font-bold leading-tight lg:text-[3rem]">
                {props.title}
            </h1>
            {props.description && (
                <p className="text-md font-light md:text-lg">
                    {props.description}
                </p>
            )}
        </div>
    )
}
