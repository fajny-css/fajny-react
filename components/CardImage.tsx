/*=============================================== CardImage ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled, { css } from "styled-components"

import Variables from "./Variables"
import { H5 } from "./Font"
import Mixins from "./Mixins"
import CardContainer from "./CardContainer"
import Image from "./Image"
import Icon from "./Icon"
import FajnyIcon from "./FajnyIcon"

import { fajnyIconsType } from "./common-types"

/*==================== Component ====================*/

const CardImage = ({ title, src, alt, to, icon, fajnyIcon, ...props }: props) => {
    return (
        <Container to={to ? to : undefined} {...props}>
            <Img src={src} alt={alt} width="100%" height="100%" fit="cover" />

            {icon && <StyledIcon src={icon} size={48} />}

            {fajnyIcon && <StyledFajnyIcon name={fajnyIcon} size={48} />}

            <Title>{title}</Title>
        </Container>
    )
}

export default CardImage

/*==================== Types ====================*/

interface baseProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string
    src: string
    alt: string
    to?: string
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

const Img = styled(Image)`
    position: absolute;
    top: 0;
    left: 0;
`

const Title = styled(H5)`
    color: ${Variables.Colors.White};
    width: 100%;
    height: 100%;
    ${Mixins.Flexbox({
        $align: "flex-start",
        $justify: "flex-end",
        $direction: "column",
    })};
    padding: ${Variables.Spacers.S};
    aspect-ratio: 16/9;
`

const IconStyles = css`
    position: absolute;
    z-index: 2;
    color: ${Variables.Colors.White};
    top: calc(50% - 48px / 2);
    left: calc(50% - 48px / 2);
`

const StyledIcon = styled(Icon)`
    ${IconStyles}
`

const StyledFajnyIcon = styled(FajnyIcon)`
    ${IconStyles}
`

const Container = styled(CardContainer)`
    position: relative;
    aspect-ratio: 16/9;

    &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1;
        background-color: ${Variables.Overlays.Plain.Black50};
    }

    ${Img} {
        z-index: 0;
    }

    ${Title} {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 3;
    }
`
