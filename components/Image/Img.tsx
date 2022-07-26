/*=============================================== Image component ===============================================*/

// Import this component for lazyloading

/*==================== Imports ====================*/

import styled from "styled-components"
import { stringifyPx } from "js-utils-julseb"

import { objectFitType } from "../common-types"

/*==================== Types ====================*/

interface styleProps extends React.HTMLAttributes<HTMLImageElement> {
    $width?: number | string
    $height?: number | string
    $fit?: objectFitType
}

/*==================== Component ====================*/

const Img = styled.img<styleProps>`
    display: block;
    position: relative;
    z-index: 0;
    width: ${({ $width }) => ($width ? stringifyPx($width) : "100%")};
    height: ${({ $height }) => ($height ? stringifyPx($height) : "auto")};
    object-fit: ${({ $fit }) => $fit};
`

export default Img
