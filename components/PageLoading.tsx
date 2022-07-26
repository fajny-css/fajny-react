/*=============================================== PageLoading ===============================================*/

/*==================== Imports ====================*/

import React, { useEffect } from "react"
import styled from "styled-components"

import Mixins from "./Mixins"
import Loader from "./Loader"

import { colorsShortType } from "./common-types"

/*==================== Component ====================*/

const PageLoading = ({ color = "primary", ...props }: props) => {
    useEffect(() => document.body.classList.add("stop-scrolling"))

    return (
        <Container $color={color} {...props}>
            <Loader size="xxl" color={color === "white" ? "primary" : "white"} />
        </Container>
    )
}

export default PageLoading

/*==================== Types ====================*/

interface styleProps extends React.HTMLAttributes<HTMLDivElement> {
    $color?: colorsShortType
}

interface props extends React.HTMLAttributes<HTMLDivElement> {
    color?: colorsShortType
}

/*==================== Styles ====================*/

const Container = styled.div<styleProps>`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: ${Mixins.ColorsShort};
    ${Mixins.Flexbox({
        $align: "center",
        $justify: "center",
    })};
`
