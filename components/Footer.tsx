/*=============================================== Footer ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled, { css } from "styled-components"

import Variables from "./Variables"
import { P } from "./Font"
import Mixins from "./Mixins"
import Image from "./Image"

import { RequireAtLeastOne } from "./RequireAtLeastOne"

/*==================== Component ====================*/

const Footer = ({ separator, children, logoImg, logoAlt = "Logo", logoText, ...props }: props) => {
    return (
        <Container $separator={separator} {...props}>
            {logoImg ? (
                <LogoImg src={logoImg} alt={logoAlt} width={100} height={32} fit="contain" />
            ) : (
                <P>{logoText}</P>
            )}

            <FooterLinks>{children}</FooterLinks>
        </Container>
    )
}

export default Footer

/*==================== Types ====================*/

interface styleProps extends React.HTMLAttributes<HTMLDivElement> {
    $separator?: boolean
}

interface baseProps extends React.HTMLAttributes<HTMLDivElement> {
    separator?: boolean
    children: React.ReactNode | React.ReactNode[] | string
    logoImg?: string
    logoAlt?: string
    logoText?: string
}

type props = RequireAtLeastOne<baseProps, "logoImg" | "logoText">

/*==================== Styles ====================*/

const Container = styled.footer<styleProps>`
    width: 100%;
    position: relative;
    z-index: 10;
    background-color: ${Variables.Colors.Background};
    ${Mixins.Flexbox({
        $align: "center",
        $justify: "space-between",
    })};
    padding: ${Variables.Spacers.L} 5%;

    a,
    button {
        color: ${Variables.Colors.Primary500};
        text-decoration: none;
        border: none;
        padding: 0;
        background-color: transparent;

        &:hover {
            color: ${Variables.Colors.Primary300};
        }

        &:active {
            color: ${Variables.Colors.Primary600};
        }
    }

    @media ${Variables.Breakpoints.Mobile} {
        flex-direction: column;
        gap: ${Variables.Spacers.L};
    }

    ${({ $separator }) =>
        $separator &&
        css`
            padding-top: ${Variables.Spacers.XXL};

            &:before {
                content: "";
                width: calc(100% - 10%);
                height: 1px;
                position: absolute;
                top: ${Variables.Spacers.L};
                left: 5%;
                background-color: ${Variables.Colors.Gray200};
            }
        `}
`

const LogoImg = styled(Image)`
    object-position: left center;
`

const FooterLinks = styled.div`
    ${Mixins.Flexbox({
        $align: "center",
        $justify: "flex-start",
        $gap: "xs",
        $wrap: "wrap",
    })};

    & > *:not(:last-child):after {
        content: "•";
        color: ${Variables.Colors.Black};
        margin-left: ${Variables.Spacers.XS};
        font-size: 12px;
        position: relative;
        top: -2px;
    }

    @media ${Variables.Breakpoints.Mobile} {
        justify-content: center;
        align-items: center;
    }
`
