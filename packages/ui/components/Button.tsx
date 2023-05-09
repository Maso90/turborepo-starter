import React, { forwardRef } from 'react';
import {css} from '@emotion/react'
import './button.css';

type ButtonSize = 'small'| 'medium'| 'large';

export type ButtonProps = {
  label: string;
  primary?: boolean;
  size?: ButtonSize;
  backgroundColor?: string;
  onClick?: () => void;
}

export type ButtonRef = HTMLButtonElement;

export const Button = forwardRef<ButtonRef, ButtonProps>((props, ref) => {
  const {label, primary, size = 'medium', backgroundColor} = props;
  const mode = !!primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      ref={ref}
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      css={css`background-color: ${backgroundColor}`}
    >
      {label}
    </button>
  );
});

export default Button;

Button.displayName = "Button";