export default function MainWrapper(props: { children: React.ReactNode }) {
    return (
        <main className="mx-auto flex h-dvh w-dvw max-w-[1500px] gap-16 p-4 pt-48 transition-all sm:pt-4 md:p-8 lg:p-16">
            {props.children}
        </main>
    )
}
