/*
 * @Author: Chengbotao
 * @Date: 2022-11-17 22:36:13
 */
import React, { FC } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type ThemeProps =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark';

export interface IconProps extends FontAwesomeIconProps {
  /** 设置 Icon 主题 */
  theme?: ThemeProps;
  /** 自定义 css 类名 */
  className?: string;
  /** icon 名字 */
  icon: IconProp;
}

/**
 * Icon 组件
 *
 *
 */
export const Icon: FC<IconProps> = (props) => {
  const { className, theme, ...restProps } = props;
  const classes = classNames('xy-icon', className, {
    [`xy-icon-${theme}`]: theme,
  });

  return <FontAwesomeIcon className={classes} {...restProps}></FontAwesomeIcon>;
};

Icon.defaultProps = {
  theme: 'primary',
};

export default Icon;
