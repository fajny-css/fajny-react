/*=============================================== CardContainer ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled, { css } from "styled-components"
import { Link } from "react-router-dom"

import Variables from "./Variables"

/*==================== Component ====================*/

const CardContainer = ({ to, children, ...props }: props) => {
    return (
        <Container $to={to} as={to ? Link : "div"} to={to ? to : undefined} {...props}>
            {children}
        </Container>
    )
}

export default CardContainer

/*==================== Types ====================*/

interface styleProps extends React.HTMLAttributes<HTMLDivElement> {
    $to?: string
}

interface props extends React.HTMLAttributes<HTMLDivElement> {
    to?: string
}

/*==================== Styles ====================*/

const Container = styled.div<styleProps>`
    width: 100%;
    background-color: ${Variables.Colors.Background};
    border-radius: ${Variables.Radiuses.M};
    box-shadow: ${Variables.Shadows.M};
    overflow: hidden;

    ${({ $to }) =>
        $to &&
        css`
            color: currentColor;
            text-decoration: none;
            transition: ${Variables.Transitions.Short};

            p {
                font-weight: ${Variables.FontWeights.Regular};
            }

            &:hover {
                transform: scale(1.02);
                box-shadow: ${Variables.Shadows.XL};

                @media ${Variables.Breakpoints.Touch} {
                    transform: scale(1);
                    box-shadow: ${Variables.Shadows.M};
                }
            }
        `}
`
