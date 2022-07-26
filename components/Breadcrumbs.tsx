/*=============================================== Breadcrumbs ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { v4 as uuid } from "uuid"

import Variables from "./Variables"
import Mixins from "./Mixins"
import FajnyIcon from "./FajnyIcon"
import { P } from "./Font"

/*==================== Component ====================*/

const Breadcrumbs = ({ items, separator = "slash", ...props }: props) => {
    return (
        <Container {...props}>
            {items.map(({ text, to }) => (
                <Item as={to ? Link : "span"} to={to ? to : undefined} key={uuid()}>
                    {text}

                    {to && (
                        <Separator>
                            {separator === "icon" ? (
                                <FajnyIcon name="chevron-right-solid" size={12} color={Variables.Colors.Black} />
                            ) : (
                                "/"
                            )}
                        </Separator>
                    )}
                </Item>
            ))}
        </Container>
    )
}

export default Breadcrumbs

/*==================== Types ====================*/

type item = {
    to?: string
    text: string
}

interface props extends React.HTMLAttributes<HTMLParagraphElement> {
    separator?: "slash" | "icon"
    items: item[]
}

/*==================== Styles ====================*/

const Container = styled(P)`
    ${Mixins.Flexbox({
        $align: "center",
        $justify: "flex-start",
        $wrap: "wrap",
        $gap: "xxs",
    })}
`

const Separator = styled.span`
    color: ${Variables.Colors.Black};
    margin-left: ${Variables.Spacers.XXS};
    position: relative;
`

const Item = styled.span`
    &:hover ${Separator}, &:active ${Separator} {
        color: ${Variables.Colors.Black};
    }
`
