/*=============================================== Input ===============================================*/

/*==================== Imports ====================*/

import React, { useState } from "react"
import styled, { css } from "styled-components"

import InputContainer from "./InputContainer"
import Icon from "./Icon"
import FajnyIcon from "./FajnyIcon"
import Variables from "./Variables"
import Mixins from "./Mixins"

import { fajnyIconsType, validationTypes } from "./common-types"

/*==================== Component ====================*/

const InputFunction = ({
    maxLength,
    value,
    id,
    validation,
    type,
    disabled,
    name,
    icon = undefined,
    fajnyIcon = undefined,
    iconValidationPassed,
    fajnyIconValidationPassed = "check-circle-solid",
    iconValidationNotPassed,
    fajnyIconValidationNotPassed = "close-circle-solid",
    iconCalendar,
    fajnyIconCalendar = "calendar-solid",
    iconClock,
    fajnyIconClock = "clock-solid",
    iconShowPassword,
    fajnyIconShowPassword,
    iconHidePassword,
    fajnyIconHidePassword,
    textHidePassword = "Hide",
    textShowPassword = "Show",
    iconClear,
    fajnyIconClear = "close-solid",
    clearSearch,
    iconSelect,
    fajnyIconSelect = "chevron-down-solid",
    password,
    children,
    ...props
}: props) => {
    const [isVisible, setIsVisible] = useState(false)

    return type === "select" ? (
        <InputContent>
            <InputStyled
                maxLength={maxLength}
                value={value}
                id={id}
                type={type}
                disabled={disabled}
                name={name}
                $validation={validation}
                as="select"
                {...props}
            >
                {children}
            </InputStyled>

            <RightContainer $disabled={disabled}>
                {iconSelect ? (
                    <Icon src={iconSelect} size={16} color={disabled ? "gray" : "primary"} />
                ) : (
                    <FajnyIcon name={fajnyIconSelect} size={16} color={disabled ? "gray" : "primary"} />
                )}
            </RightContainer>
        </InputContent>
    ) : type === "textarea" ? (
        <InputStyled
            as="textarea"
            maxLength={maxLength}
            value={value}
            id={id}
            type={type}
            disabled={disabled}
            name={name}
            $validation={validation}
            {...props}
        />
    ) : icon ||
      fajnyIcon ||
      validation ||
      password ||
      type === "url" ||
      type === "search" ||
      type === "date" ||
      type === "datetime-local" ||
      type === "month" ||
      type === "week" ||
      type === "time" ? (
        <InputContent>
            {icon || fajnyIcon ? (
                <IconContainer>
                    {icon && <Icon src={icon} size={24} color={disabled ? "gray" : "primary"} />}

                    {fajnyIcon && <FajnyIcon name={fajnyIcon} size={24} color={disabled ? "gray" : "primary"} />}
                </IconContainer>
            ) : icon && fajnyIcon ? (
                ""
            ) : (
                ""
            )}

            {type === "url" && (
                <UrlContainer $fajnyIcon={fajnyIcon} $icon={icon} $disabled={disabled}>
                    http://
                </UrlContainer>
            )}

            <InputStyled
                maxLength={maxLength}
                value={value}
                id={id}
                type={password ? (isVisible ? "text" : "password") : type}
                disabled={disabled}
                name={name}
                $validation={validation}
                $icon={icon}
                $fajnyIcon={fajnyIcon}
                {...props}
            />

            {(validation ||
                password ||
                (type === "search" && clearSearch && typeof value === "string" && value.length > 0)) && (
                <RightContainer $disabled={disabled}>
                    {password && (
                        <ButtonInput onClick={() => setIsVisible(!isVisible)} disabled={disabled}>
                            {isVisible ? (
                                iconHidePassword ? (
                                    <Icon src={iconHidePassword} size={24} />
                                ) : fajnyIconHidePassword ? (
                                    <FajnyIcon name={fajnyIconHidePassword} size={24} />
                                ) : (
                                    textHidePassword
                                )
                            ) : (
                                !isVisible &&
                                (iconShowPassword ? (
                                    <Icon src={iconShowPassword} size={24} />
                                ) : fajnyIconShowPassword ? (
                                    <FajnyIcon name={fajnyIconShowPassword} size={24} />
                                ) : (
                                    textShowPassword
                                ))
                            )}
                        </ButtonInput>
                    )}

                    {validation === "passed" &&
                        (iconValidationPassed ? (
                            <Icon src={iconValidationPassed} size={24} color="success" />
                        ) : (
                            <FajnyIcon name={fajnyIconValidationPassed} size={24} color="success" />
                        ))}

                    {validation === "not-passed" &&
                        (iconValidationNotPassed ? (
                            <Icon src={iconValidationNotPassed} size={24} color="danger" />
                        ) : (
                            <FajnyIcon name={fajnyIconValidationNotPassed} size={24} color="danger" />
                        ))}

                    {type === "search" && clearSearch && typeof value === "string" && value.length > 0 && (
                        <ButtonInput onClick={clearSearch} disabled={disabled}>
                            {iconClear ? (
                                <Icon src={iconClear} size={24} />
                            ) : (
                                <FajnyIcon name={fajnyIconClear} size={24} />
                            )}
                        </ButtonInput>
                    )}
                </RightContainer>
            )}
        </InputContent>
    ) : (
        <InputStyled
            maxLength={maxLength}
            value={value}
            id={id}
            type={type}
            disabled={disabled}
            name={name}
            $validation={validation}
            {...props}
        />
    )
}

