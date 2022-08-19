/*
 * @Author: Chengbotao
 * @Date: 2022-11-18 10:43:39
 */
import { render } from '@testing-library/vue';
import Icon from './index';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

describe('Icon Component', () => {
  // 应呈现正确的 icon 组件
  test('should render the correct icon', async () => {
    const { getByTestId } = render(Icon, {
      props: {
        icon: 'coffee',
      },
      attrs: {
        'data-testid': 'xyicon',
      },
    });

    const element = getByTestId('xyicon');

    expect(element.className).toMatch(/xy-icon/);
  });

  // 应该根据不同的props渲染正确的组件
  test('should render the correct icon based on different props', async () => {
    const { getByTestId } = render(Icon, {
      props: {
        icon: 'coffee',
        theme: 'success',
      },
      attrs: {
        'data-testid': 'xyicon',
      },
    });

    const element = getByTestId('xyicon');

    expect(element.className).toMatch(/xy-icon-success/);
  });
});
