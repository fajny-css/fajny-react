/*=============================================== SrOnly ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"

/*==================== Component ====================*/

const SrOnly = ({ children, as, ...props }: props) => (
    <Container as={as} {...props}>
        {children}
    </Container>
)

export default SrOnly

/*==================== Types ====================*/

interface props extends React.HTMLAttributes<HTMLDivElement> {
    children: string | React.ReactNode | React.ReactNode[]
    as?: any
}

/*==================== Styles ====================*/

const Container = styled.div`
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    clip-path: inset(50%) !important;
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;
`