const Input = ({
    label,
    helper,
    helperBottom,
    counter,
    maxLength,
    value,
    id,
    validation,
    type,
    disabled,
    name,
    icon,
    fajnyIcon,
    iconValidationPassed,
    fajnyIconValidationPassed,
    iconValidationNotPassed,
    fajnyIconValidationNotPassed,
    clearSearch,
    ...props
}: props) => {
    return label || helper || helperBottom || counter ? (
        <InputContainer
            id={id}
            label={label}
            helper={helper}
            helperBottom={helperBottom}
            counter={counter}
            value={value}
            maxLength={maxLength}
        >
            <InputFunction
                id={id}
                validation={validation}
                type={type}
                disabled={disabled}
                name={name}
                icon={icon}
                fajnyIcon={fajnyIcon}
                iconValidationPassed={iconValidationPassed}
                iconValidationNotPassed={iconValidationNotPassed}
                fajnyIconValidationPassed={fajnyIconValidationPassed || "check-circle-solid"}
                fajnyIconValidationNotPassed={fajnyIconValidationNotPassed || "close-circle-solid"}
                value={value}
                maxLength={maxLength}
                clearSearch={clearSearch}
                {...props}
            />
        </InputContainer>
    ) : (
        <InputFunction
            id={id}
            validation={validation}
            type={type}
            disabled={disabled}
            name={name}
            icon={icon}
            fajnyIcon={fajnyIcon}
            iconValidationPassed={iconValidationPassed}
            iconValidationNotPassed={iconValidationNotPassed}
            fajnyIconValidationPassed={fajnyIconValidationPassed}
            fajnyIconValidationNotPassed={fajnyIconValidationNotPassed}
            value={value}
            maxLength={maxLength}
            clearSearch={clearSearch}
            {...props}
        />
    )
}

export default Input

/*==================== Types ====================*/

const inputTypes = {
    color: "color",
    date: "date",
    "datetime-local": "datetime-local",
    email: "email",
    file: "file",
    month: "month",
    number: "number",
    password: "password",
    search: "search",
    tel: "tel",
    text: "text",
    time: "time",
    url: "url",
    week: "week",
    textarea: "textarea",
    select: "select",
} as const

type inputTypesTypes = keyof typeof inputTypes

interface styleProps extends React.HTMLAttributes<HTMLInputElement> {
    $validation?: validationTypes | string
    $iconCalendar?: string
    $fajnyIconCalendar?: fajnyIconsType
    $iconClock?: string
    $fajnyIconClock?: fajnyIconsType
    $iconSelect?: string
    $fajnyIconSelect?: fajnyIconsType
    type?: inputTypesTypes
    $icon?: string
    $fajnyIcon?: fajnyIconsType
}

interface urlProps {
    $icon?: string
    $fajnyIcon?: fajnyIconsType
    $disabled?: boolean
}

