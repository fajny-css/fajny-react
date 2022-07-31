/*=============================================== InputImage ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled, { css } from "styled-components"

import Variables from "./Variables"
import Mixins from "./Mixins"
import InputContainer from "./InputContainer"
import Image from "./Image"
import Icon from "./Icon"
import FajnyIcon from "./FajnyIcon"

import { fajnyIconsType, validationTypes } from "./common-types"

/*==================== Component ====================*/

const InputImage = ({
    id,
    src,
    alt = "Image",
    label,
    helper,
    helperBottom,
    iconEmpty,
    fajnyIconEmpty = "image-solid",
    iconHover,
    fajnyIconHover = "edit-solid",
    validation,
    disabled,
    ...props
}: props) => {
    const EmptyContainer: React.FC = () => (
        <StyledEmptyContainer $validation={validation}>
            {iconEmpty ? (
                <Icon
                    src={iconEmpty}
                    color={validation === "not-passed" ? "danger" : disabled ? "gray" : "primary"}
                    size={48}
                />
            ) : (
                <FajnyIcon
                    name={fajnyIconEmpty}
                    color={validation === "not-passed" ? "danger" : disabled ? "gray" : "primary"}
                    size={48}
                />
            )}
        </StyledEmptyContainer>
    )

    const HoverContainer: React.FC = () => (
        <StyledHoverContainer>
            {iconHover ? (
                <Icon src={iconHover} size={32} color={validation === "not-passed" ? "danger" : "primary"} />
            ) : (
                <FajnyIcon name={fajnyIconHover} size={32} color={validation === "not-passed" ? "danger" : "primary"} />
            )}
        </StyledHoverContainer>
    )

    return label || helper || helperBottom ? (
        <InputContainer id={id} label={label} helper={helper} helperBottom={helper}>
            <Container>
                <Label htmlFor={id} $disabled={disabled}>
                    {src === "" ? (
                        <EmptyContainer />
                    ) : (
                        <Img src={src} alt={alt} width="100%" height="100%" fit="cover" />
                    )}

                    <HoverContainer />
                </Label>
                <Input type="file" id={id} disabled={disabled} {...props} />
            </Container>
        </InputContainer>
    ) : (
        <Container>
            <Label htmlFor={id} $disabled={disabled}>
                {src === "" ? <EmptyContainer /> : <Img src={src} alt={alt} width="100%" height="100%" fit="cover" />}

                <HoverContainer />
            </Label>
            <Input type="file" id={id} disabled={disabled} {...props} />
        </Container>
    )
}

export default InputImage

/*==================== Types ====================*/

interface styleProps extends React.HTMLAttributes<HTMLInputElement> {
    $validation?: validationTypes
    $disabled?: boolean
}

interface baseProps extends React.HTMLAttributes<HTMLInputElement> {
    id: string
    src: string
    alt?: string
    validation?: validationTypes
    disabled?: boolean

    label?: string
    helper?: string
    helperBottom?: string
}

interface possible1 extends baseProps {
    iconEmpty?: string
    fajnyIconEmpty?: never
    iconHover?: string
    fajnyIconHover?: never
}

interface possible2 extends baseProps {
    iconEmpty?: never
    fajnyIconEmpty?: fajnyIconsType
    iconHover?: string
    fajnyIconHover?: never
}

interface possible3 extends baseProps {
    iconEmpty?: string
    fajnyIconEmpty?: never
    iconHover?: never
    fajnyIconHover?: fajnyIconsType
}

interface possible4 extends baseProps {
    iconEmpty?: never
    fajnyIconEmpty?: fajnyIconsType
    iconHover?: never
    fajnyIconHover?: fajnyIconsType
}

type props = possible1 | possible2 | possible3 | possible4

/*==================== Styles ====================*/

const labelSize = 64

const Container = styled.div`
    position: relative;
`

const StyledEmptyContainer = styled.span<styleProps>`
    width: 100%;
    height: 100%;
    ${Mixins.Flexbox({
        $inline: true,
        $align: "center",
        $justify: "center",
    })};
    position: relative;
    z-index: 0;
    background-color: ${({ $validation }) =>
        $validation === "not-passed" ? Variables.Colors.Danger50 : Variables.Colors.Gray100};
`

const StyledHoverContainer = styled.span`
    width: 100%;
    height: 100%;
    ${Mixins.Flexbox({
        $inline: true,
        $align: "center",
        $justify: "center",
    })};
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: ${Variables.Overlays.Plain.White50};
    opacity: 0;
    transition: ${Variables.Transitions.Short};
`

const Label = styled.label<styleProps>`
    width: ${labelSize}px;
    height: ${labelSize}px;
    ${Mixins.Flexbox({
        $align: "center",
        $justify: "center",
    })};
    position: relative;
    border-radius: ${Variables.Radiuses.M};
    overflow: hidden;
    cursor: pointer;

    @media ${Variables.Breakpoints.Hover} {
        &:hover ${StyledHoverContainer} {
            opacity: 1;
        }
    }

    ${({ $disabled }) =>
        $disabled &&
        css`
            cursor: not-allowed;

            @media ${Variables.Breakpoints.Hover} {
                &:hover ${StyledHoverContainer} {
                    opacity: 0;
                }
            }
        `}
`

const Img = styled(Image)`
    position: relative;
    z-index: 0;
`

const Input = styled.input`
    display: none;
`
