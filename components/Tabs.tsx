/*=============================================== Tabs ===============================================*/

/*==================== Imports ====================*/

import React, { useState } from "react"
import styled from "styled-components"
import { v4 as uuid } from "uuid"

import Variables from "./Variables"
import { P } from "./Font"
import Mixins from "./Mixins"

/*==================== Component ====================*/

const Tabs = ({ items, active = 0 }: props) => {
    const [isActive, setIsActive] = useState(active)

    return (
        <Container>
            <ButtonsContainer>
                {items.map((item, i) => (
                    <Button $isActive={isActive === i} onClick={() => setIsActive(i)} key={uuid()}>
                        {item.title}
                    </Button>
                ))}
            </ButtonsContainer>

            {items.map((item, i) => (
                <TabItem as={typeof item.content === "string" ? P : "div"} $isActive={isActive === i}>
                    {item.content}
                </TabItem>
            ))}
        </Container>
    )
}

export default Tabs

/*==================== Types ====================*/

interface styleProps extends React.HTMLAttributes<HTMLDivElement> {
    $isActive: boolean
}

interface contentProps extends React.HTMLAttributes<HTMLDivElement> {
    $isActive: boolean
}

interface props extends React.HTMLAttributes<HTMLDivElement> {
    items: {
        title: string
        content: string | React.ReactNode
    }[]
    active?: number
}

/*==================== Styles ====================*/

const Container = styled.div`
    ${Mixins.Grid({
        $gap: "xs",
    })};
`

const ButtonsContainer = styled.div`
    position: relative;
    ${Mixins.Flexbox({
        $align: "center",
        $justify: "flex-start",
        $gap: "m",
        $wrap: "wrap",
    })};
    
    &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: ${Variables.Colors.Gray200};
        z-index: 0;
    }

    @media ${Variables.Breakpoints.Mobile} {
        flex-direction: column;
    }
`

const Button = styled.button<styleProps>`
    border: none;
    padding: 0;
    min-width: 100px;
    text-align: left;
    background-color: transparent;
    padding-bottom: ${Variables.Spacers.XXS};
    border-bottom: 2px solid ${({ $isActive }) => ($isActive ? Variables.Colors.Primary500 : "transparent")};
    position: relative;
    z-index: 2;

    @media ${Variables.Breakpoints.Mobile} {
        width: 100%;
    }

    &.button-active {
        border-bottom-color: ${Variables.Colors.Primary50}0;
    }
`

const TabItem = styled.div<contentProps>`
    display: ${({ $isActive }) => $isActive ? "inherit" : "none"};
`