interface rightContainerProps {
    $disabled?: boolean
}

interface baseProps extends React.HTMLAttributes<HTMLInputElement> {
    label?: string
    helper?: string
    helperBottom?: string
    counter?: boolean
    maxLength?: number
    value?: any
    id: string
    validation?: validationTypes | string
    type?: inputTypesTypes
    disabled?: boolean
    name?: string
    as?: any
    iconValidationPassed?: string
    fajnyIconValidationPassed?: fajnyIconsType
    iconValidationNotPassed?: string
    fajnyIconValidationNotPassed?: fajnyIconsType
    password?: boolean
    iconCalendar?: string
    fajnyIconCalendar?: fajnyIconsType
    iconClock?: string
    fajnyIconClock?: fajnyIconsType
    iconShowPassword?: string
    fajnyIconShowPassword?: fajnyIconsType
    iconHidePassword?: string
    fajnyIconHidePassword?: fajnyIconsType
    textHidePassword?: string
    textShowPassword?: string
    iconClear?: string
    fajnyIconClear?: fajnyIconsType
    iconSelect?: string
    fajnyIconSelect?: fajnyIconsType
    clearSearch?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

interface possible1 extends baseProps {
    icon?: string
    fajnyIcon?: never
}

interface possible2 extends baseProps {
    icon?: string
    fajnyIcon?: fajnyIconsType
}

type props = possible1 | possible2

/*==================== Styles ====================*/

const size = 32

const InputStyled = styled.input<styleProps>`
    width: 100%;
    height: ${size}px;
    border: 1px solid ${Variables.Colors.Gray200};
    border-radius: ${Variables.Radiuses.S};
    font-size: ${Variables.FontSizes.Body};
    font-family: ${Variables.FontFamilies.Body};
    padding: ${Variables.Spacers.XS};
    background-color: ${({ $validation }) =>
        $validation && $validation === "not-passed" ? Variables.Colors.Danger50 : Variables.Colors.White};
    color: ${Variables.Colors.Black};
    line-height: 100%;
    outline: none;
    z-index: 0;

    &:focus {
        border-color: ${({ $validation }) =>
            $validation && $validation === "not-passed" ? Variables.Colors.Danger500 : Variables.Colors.Primary500};
    }

    &:disabled {
        cursor: not-allowed;
        background-color: ${Variables.Colors.Gray50};
        color: ${Variables.Colors.Gray500};

        &::placeholder {
            color: ${Variables.Colors.Gray500};
        }
    }

    &::placeholder {
        color: ${Variables.Colors.Gray200};
    }

    ${({ $icon, $fajnyIcon }) =>
        ($icon !== undefined || $fajnyIcon !== undefined) &&
        css`
            padding-left: calc(${size}px + ${Variables.Spacers.XS});
        `}

    ${({ type }) =>
        type === "color" || type === "file"
            ? css`
                  cursor: pointer;
              `
            : type === "search" &&
              css`
                  &::-webkit-search-cancel-button {
                      -webkit-appearance: none;
                      appearance: none;
                  }
              `}

    ${({ type }) =>
        type === "file" &&
        css`
            padding: 0;

            &::file-selector-button {
                height: 100%;
                background-color: ${Variables.Colors.Gray100};
                border: none;
                height: 100%;
                padding: 0 ${Variables.Spacers.XS};
                line-height: 100%;
                transition: ${Variables.Transitions.Short};
                cursor: pointer;
            }

            &:hover::file-selector-button {
                background-color: ${Variables.Colors.Gray300};
            }

            &:disabled:hover::file-selector-button {
                background-color: ${Variables.Colors.Gray100};
                color: ${Variables.Colors.Gray500};
                cursor: not-allowed;
            }

