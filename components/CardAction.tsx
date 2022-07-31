/*=============================================== CardAction ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled, { css } from "styled-components"

import Variables from "./Variables"
import { H5, P } from "./Font"
import Mixins from "./Mixins"
import CardContainer from "./CardContainer"
import Image from "./Image"
import FajnyIcon from "./FajnyIcon"
import Flexbox from "./Flexbox"
import Button from "./Button"

import { fajnyIconsType, colorsHoverType } from "./common-types"
import { buttonStylesType } from "./Button"

/*==================== Component ====================*/

const CardAction = ({
    orientation = "portrait",
    onClickLike,
    isLikedChecked,
    src,
    alt,
    rating,
    title,
    content,
    buttonText,
    buttonStyle = "plain",
    buttonColor = "primary",
    onClickButton,
    toButton,
    iconLeftButton,
    iconRightButton,
    iconLike = "heart-solid",
    iconLiked = "heart-full-solid",
    iconRating = "star-full-solid",
    ...props
}: props) => {
    return (
        <Container $orientation={orientation} {...props}>
            <ImgContainer $orientation={orientation}>
                <Image src={src} alt={alt} width="100%" height="100%" fit="cover" />

                {onClickLike && (
                    <LikeButton onClick={onClickLike}>
                        <FajnyIcon name={isLikedChecked ? iconLiked : iconLike} size={24} />
                    </LikeButton>
                )}
            </ImgContainer>

            <Content $orientation={orientation}>
                {rating ? (
                    <Flexbox justify="space-between" align="center" gap="xs">
                        <H5>{title}</H5>

                        <Rating>
                            <FajnyIcon name={iconRating} size={12} color="primary" />
                            {rating}
                        </Rating>
                    </Flexbox>
                ) : (
                    <H5>{title}</H5>
                )}

                {content && <P>{content}</P>}

                {buttonText && (
                    <Flexbox justify="flex-end">
                        <Button
                            buttonStyle={buttonStyle}
                            color={buttonColor}
                            fajnyIconLeft={iconLeftButton}
                            fajnyIconRight={iconRightButton}
                            to={toButton}
                            onClick={onClickButton}
                        >
                            {buttonText}
                        </Button>
                    </Flexbox>
                )}
            </Content>
        </Container>
    )
}

export default CardAction

/*==================== Types ====================*/

const orientation = {
    portrait: "portrait",
    landscape: "landscape",
} as const

type orientationTypes = keyof typeof orientation

interface styleProps extends React.HTMLAttributes<HTMLDivElement> {
    $orientation?: orientationTypes
}

interface props extends React.HTMLAttributes<HTMLDivElement> {
    orientation?: orientationTypes
    onClickLike?: (e: React.MouseEvent<HTMLButtonElement>) => void
    isLikedChecked?: boolean
    src: string
    alt: string
    rating?: number
    title: string
    content?: string
    buttonStyle?: buttonStylesType
    buttonText?: string
    buttonColor?: colorsHoverType
    onClickButton?: (e: React.MouseEvent<HTMLButtonElement>) => void
    toButton?: string
    iconLeftButton?: fajnyIconsType
    iconRightButton?: fajnyIconsType
    iconLike?: fajnyIconsType
    iconLiked?: fajnyIconsType
    iconRating?: fajnyIconsType
}

/*==================== Styles ====================*/

const Container = styled(CardContainer)<styleProps>`
    ${({ $orientation }) =>
        Mixins.Flexbox({
            $direction: $orientation === "landscape" ? "row" : "column",
            $align: "stretch",
        })};
`

const ImgContainer = styled.div<styleProps>`
    width: ${({ $orientation }) => ($orientation === "portrait" ? "100%" : "100px")};
    height: ${({ $orientation }) => ($orientation === "portrait" && "150px")};
    position: relative;
    min-height: ${({ $orientation }) => $orientation === "landscape" && "120px"};
    ${Mixins.Flexbox({
        $align: "stretch",
    })};

    img {
        position: relative;
        z-index: 0;

        ${({ $orientation }) =>
            $orientation === "landscape" &&
            css`
                min-height: 120px;
            `};
    }
`

const sizeLikeButton = 32

const LikeButton = styled.button`
    position: absolute;
    bottom: ${Variables.Spacers.XS};
    right: ${Variables.Spacers.XS};
    width: ${sizeLikeButton}px;
    height: ${sizeLikeButton}px;
    padding: 0;
    border: none;
    background-color: transparent;
    ${Mixins.Flexbox({
        $align: "center",
        $justify: "center",
    })};
    color: ${Variables.Colors.White};
    cursor: pointer;
    border-radius: ${Variables.Radiuses.Circle};
    transition: ${Variables.Transitions.Short};

    @media ${Variables.Breakpoints.Hover} {
        &:hover {
            background-color: ${Variables.Colors.Gray300};
        }

        &:active {
            background-color: ${Variables.Colors.Gray100};
        }
    }
`

const Content = styled.div<styleProps>`
    padding: ${Variables.Spacers.XS};
    ${Mixins.Flexbox({
        $align: "flex-start",
        $justify: "flex-start",
        $direction: "column",
        $gap: "xxs",
    })};

    & > * {
        width: 100%;
    }

    ${({ $orientation }) =>
        $orientation === "landscape" &&
        css`
            flex-grow: 1;
        `}
`

const Rating = styled.span`
    ${Mixins.Flexbox({
        $inline: true,
        $align: "center",
        $justify: "flex-start",
        $gap: "xxs",
    })};
`
