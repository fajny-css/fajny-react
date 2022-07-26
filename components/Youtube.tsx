/*=============================================== Youtube ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"
import { convertYoutube, stringifyPx } from "js-utils-julseb"

/*==================== Component ====================*/

const Youtube = ({ src, width, height, aspectRatio, ...props }: props) => (
    <Container
        src={convertYoutube(src)}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        $width={width}
        $height={height}
        $aspectRatio={aspectRatio}
        {...props}
    />
)

export default Youtube

/*==================== Types ====================*/

interface styleProps extends React.HTMLAttributes<HTMLIFrameElement> {
    $width?: string | number
    $height?: string | number
    $aspectRatio?: string
    frameborder?: string
    allowfullscreen?: boolean
}

interface props extends React.HTMLAttributes<HTMLIFrameElement> {
    src: string
    width?: string | number
    height?: string | number
    aspectRatio?: string
}

/*==================== Styles ====================*/

const Container = styled.iframe<styleProps>`
    width: ${({ $width }) => ($width ? stringifyPx($width) : "100%")};
    height: ${({ $height }) => $height};
    aspect-ratio: ${({ $aspectRatio, $height }) =>
        $aspectRatio ? $aspectRatio : !$height && !$aspectRatio ? "16/9" : ""};
`
