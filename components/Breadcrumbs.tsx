/*=============================================== Breadcrumbs ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import { Link } from "react-router-dom"
import styled, { css } from "styled-components"
import { v4 as uuid } from "uuid"

import Variables from "./Variables"
import Mixins from "./Mixins"
import FajnyIcon from "./FajnyIcon"
import { P } from "./Font"

import { colorsHoverType } from "./common-types"

/*==================== Component ====================*/

const Breadcrumbs = ({ items, separator = "slash", color = "primary", ...props }: props) => {
    return (
        <Container $color={color} {...props}>
            {items.map(({ text, to }) => (
                <Item as={to ? Link : "span"} to={to ? to : undefined} key={uuid()}>
                    {text}

                    {to && (
                        <Separator $color={color}>
                            {separator === "icon" ? (
                                <FajnyIcon name="chevron-right-solid" size={12} />
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

interface styleProps {
    $color?: colorsHoverType
}

interface props extends React.HTMLAttributes<HTMLParagraphElement> {
    separator?: "slash" | "icon"
    items: item[]
    color?: colorsHoverType
}

/*==================== Styles ====================*/

const Container = styled(P)<styleProps>`
    ${Mixins.Flexbox({
        $align: "center",
        $justify: "flex-start",
        $wrap: "wrap",
        $gap: "xxs",
    })};

    ${({ $color }) =>
        $color &&
        css`
            color: ${$color === "white" ? Variables.Colors.White : Variables.Colors.Black};

            a {
                color: ${Mixins.ColorsHoverDefault};

                @media ${Variables.Breakpoints.Hover} {
                    &:hover {
                        color: ${Mixins.ColorsHoverHover};
                    }

                    &:active {
                        color: ${Mixins.ColorsHoverActive};
                    }
                }
            }
        `}
`

const Separator = styled.span<styleProps>`
    color: ${({ $color }) => ($color === "white" ? Variables.Colors.White : Variables.Colors.Black)};
    margin-left: ${Variables.Spacers.XXS};
    position: relative;
`

const Item = styled.span`
    @media ${Variables.Breakpoints.Hover} {
        &:hover ${Separator}, &:active ${Separator} {
            color: ${Variables.Colors.Black};
        }
    }
`
