/*=============================================== Video component ===============================================*/

// Import this component for lazyloading

/*==================== Imports ====================*/

import styled from "styled-components"
import { stringifyPx } from "js-utils-julseb"

import { objectFitType } from "../common-types"

/*==================== Types ====================*/

interface styleProps extends React.HTMLAttributes<HTMLVideoElement> {
    $width?: string | number
    $height?: string | number
    $fit?: objectFitType
    $aspectRatio?: string
}

/*==================== Component ====================*/

const Vid = styled.video<styleProps>`
    display: block;
    object-fit: ${({ $fit }) => $fit};
    width: ${({ $width }) => ($width ? stringifyPx($width) : "100%")};
    height: ${({ $height }) => ($height ? stringifyPx($height) : "auto")};
    aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
`

export default Vid
