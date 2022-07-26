/*=============================================== CardBasic ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"

import CardContainer from "./CardContainer"
import Variables from "./Variables"
import { H5, P } from "./Font"
import Mixins from "./Mixins"
import Icon from "./Icon"
import FajnyIcon from "./FajnyIcon"

import { fajnyIconsType } from "./common-types"

/*==================== Component ====================*/

const CardBasic = ({ title, children, to, orientation = "portrait", icon, fajnyIcon, ...props }: props) => {
    return (
        <Container to={to ? to : undefined} $orientation={orientation} {...props}>
            {icon && <Icon src={icon} size={48} color={Variables.Colors.Primary500} />}

            {fajnyIcon && <FajnyIcon name={fajnyIcon} size={48} color={Variables.Colors.Primary500} />}

            <Content $orientation={orientation}>
                <H5>{title}</H5>

                {children && <P>{children}</P>}
            </Content>
        </Container>
    )
}

export default CardBasic

/*==================== Types ====================*/

const orientation = {
    portrait: "portrait",
    landscape: "landscape",
} as const

type orientationTypes = keyof typeof orientation

interface styleProps extends React.HTMLAttributes<HTMLDivElement> {
    $orientation?: orientationTypes
}

interface baseProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string
    children?: string
    to?: string
    orientation?: orientationTypes
}

interface possible1 extends baseProps {
    icon?: string
    fajnyIcon?: never
}

interface possible2 extends baseProps {
    icon?: never
    fajnyIcon?: fajnyIconsType
}

type props = possible1 | possible2

/*==================== Styles ====================*/

const Container = styled(CardContainer)<styleProps>`
    padding: ${Variables.Spacers.S};
    ${({ $orientation }) =>
        Mixins.Flexbox({
            $align: "center",
            $justify: "center",
            $gap: "m",
            $direction: $orientation === "portrait" ? "column" : "row",
        })};
    text-align: ${({ $orientation }) => $orientation === "portrait" && "center"};
`

const Content = styled.span<styleProps>`
    ${Mixins.Grid({
        $gap: "xxs",
    })};
    flex-grow: ${({ $orientation }) => $orientation === "landscape" && 1};
`
