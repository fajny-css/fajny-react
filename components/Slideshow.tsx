/*=============================================== Slideshow ===============================================*/

/*==================== Imports ====================*/

import React, { useEffect, useState, useCallback } from "react"
import styled from "styled-components"
import { v4 as uuid } from "uuid"

import Variables from "./Variables"
import Mixins from "./Mixins"
import Icon from "./Icon"
import FajnyIcon from "./FajnyIcon"

import { fajnyIconsType } from "./common-types"

/*==================== Component ====================*/

const SlideshowButton = ({
    onClick,
    iconPrev,
    fajnyIconPrev = "chevron-left-solid",
    iconNext,
    fajnyIconNext = "chevron-right-solid",
    prev,
    next,
    position,
}: buttonProps) => {
    return (
        <Button onClick={onClick} $position={position}>
            {prev && (iconPrev ? <Icon src={iconPrev} size={24} /> : <FajnyIcon name={fajnyIconPrev} size={24} />)}

            {next && (iconNext ? <Icon src={iconNext} size={24} /> : <FajnyIcon name={fajnyIconNext} size={24} />)}
        </Button>
    )
}

const Slideshow = ({
    children,
    controls,
    pagination,
    iconPrev,
    fajnyIconPrev,
    iconNext,
    fajnyIconNext,
    autoplay,
}: props) => {
    const [active, setActive] = useState(0)
    const length = children.length

    const handlePrev = () => setActive(active > 0 ? active - 1 : length - 1)
    const handleNext = () => setActive(active < length - 1 ? active + 1 : 0)

    const autoSlideshow = useCallback(() => {
        setActive(active < length - 1 ? active + 1 : 0)
    }, [active, length])

    useEffect(() => {
        if (!controls && !pagination && !autoplay) {
            setInterval(() => autoSlideshow(), 1000)
        } else if (autoplay) {
            setInterval(() => autoSlideshow(), autoplay)
        }
    }, [autoplay, autoSlideshow, controls, pagination])

    return (
        <Container>
            {controls && (
                <SlideshowButton
                    onClick={handlePrev}
                    prev
                    iconPrev={iconPrev}
                    fajnyIconPrev={fajnyIconPrev}
                    position="left"
                />
            )}

            <Slides>
                <Slide $active={active}>{children}</Slide>
            </Slides>

            {controls && (
                <SlideshowButton
                    onClick={handleNext}
                    next
                    iconNext={iconNext}
                    fajnyIconPrev={fajnyIconNext}
                    position="right"
                />
            )}

            {pagination && (
                <Pagination>
                    {children.map((_, i) => (
                        <PaginationItem
                            onClick={() => setActive(i)}
                            $active={active === i ? true : false}
                            key={uuid()}
                        />
                    ))}
                </Pagination>
            )}
        </Container>
    )
}

export default Slideshow

/*==================== Types ====================*/

const positions = {
    left: "left",
    right: "right",
} as const

type positionsTypes = keyof typeof positions

export interface slideStyleProps extends React.HTMLAttributes<HTMLDivElement> {
    $active: number
}

export interface paginationStyleProps extends React.HTMLAttributes<HTMLSpanElement> {
    $active: boolean
}

export interface buttonStyleProps extends React.HTMLAttributes<HTMLButtonElement> {
    $position: positionsTypes
}

export interface buttonProps extends React.HTMLAttributes<HTMLButtonElement> {
    iconPrev?: string
    fajnyIconPrev?: fajnyIconsType
    iconNext?: string
    fajnyIconNext?: fajnyIconsType
    prev?: boolean
    next?: boolean
    position: "left" | "right"
}

export interface baseProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode[]
    controls?: boolean
    pagination?: boolean
    iconPrev?: string
    fajnyIconPrev?: fajnyIconsType
    iconNext?: string
    fajnyIconNext?: fajnyIconsType
    autoplay?: number
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

const Container = styled.div`
    ${Mixins.Grid({
        $gap: "xs",
        $alignItems: "start",
    })};
    width: 100%;
    position: relative;
`

const Slides = styled.div`
    ${Mixins.Flexbox({
        $direction: "column",
    })};
    width: 100%;
    height: 60vh;
    position: relative;
    overflow: hidden;
    z-index: 1;
`

const Slide = styled.div<slideStyleProps>`
    transition: ${Variables.Transitions.Long};
    -ms-overflow-style: none;
    scrollbar-width: none;
    width: 100%;
    transform: translateX(${({ $active }) => `-${$active * 100}%`});
    height: 100%;
    display: flex;

    &::-webkit-scrollbar {
        display: none;
    }

    & > * {
        width: 100%;
        height: 100%;
        flex-shrink: 0;
        flex-grow: 1;
    }

    img {
        object-fit: cover;
    }
`

const buttonSize = 32

const Button = styled.button<buttonStyleProps>`
    width: ${buttonSize}px;
    height: ${buttonSize}px;
    border-radius: ${Variables.Radiuses.Circle};
    padding: 0;
    border: none;
    position: absolute;
    top: calc(50% - ${buttonSize}px / 2);
    left: ${({ $position }) => $position === "left" && Variables.Spacers.XS};
    right: ${({ $position }) => $position === "right" && Variables.Spacers.XS};
    ${Mixins.Flexbox({
        $align: "center",
        $justify: "center",
    })};
    color: ${Variables.Colors.White};
    background-color: ${Variables.Colors.Primary500};
    z-index: 2;

    @media ${Variables.Breakpoints.Hover} {
        &:hover {
            background-color: ${Variables.Colors.Primary300};
        }

        &:active {
            background-color: ${Variables.Colors.Primary600};
        }
    }
`

const Pagination = styled.div`
    ${Mixins.Flexbox({
        $align: "center",
        $justify: "center",
        $gap: "xs",
    })};
`

const paginationItemSize = 8

const PaginationItem = styled.span<paginationStyleProps>`
    width: ${paginationItemSize}px;
    height: ${paginationItemSize}px;
    background-color: ${({ $active }) => ($active ? Variables.Colors.Primary500 : Variables.Colors.Primary300)};
    border-radius: ${Variables.Radiuses.Circle};
    cursor: pointer;
    transition: ${Variables.Transitions.Short};

    @media ${Variables.Breakpoints.Hover} {
        &:hover {
            background-color: ${({ $active }) => ($active ? Variables.Colors.Primary300 : Variables.Colors.Primary500)};
        }

        &:active {
            background-color: ${Variables.Colors.Primary600};
        }
    }
`
