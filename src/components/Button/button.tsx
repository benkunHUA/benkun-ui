import React from 'react'
import classnames from 'classnames'

export enum BtnSize {
  large = 'lg',
  small = 'sm'
}

export enum BtnType {
  primary = 'priamry',
  normal = 'normal',
  danger = 'danger',
  link = 'link'
}

export interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: string;
  btnType?: string;
  children?: React.ReactNode;
  href?: string;
}

// 将所有原生属性加到props中
export type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
export type NativeAnchorProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
// Partial 让所有属性变成非必填属性
export type ButtonTypes = Partial<NativeButtonProps & NativeAnchorProps>
const Button: React.FC<ButtonTypes> = (props) => {
  const {
    className,
    disabled,
    size,
    btnType,
    children,
    href,
    ...restProps
  } = props

  const classes = classnames('btn', className, {
    [`btn-${size}`]: size,
    [`btn-${btnType}`]: btnType
  })
  return (
    <button
      className={classes}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  )
}

export default Button