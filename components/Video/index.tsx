/*=============================================== Video ===============================================*/

/*==================== Imports ====================*/

import React from "react"

import { objectFitType } from "../common-types"

const Vid = React.lazy(() => import("./Vid"))

/*==================== Component ====================*/

const Video = ({
    width,
    height,
    fit,
    aspectRatio,
    emptyText = "Your browser doesn't support the video tag.",
    autoPlay,
    muted,
    src,
    controls,
    ...props
}: props) => {
    return (
        <Vid
            $width={width}
            $height={height}
            $fit={fit}
            $aspectRatio={aspectRatio}
            autoPlay={autoPlay}
            muted={autoPlay ? true : autoPlay}
            controls={!autoPlay ? true : controls}
            {...props}
        >
            <source src={src} type="video/mp4" />

            {emptyText}
        </Vid>
    )
}

export default Video

/*==================== Types ====================*/

interface props extends React.HTMLAttributes<HTMLVideoElement> {
    width?: string | number
    height?: string | number
    fit?: objectFitType
    aspectRatio?: string
    emptyText?: string
    src: string
    autoPlay?: boolean
    muted?: boolean
    controls?: boolean
}
