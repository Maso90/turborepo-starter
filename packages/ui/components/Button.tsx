import React, { CSSProperties } from 'react';
import {css, SerializedStyles} from '@emotion/react'
import styled from '@emotion/styled'
import './button.css';

type ButtonSize = 'small'| 'medium'| 'large';
type ButtonOptions = {
  label: string;
  size?: ButtonSize;
  backgroundColor?: CSSProperties['backgroundColor'];
}

const StyledButton = styled.button`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: #fff;
`

function button (
  size: ButtonSize,
  backgroundColor?: CSSProperties['backgroundColor']
): SerializedStyles {
  switch (size) {
    case 'small':
      return css`
        font-size: 12px;
        padding: 10px 16px;
        background-color: ${backgroundColor};
      `
    case 'medium':
      return css`
        font-size: 14px;
        padding: 11px 20px;
        background-color: ${backgroundColor};
      `
    case 'large':
      return css`
        font-size: 16px;
        padding: 12px 24px;
        background-color: ${backgroundColor};
      `
  }
}

const createButtonComponent = (buttonOptions: ButtonOptions) => {
  const {
    label,
    size = 'medium',
    backgroundColor = '#1ea7fd'
  } = buttonOptions;
  return <StyledButton css={button(size, backgroundColor)}>{label}</StyledButton>;
}

export const PrimaryButton = ({label}: {label: string}) => createButtonComponent({label: label, backgroundColor: '#1ea7fd'});
export const SecondaryButton = ({label}: {label: string}) => createButtonComponent({label: label, backgroundColor: 'grey'});
export const DangerButton = ({label}: {label: string}) => createButtonComponent({label: label, backgroundColor: 'red'});
