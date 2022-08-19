/*
 * @Author: Chengbotao
 * @Date: 2022-11-14 16:37:39
 */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button, { ButtonProps } from './button';

describe('Button Component', () => {
  // 应呈现正确的默认按钮
  test('should render the correct default button', () => {
    const defaultProps = {
      onClick: jest.fn(),
    };
    const wrapper = render(<Button {...defaultProps}>Default Button</Button>);
    const element = wrapper.getByText('Default Button') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element.disabled).toBeFalsy();
    expect(element).toHaveClass('xy-button xy-button-default');
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  // 应该根据不同的props渲染正确的组件
  test('should render the correct component based on different props', () => {
    const differentProps: ButtonProps = {
      btnType: 'primary',
      size: 'lg',
      className: 'xy-custom-btn',
    };
    const wrapper = render(<Button {...differentProps}>Primary Button</Button>);
    const element = wrapper.getByText('Primary Button') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('xy-button xy-button-primary xy-custom-btn');
  });

  // 当 btnType 等于 link 并提供 href 时，应该呈现一个 A 标签
  test('should render a link when btnType equals link and href is provided', () => {
    const linkandhrefProps: ButtonProps = {
      btnType: 'link',
      href: '#',
    };
    const wrapper = render(<Button {...linkandhrefProps}>Link Button</Button>);
    const element = wrapper.getByText('Link Button') as HTMLAnchorElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('A');
    expect(element).toHaveClass('xy-button xy-button-link');
  });

  // 应呈现禁用按钮当 disabled 设置为 true
  test('should render disabled button when disabled set to true', () => {
    const disabledProps: ButtonProps = {
      disabled: true,
      onClick: jest.fn(),
    };
    const wrapper = render(<Button {...disabledProps}>Disabled Button</Button>);
    const element = wrapper.getByText('Disabled Button') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});
