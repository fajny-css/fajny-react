/*=============================================== Section ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"

import Mixins from "./Mixins"

/*==================== Component ====================*/

const Section = ({ gap, children, ...props }: props) => (
    <Container $gap={gap} {...props}>
        {children}
    </Container>
)

export default Section

/*==================== Types ====================*/

const sizes = {
    large: "large",
    medium: "medium",
    small: "small",
} as const

type sizesTypes = keyof typeof sizes

interface styleProps extends React.HTMLAttributes<HTMLDivElement> {
    $gap?: sizesTypes
}

interface props extends React.HTMLAttributes<HTMLDivElement> {
    gap?: sizesTypes
}

/*==================== Styles ====================*/

const Container = styled.section<styleProps>`
    ${({ $gap }) =>
        Mixins.Grid({
            $gap: $gap === "medium" ? "s" : $gap === "small" ? "xs" : "m",
        })};
    align-content: start;
    justify-items: start;

    & > div,
    & > h1,
    & > h2,
    & > h3,
    & > h4,
    & > h5,
    & > h6,
    & > p,
    & > ul,
    & > ol,
    & > dl,
    & > section,
    & > input,
    & > article,
    & > hr,
    & > pre,
    & > table,
    & > header,
    & > footer,
    & > iframe,
    & > nav,
    & > noscript,
    & > picture,
    & > select,
    & > textarea,
    & > form {
        justify-self: stretch;
    }
`
