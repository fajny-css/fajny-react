/*=============================================== InputCheck ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled, { css } from "styled-components"

import Variables from "./Variables"
import Mixins from "./Mixins"

import { validationTypes } from "./common-types"

/*==================== Component ====================*/

const InputCheck = ({
    type = "radio",
    id,
    tile,
    toggle,
    selector,
    label,
    disabled,
    name,
    validation,
    ...props
}: props) => {
    return (
        <Container>
            <Input
                id={id}
                name={name}
                type={type}
                disabled={disabled}
                $validation={validation}
                $tile={tile}
                {...props}
            />

            {toggle ? (
                <Toggle htmlFor={id} $disabled={disabled} $validation={validation}>
                    {label}
                </Toggle>
            ) : selector ? (
                <Selector htmlFor={id} $disabled={disabled} $validation={validation}>
                    {label}
                </Selector>
            ) : type === "checkbox" ? (
                <Checkbox htmlFor={id} $tile={tile} $disabled={disabled} $validation={validation}>
                    {label}
                </Checkbox>
            ) : (
                <Radio htmlFor={id} $tile={tile} $disabled={disabled} $validation={validation}>
                    {label}
                </Radio>
            )}
        </Container>
    )
}

export default InputCheck

/*==================== Types ====================*/

interface styleProps extends React.HTMLAttributes<HTMLInputElement> {
    $tile?: boolean
    $validation?: validationTypes
    $disabled?: boolean
}

interface props extends React.HTMLAttributes<HTMLInputElement> {
    type?: "checkbox" | "radio"
    id: string
    tile?: boolean
    toggle?: boolean
    selector?: boolean
    label: string
    disabled?: boolean
    name?: string
    validation?: validationTypes
}

/*==================== Styles ====================*/

const Container = styled.div``

const Tile = ({ $validation, $disabled }: styleProps) => css`
    background-color: ${Variables.Colors.White};
    border-radius: ${Variables.Radiuses.M};
    border: 1px solid ${Variables.Colors.Gray200};
    padding: ${Variables.Spacers.S};
    width: 100%;
    transition: ${Variables.Transitions.Short};

    &:hover {
        border-color: ${$validation === "not-passed" && !$disabled
            ? Variables.Colors.Danger300
            : $disabled
            ? Variables.Colors.Gray200
            : Variables.Colors.Primary300};
    }
`

const Common = css`
    ${Mixins.Flexbox({
        $inline: true,
        $align: "center",
        $gap: "xxs",
        $justify: "flex-start",
    })};
    position: relative;
    font-size: ${Variables.FontSizes.Body};
    color: ${Variables.Colors.Black};
    font-weight: ${Variables.FontWeights.Regular};
`

const radioSize = 16
const radioDotSize = 8

const Radio = styled.label<styleProps>`
    ${Common};

    &:before {
        content: "";
        width: ${radioSize}px;
        height: ${radioSize}px;
        border: 2px solid
            ${({ $validation, $disabled }) =>
                $disabled
                    ? Variables.Colors.Gray500
                    : $validation === "not-passed"
                    ? Variables.Colors.Danger500
                    : Variables.Colors.Primary500};
        display: block;
        border-radius: ${Variables.Radiuses.Circle};
    }

    &:after {
        content: "";
        position: absolute;
        left: 4px;
        top: 8px;
        width: ${radioDotSize}px;
        height: ${radioDotSize}px;
        background-color: transparent;
        border-radius: ${Variables.Radiuses.Circle};
        transition: ${Variables.Transitions.Short};
    }

    ${({ $tile }) =>
        $tile &&
        css`
            ${Tile};

            &:after {
                top: 20px;
                left: 16px;
            }
        `}
`

const checkboxSize = 16

const Checkbox = styled.label<styleProps>`
    ${Common};

    &:before {
        content: "";
        $size: 16px;
        width: ${checkboxSize}px;
        height: ${checkboxSize}px;
        border: 2px solid
            ${({ $validation }) =>
                $validation === "not-passed" ? Variables.Colors.Danger500 : Variables.Colors.Primary500};
        border-radius: ${Variables.Radiuses.S};
        transition: ${Variables.Transitions.Short};
    }

    &:after {
        ${Mixins.Icon({
            $name: "check-solid",
            $color: Variables.Colors.White,
            $size: 8,
        })};
        ${Mixins.Flexbox({
            $inline: true,
            $align: "center",
            $justify: "center",
        })};
        position: absolute;
        left: 4px;
        top: 8px;
    }

    ${({ $tile }) =>
        $tile &&
        css`
            ${Tile};

            &:after {
                top: 20px;
                left: 16px;
            }
        `}
`

const toggleDotSize = 8

