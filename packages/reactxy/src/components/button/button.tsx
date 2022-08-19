/*
 * @Author: Chengbotao
 * @Date: 2022-10-18 09:47:54
 */
import React, { FC, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

export type ButtonSize = 'lg' | 'sm';
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';

export interface ButtonProps
  extends Partial<ButtonHTMLAttributes<HTMLElement> & AnchorHTMLAttributes<HTMLElement>> {
  /** 设置 Button 禁用 */
  disabled?: boolean;
  /** 设置 Button 尺寸 */
  size?: ButtonSize;
  /** 设置 Button 类型 */
  btnType?: ButtonType;
  /** 当 Button 为 link 类型时的地址 */
  href?: string;
  /** 自定义 css 类名 */
  className?: string;
  children?: React.ReactNode;
}

/**
 * Button 组件
 *
 *
 */
export const Button: FC<ButtonProps> = (props) => {
  const { btnType, disabled, className, size, href, children, ...restProps } = props;
  const classes = classNames('xy-button', className, {
    [`xy-button-${btnType}`]: btnType,
    [`xy-button-${size}`]: size,
    disabled: btnType === 'link' && disabled,
  });

  if (btnType === 'link' && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  btnType: 'default',
};

export default Button;
