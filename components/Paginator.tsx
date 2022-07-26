/*=============================================== Paginator ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"

import Variables from "./Variables"
import Mixins from "./Mixins"
import Input from "./Input"
import Icon from "./Icon"
import FajnyIcon from "./FajnyIcon"

import { fajnyIconsType } from "./common-types"

/*==================== Component ====================*/

const Paginator = ({
    justify,
    textPage = "Page",
    textOf = "of",
    iconPrev,
    fajnyIconPrev = "chevron-left-solid",
    iconNext,
    fajnyIconNext = "chevron-right-solid",
    handlePrev,
    handleNext,
    handleChange,
    active,
    totalPages,
    idInput = "paginator",
    ...props
}: props) => {
    const activePage = active > totalPages ? totalPages : active < 1 ? 1 : active

    return (
        <Container $justify={justify}>
            {textPage} <StyledInput type="number" id={idInput} value={activePage} onChange={handleChange} {...props} />{" "}
            {`${textOf} ${totalPages}`}
            <Button onClick={handlePrev} disabled={activePage === 1 && true}>
                {iconPrev ? <Icon src={iconPrev} size={16} /> : <FajnyIcon name={fajnyIconPrev} size={16} />}
            </Button>
            <Button onClick={handleNext} disabled={activePage === totalPages && true}>
                {iconNext ? <Icon src={iconNext} size={16} /> : <FajnyIcon name={fajnyIconNext} size={16} />}
            </Button>
        </Container>
    )
}

export default Paginator

/*==================== Types ====================*/

const justify = {
    left: "left",
    right: "right",
} as const

type justifyTypes = keyof typeof justify

interface styleProps extends React.HTMLAttributes<HTMLDivElement> {
    $justify?: justifyTypes
}

interface baseProps extends React.HTMLAttributes<HTMLDivElement> {
    justify?: justifyTypes
    textPage?: string
    textOf?: string
    handlePrev: (e: React.MouseEvent<HTMLButtonElement>) => void
    handleNext: (e: React.MouseEvent<HTMLButtonElement>) => void
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    active: number
    totalPages: number
    idInput?: string
}

interface possible1 extends baseProps {
    iconPrev?: string
    fajnyIconPrev?: never

    iconNext?: string
    fajnyIconNext?: never
}

interface possible2 extends baseProps {
    iconPrev?: never
    fajnyIconPrev?: fajnyIconsType

    iconNext?: string
    fajnyIconNext?: never
}

interface possible3 extends baseProps {
    iconPrev?: string
    fajnyIconPrev?: never

    iconNext?: never
    fajnyIconNext?: fajnyIconsType
}

interface possible4 extends baseProps {
    iconPrev?: never
    fajnyIconPrev?: fajnyIconsType

    iconNext?: never
    fajnyIconNext?: fajnyIconsType
}

type props = possible1 | possible2 | possible3 | possible4

/*==================== Styles ====================*/

const Container = styled.div<styleProps>`
    ${({ $justify }) =>
        Mixins.Flexbox({
            $align: "center",
            $justify: $justify === "right" ? "flex-end" : "flex-start",
            $gap: "xs",
        })}
`

const StyledInput = styled(Input)`
    width: 48px;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`

const buttonSize = 24

const Button = styled.button`
    width: ${buttonSize}px;
    height: ${buttonSize}px;
    border-radius: ${Variables.Radiuses.Circle};
    padding: 0;
    ${Mixins.Flexbox({
        $align: "center",
        $justify: "center",
        $inline: true,
    })};
    border: none;
    background-color: transparent;
    color: ${Variables.Colors.Primary500};
    transition: ${Variables.Transitions.Short};

    &:not(:disabled):hover {
        background-color: ${Variables.Colors.Primary300};
        color: ${Variables.Colors.White};
    }

    &:not(:disabled):active {
        background-color: ${Variables.Colors.Primary600};
    }

    @media ${Variables.Breakpoints.Touch} {
        &:not(:disabled):hover,
        &:not(:disabled):active {
            background-color: transparent;
        }
    }

    &:disabled {
        color: ${Variables.Colors.Gray500};
    }
`
