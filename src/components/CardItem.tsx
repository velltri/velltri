type CardItemProps = {
    title: string
    description: string | React.ReactNode
}

export default function CardItem(props: CardItemProps) {
    return (
        <div className="flex w-full min-w-[300px] flex-col gap-2 rounded-xl bg-white/10 p-8 shadow-lg backdrop-blur-lg">
            <h3 className="text-lg font-bold lg:text-2xl">{props.title}</h3>
            <p className="text-sm font-light lg:text-medium">
                {props.description}
            </p>
        </div>
    )
}
