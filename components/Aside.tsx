/*=============================================== Aside ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"

import Variables from "./Variables"
import Mixins from "./Mixins"

/*==================== Component ====================*/

const Aside = ({ size, position, children, ...props }: props) => (
    <Container $size={size} $position={position} {...props}>
        {children}
    </Container>
)

export default Aside

/*==================== Types ====================*/

const sizes = {
    default: "default",
    small: "small",
} as const

type sizeTypes = keyof typeof sizes

const positions = {
    1: 1,
    2: 2,
    3: 3,
} as const

type positionsTypes = keyof typeof positions

interface styleProps extends React.HTMLAttributes<HTMLDivElement> {
    $size?: sizeTypes
    $position?: positionsTypes
}

interface props extends React.HTMLAttributes<HTMLDivElement> {
    size?: sizeTypes
    position?: positionsTypes
}

/*==================== Styles ====================*/

const Container = styled.aside<styleProps>`
    width: ${({ $size }) => ($size === "small" ? Variables.Layouts.Aside.Small : Variables.Layouts.Aside.Default)};
    ${Mixins.Grid({
        $alignContent: "start",
        $justifyItems: "start",
        $gap: "l",
        $padding: `${Variables.Spacers.XXL} 0`,
    })};
    min-height: 100vh;
    grid-column: ${({ $position }) => ($position === 2 ? 3 : $position === 3 ? 4 : 2)};

    @media ${Variables.Breakpoints.Tablet} {
        min-height: inherit;
        grid-column: 2;
    }

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
