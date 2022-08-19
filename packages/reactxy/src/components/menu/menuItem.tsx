/*
 * @Author: Chengbotao
 * @Date: 2022-10-17 00:21:47
 */
import React, { FC, useContext } from 'react';
import classNames from 'classnames';
import { menuContext } from './menu';

export interface MenuItemProps {
  index?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const MenuItem: FC<MenuItemProps> = (props) => {
  const { index, disabled, className, style, children } = props;

  const context = useContext(menuContext);
  const classes = classNames('xy-menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index,
  });

  const handleClick = () => {
    if (context.onSelect && !disabled && typeof index === 'string') {
      context.onSelect(index);
    }
  };

  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};

MenuItem.displayName = 'MenuItem';

export default MenuItem;
