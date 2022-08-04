/*=============================================== Pagination ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled, { css } from "styled-components"

import Variables from "./Variables"
import Mixins from "./Mixins"
import FajnyIcon from "./FajnyIcon"
import Icon from "./Icon"

import { RequireAtLeastOne } from "./RequireAtLeastOne"
import { fajnyIconsType } from "./common-types"

/*==================== Component ====================*/

const Pagination = ({ justify = "left", children, ...props }: props) => (
    <Container $justify={justify} {...props}>
        {children}
    </Container>
)

const PaginationButton = ({
    number,
    more,
    prev,
    next,
    iconPrev,
    fajnyIconPrev = "chevron-left-solid",
    iconNext,
    fajnyIconNext = "chevron-right-solid",
    active,
    disabled,
    ...props
}: buttonProps) => (
    <Button as={more ? "span" : "button"} $active={active} $more={more} disabled={disabled} {...props}>
        {more ? (
            "..."
        ) : (prev && iconPrev) || (next && iconNext) ? (
            <Icon src={iconPrev ? iconPrev : iconNext ? iconNext : ""} size={16} />
        ) : prev || next ? (
            <FajnyIcon name={prev ? fajnyIconPrev : fajnyIconNext} size={16} />
        ) : (
            number
        )}
    </Button>
)

export { Pagination, PaginationButton }

/*==================== Types ====================*/

const justify = {
    left: "left",
    center: "center",
    right: "right",
} as const

type justifyTypes = keyof typeof justify

interface styleProps extends React.HTMLAttributes<HTMLDivElement> {
    $justify?: justifyTypes
}

interface props extends React.HTMLAttributes<HTMLDivElement> {
    justify: justifyTypes
}

interface buttonStyleProps extends React.HTMLAttributes<HTMLButtonElement> {
    $active?: boolean
    $more?: boolean
}

interface baseButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    number?: number
    more?: boolean
    active?: boolean
    prev?: boolean
    next?: boolean
    disabled?: boolean
}

interface possible1 extends baseButtonProps {
    iconPrev?: string
    fajnyIconPrev?: never
    iconNext?: string
    fajnyIconNext?: never
}

interface possible2 extends baseButtonProps {
    iconPrev?: never
    fajnyIconPrev?: fajnyIconsType
    iconNext?: string
    fajnyIconNext?: never
}

interface possible3 extends baseButtonProps {
    iconPrev?: fajnyIconsType
    fajnyIconPrev?: never
    iconNext?: never
    fajnyIconNext?: fajnyIconsType
}

interface possible4 extends baseButtonProps {
    iconPrev?: never
    fajnyIconPrev?: fajnyIconsType
    iconNext?: never
    fajnyIconNext?: fajnyIconsType
}

type possibleProps = possible1 | possible2 | possible3 | possible4

type buttonProps = RequireAtLeastOne<possibleProps, "number" | "more" | "prev" | "next">

/*==================== Styles ====================*/

const Container = styled.div<styleProps>`
    ${({ $justify }) =>
        Mixins.Flexbox({
            $align: "center",
            $justify: $justify === "center" ? "center" : $justify === "right" ? "flex-end" : "flex-start",
            $gap: "xs",
        })};
`

const Button = styled.button<buttonStyleProps>`
    --button-size: 32px;
    width: var(--button-size);
    height: var(--button-size);
    border-radius: ${Variables.Radiuses.Circle};
    border: none;
    ${Mixins.Flexbox({
        $align: "center",
        $justify: "center",
        $inline: true,
    })};
    color: ${({ $active }) => ($active ? Variables.Colors.White : Variables.Colors.Primary500)};
    background-color: ${({ $active }) => ($active ? Variables.Colors.Primary500 : "transparent")};

    ${({ $more, disabled }) =>
        !$more &&
        !disabled &&
        css`
            transition: ${Variables.Transitions.Short};

            @media ${Variables.Breakpoints.Hover} {
                &:hover {
                    background-color: ${Variables.Colors.Primary300};
                    color: ${Variables.Colors.White};
                }

                &:active {
                    background-color: ${Variables.Colors.Primary600};
                }
            }
        `}

    &:disabled {
        color: ${Variables.Colors.Gray500};
    }

    @media ${Variables.Breakpoints.Mobile} {
        --button-size: 24px;
    }
`
