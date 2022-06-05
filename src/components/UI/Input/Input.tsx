import React, { ReactNode } from 'react';
import cx from 'classnames';

import './Input.scss';

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
  disabled?: boolean;
  placeholder?: string;
  status?: Status;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  onChange?: () => void;
  onClick?: () => void;
}

export const Input = (props: IProps) => {
  const { value, type, disabled, icon, status, placeholder, onChange, onClick, iconPosition } =
    props;

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
          onClick={onClick}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};
