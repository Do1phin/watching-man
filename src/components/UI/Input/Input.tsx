import React, { ReactNode } from 'react';
import cx from 'classnames';

import './Input.styles.scss';

export enum Type {
  TEXT = 'text',
  PASSWORD = 'password',
  NUMBER = 'number',
}

export enum IconPosition {
  START = 'start',
  END = 'end',
}

export enum Status {
  NONE = 'none',
  SUCCESS = 'success',
  ERROR = 'error',
}

const a = {
  b: 1,
  a: 0,
};

interface IProps {
  value?: string;
  type?: Type;
  maxLength?: number;
  disabled?: boolean;
  placeholder?: string;
  textPosition?: string;
  status?: Status;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  onChange?: () => void;
  onClick?: () => void;
  ref?: any;
}

export const Input = (props: IProps) => {
  const {
    disabled,
    icon,
    status,
    placeholder,
    iconPosition,
    onChange,
    onClick,
    textPosition,
    type,
    value,
    maxLength,
    ref,
  } = props;

  return (
    <>
      <div className='input__wrapper'>
        {icon && <div className={cx('input__icon', iconPosition)}>{icon}</div>}
        <input
          type={type}
          className='input'
          status={status}
          autoComplete='off'
          disabled={disabled}
          placeholder={placeholder}
          style={{ textAlign: textPosition }}
          maxLength={maxLength}
          onClick={onClick}
          value={value}
          onChange={onChange}
          ref={ref}
        />
      </div>
    </>
  );
};
