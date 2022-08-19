/*
 * @Author: Chengbotao
 * @Date: 2022-11-19 23:46:16
 */
import React, { ChangeEvent, FC, InputHTMLAttributes, ReactElement } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import classNames from 'classnames';
import Icon from '../icon/icon';

export type InputSize = 'lg' | 'sm';

export interface InputProps extends InputHTMLAttributes<HTMLElement> {
  /** 设置 Input 禁用 */
  disabled?: boolean;
  /** 设置 Input 尺寸 */
  sized?: InputSize;
  /** 添加图标,在右侧悬浮添加一个图标，用于提示 */
  icon?: IconProp;
  /** 添加前缀 用于配置一些固定组合 */
  prepend?: string | ReactElement;
  /** 添加后缀 用于配置一些固定组合 */
  append?: string | ReactElement;
  /** 自定义 css 类名 */
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Input 组件
 *
 */
export const Input: FC<InputProps> = (props) => {
  const { disabled, sized, icon, prepend, append, className, ...restProps } = props;
  const classes = classNames('xy-input-wrapper', className, {
    [`xy-input-size-${sized}`]: sized,
    'is-disabled': disabled,
    'xy-input-group': prepend || append,
    'xy-input-group-append': !!append,
    'xy-input-group-prepend': !!prepend,
  });

  // 受控组件 || 非受控组件
  const fixControlledValue = (value: unknown) => {
    if (typeof value === 'undefined' || value === null) {
      return '';
    }
    return value as string;
  };
  if ('value' in props) {
    delete restProps.defaultValue;
    restProps.value = fixControlledValue(props.value);
  }

  return (
    <div className={classes} style={props.style}>
      {prepend && <div className="xy-input-group-prepend">{prepend}</div>}
      {icon && (
        <div className="icon-wrapper">
          <Icon icon={icon} title={`title-${icon}`} />
        </div>
      )}
      <input className="xy-input-inner" disabled={disabled} {...restProps} />
      {append && <div className="xy-input-group-append">{append}</div>}
    </div>
  );
};

export default Input;