const Toggle = styled.label<styleProps>`
    ${Common};

    &:before {
        content: "";
        width: 24px;
        height: 16px;
        border-radius: ${Variables.Radiuses.Round};
        border: 2px solid
            ${({ $validation, $disabled }) =>
                $validation === "not-passed" && !$disabled
                    ? Variables.Colors.Danger500
                    : $disabled
                    ? Variables.Colors.Gray500
                    : Variables.Colors.Primary500};
        transition: ${Variables.Transitions.Short};
    }

    &:after {
        content: "";
        width: ${toggleDotSize}px;
        height: ${toggleDotSize}px;
        border-radius: ${Variables.Radiuses.Circle};
        position: absolute;
        background-color: ${({ $validation, $disabled }) =>
            $validation === "not-passed" && !$disabled
                ? Variables.Colors.Danger500
                : $disabled
                ? Variables.Colors.Gray500
                : Variables.Colors.Primary500};
        top: 8px;
        left: 4px;
        transition: ${Variables.Transitions.Short};
    }
`

const Selector = styled.label<styleProps>`
    padding: ${Variables.Spacers.XXS} ${Variables.Spacers.M};
    border-radius: ${Variables.Radiuses.Round};
    transition: ${Variables.Transitions.Short};
    background-color: ${({ $validation }) =>
        $validation === "not-passed" ? Variables.Colors.Danger50 : Variables.Colors.Gray100};
    color: ${({ $validation }) => ($validation === "not-passed" ? Variables.Colors.Danger500 : Variables.Colors.Black)};

    &:hover {
        background-color: ${({ $validation }) =>
            $validation === "not-passed" ? Variables.Colors.Danger300 : Variables.Colors.Primary300};
        color: ${Variables.Colors.White};
    }

    &:active {
        background-color: ${({ $validation }) =>
            $validation === "not-passed" ? Variables.Colors.Danger600 : Variables.Colors.Primary600};
    }
`

const Input = styled.input<styleProps>`
    display: none;

    & ~ label {
        cursor: pointer;
    }

    &:disabled ~ label {
        color: ${Variables.Colors.Gray500};
        cursor: not-allowed;
    }

    &:checked {
        & ~ ${Radio}:after {
            background-color: ${({ $validation }) =>
                $validation === "not-passed" ? Variables.Colors.Danger500 : Variables.Colors.Primary500};
        }

        & ~ ${Checkbox}:before {
            background-color: ${({ $validation }) =>
                $validation === "not-passed" ? Variables.Colors.Danger500 : Variables.Colors.Primary500};
        }

        & ~ ${Toggle} {
            &:before {
                border-color: ${({ $validation, disabled }) =>
                    $validation === "not-passed" && !disabled
                        ? Variables.Colors.Danger500
                        : disabled
                        ? Variables.Colors.Gray100
                        : Variables.Colors.Success500};
                background-color: ${({ $validation, disabled }) =>
                    $validation === "not-passed" && !disabled
                        ? Variables.Colors.Danger500
                        : disabled
                        ? Variables.Colors.Gray100
                        : Variables.Colors.Success500};
            }

            &:after {
                background-color: ${({ disabled }) => !disabled && Variables.Colors.White};
                left: 12px;
            }
        }

        & ~ ${Selector} {
            background-color: ${({ $validation }) =>
                $validation === "not-passed" ? Variables.Colors.Danger500 : Variables.Colors.Primary500};
            color: ${Variables.Colors.White};

            &:hover {
                background-color: ${({ $validation }) =>
                    $validation === "not-passed" ? Variables.Colors.Danger300 : Variables.Colors.Primary300};
                color: ${Variables.Colors.White};
            }

            &:active {
                background-color: ${({ $validation }) =>
                    $validation === "not-passed" ? Variables.Colors.Danger600 : Variables.Colors.Primary600};
            }
        }
    }

    &:disabled {
        & ~ ${Checkbox}:before {
            border-color: ${Variables.Colors.Gray500};
        }

        & ~ ${Selector} {
            background-color: ${Variables.Colors.Gray50};
            color: ${Variables.Colors.Gray500};

            &:hover {
                color: ${Variables.Colors.Gray500};
            }
        }

        &:checked {
            & ~ ${Radio}:after {
                background-color: ${Variables.Colors.Gray500};
            }

            & ~ ${Checkbox}:before {
                background-color: ${Variables.Colors.Gray500};
            }

            & ~ ${Selector} {
                background-color: ${Variables.Colors.Gray100};
            }
        }
    }

    ${({ $tile, $validation, disabled }) =>
        $tile &&
        css`
            &:checked ~ ${Radio}, &:checked ~ ${Checkbox} {
                border-color: ${$validation === "not-passed" && !disabled
                    ? Variables.Colors.Danger500
                    : disabled
                    ? Variables.Colors.Gray500
                    : Variables.Colors.Primary500};
            }

            &:not(:disabled) ~ ${Radio}:hover, &:not(:disabled) ~ ${Checkbox}:hover {
                border-color: ${($validation === "not-passed" && !disabled)
                    ? Variables.Colors.Danger300
                    : Variables.Colors.Primary300};
            }
        `}
`
