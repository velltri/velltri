"use client"

import { useWindowSize } from "@uidotdev/usehooks"

export default function ImageClip({ src }: { src: string }) {
    const { width } = useWindowSize()

    const isDesktop = width ? width > 1280 : true

    if (isDesktop) {
        return (
            <div className="relative h-full w-full overflow-hidden">
                <svg className="absolute h-full w-full">
                    <defs>
                        <clipPath
                            id="clip-path"
                            clipPathUnits="objectBoundingBox"
                        >
                            <path
                                d="M0 0.0787C0 0.0352 0.0352 0 0.0787 0H0.5778C0.6025 0 0.6219 0.0227 0.6219 0.0511V0.0511C0.6219 0.0787 0.6413 0.1014 0.666 0.1014H0.9311C0.9746 0.1014 1 0.1366 1 0.1799V0.9213C1 0.9648 0.9648 1 0.9213 1H0.2314C0.2077 1 0.1883 0.9773 0.1883 0.9489V0.9489C0.1883 0.9213 0.1689 0.8986 0.1442 0.8986H0.0787C0.0352 0.8986 0 0.8634 0 0.8199V0.0787Z"
                                fill="#D9D9D9"
                            />
                        </clipPath>
                    </defs>
                    <image
                        href={src}
                        width="100%"
                        height="100%"
                        clipPath="url(#clip-path)"
                        preserveAspectRatio="xMidYMid slice"
                    />
                </svg>
            </div>
        )
    }

    return (
        <div className="relative h-full w-full overflow-hidden">
            <div className="h-full w-full">
                {/* eslint-disable-next-line */}
                <img src={src} className="h-full w-full object-cover" />
            </div>
        </div>
    )
}
