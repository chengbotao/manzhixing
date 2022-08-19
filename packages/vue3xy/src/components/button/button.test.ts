/*
 * @Author: Chengbotao
 * @Date: 2022-11-17 10:27:17
 */
import { render } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import Button from './index';

describe('Button Component', () => {
  // 应呈现正确的默认按钮
  test('should render the correct default button', async () => {
    const { getByText, emitted } = render(Button, {
      slots: {
        default: 'Default Button',
      },
    });

    const element = getByText('Default Button') as HTMLButtonElement;

    expect(element.tagName).toEqual('BUTTON');
    expect(element.disabled).toBeFalsy();
    expect(element.className).toMatch(/xy-button xy-button-default/);
    await userEvent.click(element);
    expect(emitted('click')).toBeTruthy();
  });

  // 应该根据不同的props渲染正确的组件
  test('should render the correct component based on different props', () => {
    const { getByText } = render(Button, {
      slots: {
        default: 'Primary Button',
      },
      props: {
        btnType: 'primary',
        size: 'lg',
        className: 'xy-custom-btn',
      },
    });

    const element = getByText('Primary Button') as HTMLButtonElement;

    expect(element.className).toMatch(/xy-button xy-custom-btn xy-button-primary xy-button-lg/);
  });

  // 当 btnType 等于 link 并提供 href 时，应该呈现一个 A 标签
  test('should render a link when btnType equals link and href is provided', () => {
    const { getByText } = render(Button, {
      slots: {
        default: 'Link Button',
      },
      props: {
        btnType: 'link',
        href: '#',
      },
    });
    const element = getByText('Link Button') as HTMLAnchorElement;

    expect(element.tagName).toEqual('A');
    expect(element.className).toMatch(/xy-button xy-button-link/);
  });

  // 应呈现禁用按钮当 disabled 设置为 true
  test('should render disabled button when disabled set to true', async () => {
    const { getByText, emitted } = render(Button, {
      slots: {
        default: 'Disabled Button',
      },
      props: {
        disabled: true,
      },
    });
    const element = getByText('Disabled Button') as HTMLButtonElement;

    expect(element.disabled).toBeTruthy();
    await userEvent.click(element);
    expect(emitted('click')).toBeFalsy();
  });
});
