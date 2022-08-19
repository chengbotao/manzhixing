/*
 * @Author: Chengbotao
 * @Date: 2022-11-18 10:28:15
 */
import React from 'react';
import { render } from '@testing-library/react';
import Icon, { IconProps } from './icon';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

describe('Icon Component', () => {
  // 应呈现正确的 icon 组件
  test('should render the correct icon', () => {
    const defaultProps: IconProps = {
      icon: 'coffee',
    };
    const wrapper = render(<Icon data-testid="xyicon" {...defaultProps}></Icon>);
    const element = wrapper.getByTestId('xyicon');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('xy-icon');
  });

  // 应该根据不同的props渲染正确的组件
  test('should render the correct icon', () => {
    const defaultProps: IconProps = {
      icon: 'coffee',
      theme: 'success',
    };
    const wrapper = render(<Icon data-testid="xyicon" {...defaultProps}></Icon>);
    const element = wrapper.getByTestId('xyicon');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('xy-icon-success');
  });
});
