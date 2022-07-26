/*=============================================== Image ===============================================*/

/*==================== Imports ====================*/

import React, { Suspense } from "react"
import styled from "styled-components"

import Variables from "../Variables"
import { P } from "../Font"
import Fallback from "../Fallback"

import { objectFitType } from "../common-types"

const Img = React.lazy(() => import("./Img"))

/*==================== Component ====================*/

const Image = ({ src, alt, width, height, fit, caption, ...props }: props) => {
    return (
        <Suspense fallback={<Fallback $width={width} $height={height} />}>
            {caption ? (
                <Container $width={width} $height={height} {...props}>
                    <Img src={src} alt={alt} $width={width} $height={height} $fit={fit} />

                    <Caption>{caption}</Caption>
                </Container>
            ) : (
                <Img src={src} alt={alt} $width={width} $height={height} $fit={fit} {...props} />
            )}
        </Suspense>
    )
}

export default Image

/*==================== Types ====================*/

interface styleProps extends React.HTMLAttributes<HTMLImageElement> {
    $width?: number | string
    $height?: number | string
}

interface props extends React.HTMLAttributes<HTMLImageElement> {
    width?: number | string
    height?: number | string
    fit?: objectFitType
    caption?: string
    src: string
    alt: string
}

/*==================== Styles ====================*/

const Container = styled.div<styleProps>`
    position: relative;
`

const Caption = styled(P)`
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: ${Variables.Overlays.Plain.Black80};
    padding: ${Variables.Spacers.M};
    color: ${Variables.Colors.White};
`