            @media ${Variables.Breakpoints.Touch} {
                &:hover::file-selector-button {
                    background-color: ${Variables.Colors.Gray100};
                }
            }
        `}

    ${({ type, $fajnyIcon, $icon }) =>
        type === "url" &&
        css`
            padding-left: ${$fajnyIcon !== undefined || $icon !== undefined ? 53 + size : 53}px;
        `}
    
    ${({ type, $iconCalendar, $fajnyIconCalendar }) =>
        (type === "date" || type === "datetime-local" || type === "month" || type === "week") &&
        css`
            &::-webkit-inner-spin-button,
            &::-webkit-calendar-picker-indicator {
                -webkit-appearance: none;
                appearance: none;
                background: rgba(0, 0, 0, 0);
                ${Mixins.Icon({
                    $name: $iconCalendar ? $iconCalendar : $fajnyIconCalendar || "calendar-solid",
                    $color: Variables.Colors.Primary500,
                    $size: 18,
                })};
                cursor: pointer;
                transform: translateX(1px);
                transition: ${Variables.Transitions.Short};

                &:hover {
                    background-color: ${Variables.Colors.Primary300};
                }

                &:active {
                    background-color: ${Variables.Colors.Primary600};
                }
            }
        `}
    
    ${({ type, $iconClock, $fajnyIconClock }) =>
        type === "time" &&
        css`
            &::-webkit-inner-spin-button,
            &::-webkit-calendar-picker-indicator {
                -webkit-appearance: none;
                appearance: none;
                background: rgba(0, 0, 0, 0);
                ${Mixins.Icon({
                    $name: $iconClock ? $iconClock : $fajnyIconClock || "clock-solid",
                    $color: Variables.Colors.Primary500,
                    $size: 18,
                })};
                cursor: pointer;
                transform: translateX(1px);
                transition: ${Variables.Transitions.Short};

                &:hover {
                    background-color: ${Variables.Colors.Primary300};
                }

                &:active {
                    background-color: ${Variables.Colors.Primary600};
                }
            }
        `}
    
    ${({ type }) =>
        type === "select" &&
        css`
            padding: 0 ${Variables.Spacers.XS};
            appearance: none;
            cursor: pointer;

            &::-ms-expand {
                display: none;
            }
        `}
    
    ${({ type }) =>
        type === "textarea" &&
        css`
            height: inherit;
            min-height: calc(
                ${Variables.FontSizes.Body} * ${Variables.LineHeights.Regular} * 4 + ${Variables.Spacers.XXS} * 2
            );
            resize: vertical;
        `}
`

const IconContainer = styled.span`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    width: ${size}px;
    height: ${size}px;
    ${Mixins.Flexbox({
        $inline: true,
        $align: "center",
        $justify: "center",
    })};

    &:after {
        content: "";
        position: absolute;
        right: 0;
        width: 1px;
        top: 1px;
        height: 30px;
        background-color: ${Variables.Colors.Gray200};
    }
`

const UrlContainer = styled.span<urlProps>`
    position: absolute;
    left: 0;
    top: 0;
    height: ${size}px;
    z-index: 2;
    line-height: ${size}px;
    padding-left: ${Variables.Spacers.XS};

    ${({ $disabled }) =>
        $disabled &&
        css`
            color: ${Variables.Colors.Gray500};
            cursor: not-allowed;
        `}

    ${({ $icon, $fajnyIcon }) =>
        ($icon !== undefined || $fajnyIcon !== undefined) &&
        css`
            padding-left: calc(${size}px + ${Variables.Spacers.XS});
        `}
`

const InputContent = styled.span`
    position: relative;
    width: 100%;
`

const ButtonInput = styled.button`
    border: none;
    height: 100%;
    padding: 0;
    background-color: transparent;
    ${Mixins.Flexbox({
        $align: "center",
        $justify: "center",
        $inline: true,
    })};
    color: ${Variables.Colors.Primary500};

    &:hover {
        color: ${Variables.Colors.Primary300};
    }

    &:active {
        color: ${Variables.Colors.Primary600};
    }

    &:disabled {
        color: ${Variables.Colors.Gray500};
    }
`

const RightContainer = styled.span<rightContainerProps>`
    position: absolute;
    top: 0;
    right: 0;
    height: 32px;
    padding: 0 ${Variables.Spacers.XS};
    ${Mixins.Flexbox({
        $inline: true,
        $align: "center",
        $justify: "center",
    })};
    gap: ${Variables.Spacers.XS};

    ${({ $disabled }) =>
        $disabled &&
        css`
            cursor: not-allowed;
        `}
`
