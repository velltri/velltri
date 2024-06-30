"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

export default function TiltElement({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseXSpring = useSpring(x)
    const mouseYSpring = useSpring(y)

    const rotateX = useTransform(
        mouseYSpring,
        [-0.5, 0.5],
        ["17.5deg", "-17.5deg"],
    )
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["5deg", "-5deg"])

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        const rect = e.currentTarget.getBoundingClientRect()

        const width = rect.width
        const height = rect.height

        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top

        const xPercent = mouseX / width - 0.5
        const yPercent = mouseY / height - 0.5

        x.set(xPercent)
        y.set(yPercent)
    }

    return (
        <motion.div
            className={className}
            onMouseMove={handleMouseMove}
            style={{
                transformStyle: "preserve-3d",
                rotateX,
                rotateY,
            }}
        >
            {children}
        </motion.div>
    )
}
