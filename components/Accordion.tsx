/*=============================================== Accordion ===============================================*/

/*==================== Imports ====================*/

import React, { useState } from "react"
import styled, { css } from "styled-components"
import { v4 as uuid } from "uuid"

import Variables from "./Variables"
import { P } from "./Font"
import Mixins from "./Mixins"
import FajnyIcon from "./FajnyIcon"

/*==================== Styles ====================*/

const Icon = styled(FajnyIcon)``

const Container = styled.div<styleProps>`
    position: relative;
    ${({ $accordionStyle }) =>
        Mixins.Grid({
            $gap: $accordionStyle === "rounded" ? 0 : "xxs",
        })};

    ${({ $accordionStyle }) =>
        $accordionStyle === "rounded" &&
        css`
            border-radius: ${Variables.Radiuses.M};
            overflow: hidden;
            border: 1px solid ${Variables.Colors.Gray200};
            gap: 0;
        `}
`

const Item = styled.div``

const Content = styled.div<contentStyleProps>`
    max-height: ${({ $isOpen }) => ($isOpen ? "600px" : 0)};
    overflow: hidden;
    transition: ${Variables.Transitions.Long};

    ${({ $accordionStyle, $isOpen }) =>
        $accordionStyle === "rounded"
            ? css`
                  padding: ${$isOpen ? Variables.Spacers.S : `0 ${Variables.Spacers.S}`};
              `
            : css`
                  padding: ${$isOpen ? `${Variables.Spacers.XS} 0` : 0};
              `}
`

const Button = styled.button<buttonProps>`
    width: 100%;
    ${Mixins.Flexbox({
        $align: "center",
        $justify: "space-between",
    })};
    padding: ${({ $accordionStyle }) => ($accordionStyle === "rounded" ? Variables.Spacers.S : 0)};
    border: none;
    border-bottom: 1px solid
        ${({ $accordionStyle }) => ($accordionStyle === "rounded" ? Variables.Colors.White : Variables.Colors.Gray200)};
    background-color: ${({ $accordionStyle }) =>
        $accordionStyle === "rounded" ? Variables.Colors.Primary500 : "transparent"};
    padding-bottom: ${({ $accordionStyle }) => $accordionStyle === "basic" && Variables.Spacers.XXS};
    color: ${({ $accordionStyle }) =>
        $accordionStyle === "rounded" ? Variables.Colors.White : Variables.Colors.Primary500};
    height: ${({ $accordionStyle }) => ($accordionStyle === "rounded" ? "49px" : "29px")};

    ${({ $noBorder }) =>
        $noBorder &&
        css`
            border-bottom: none;
        `}

    ${Icon} {
        transition: ${Variables.Transitions.Short};

        ${({ $isOpen, $icon }) =>
            $isOpen &&
            css`
                transform: rotate(${$icon === "chevron" ? 180 : 45}deg);
            `}
    }
`

/*==================== Component ====================*/

const AccordionItem = ({
    isOpen = false,
    icon = "plus",
    title,
    content,
    $accordionStyle = "basic",
    $noBorder,
}: itemProps) => {
    const [open, setOpen] = useState(isOpen)

    return (
        <Item>
            <Button
                onClick={() => setOpen(!open)}
                $isOpen={open}
                $icon={icon}
                $accordionStyle={$accordionStyle}
                $noBorder={$noBorder}
            >
                {title}

                <Icon name={icon === "chevron" ? "chevron-down-solid" : "plus-solid"} size={16} />
            </Button>

            <Content as={typeof content === "string" ? P : "div"} $isOpen={open} $accordionStyle={$accordionStyle}>
                {content}
            </Content>
        </Item>
    )
}

const Accordion = ({ accordionStyle = "basic", icon = "plus", items, ...props }: props) => (
    <Container $accordionStyle={accordionStyle} {...props}>
        {items.map((item, i) => (
            <AccordionItem
                icon={icon}
                isOpen={item.isOpen}
                title={item.title}
                content={item.content}
                $accordionStyle={accordionStyle}
                $noBorder={accordionStyle === "rounded" && i === items.length - 1 && true}
                key={uuid()}
            />
        ))}
    </Container>
)

export default Accordion

/*==================== Types ====================*/

const accordionStyle = {
    basic: "basic",
    rounded: "rounded",
} as const

type accordionStyleTypes = keyof typeof accordionStyle

const icons = {
    plus: "plus",
    chevron: "chevron",
} as const

type iconTypes = keyof typeof icons

interface styleProps extends React.HTMLAttributes<HTMLDivElement> {
    $accordionStyle?: accordionStyleTypes
    $isOpen?: boolean
}

interface buttonProps extends React.HTMLAttributes<HTMLButtonElement> {
    $accordionStyle?: accordionStyleTypes
    $isOpen?: boolean
    $icon?: iconTypes
    $noBorder?: boolean
}

type item = {
    title: string
    isOpen?: boolean
    content: string | React.ReactNode
}

interface props extends React.HTMLAttributes<HTMLDivElement> {
    accordionStyle?: accordionStyleTypes
    icon?: iconTypes
    items: item[]
}

interface contentStyleProps extends React.HTMLAttributes<HTMLDivElement> {
    $icon?: iconTypes
    $isOpen?: boolean
    $accordionStyle?: accordionStyleTypes
}

interface itemProps extends React.HTMLAttributes<HTMLDivElement> {
    icon?: iconTypes
    title: string
    isOpen?: boolean
    content?: string | React.ReactNode
    $accordionStyle?: accordionStyleTypes
    $noBorder?: boolean
}
