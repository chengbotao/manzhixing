import { fireEvent, render } from '@testing-library/vue';
import Input from './index';

describe('Input component', () => {
  it('should render the correct default Input', () => {
    const { getByTestId } = render(Input, {
      props: {
        placeholder: 'default Input',
      },
      attrs: {
        'data-testid': 'xyinput',
      },
    });

    const element = getByTestId('xyinput') as HTMLInputElement;
    expect(element.className).toMatch(/xy-input-inner/);
    fireEvent.change(element, { target: { value: '23' } });
    expect(element.value).toEqual('23');
  });
  it('should render the disabled Input on disabled property', () => {
    const { getByTestId } = render(Input, {
      props: {
        placeholder: 'disabled Input',
        disabled: true,
      },
      attrs: {
        'data-testid': 'xyinput',
      },
    });

    const element = getByTestId('xyinput') as HTMLInputElement;
    expect(element.disabled).toBeTruthy();
  });
  it('should render different input sizes on size property', () => {
    const { getByTestId } = render(Input, {
      props: {
        placeholder: 'disabled Input',
        sized: 'sm',
      },
      attrs: {
        'data-testid': 'xyinput',
      },
    });
    const element = getByTestId('xyinput') as HTMLInputElement;
    expect(element.parentElement!.className).toMatch('xy-input-size-sm');
  });
  it('should render prepend and append element on prepend/append property', () => {
    const { getByTestId } = render(Input, {
      props: {
        placeholder: 'disabled Input',
        sized: 'sm',
      },
      attrs: {
        'data-testid': 'xyinput',
      },
      slots: {
        prepend: 'https://',
        append: '.com',
      },
    });
    const element = getByTestId('xyinput') as HTMLInputElement;
    const inputContainer = element.parentElement!;
    expect(inputContainer.className).toMatch(
      'xy-input-group xy-input-group-append xy-input-group-prepend'
    );
  });
});
