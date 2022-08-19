/*
 * @Author: Chengbotao
 * @Date: 2022-11-19 23:48:27
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Input from './input';

const defaultInput = () => (
  <div>
    <Input
      placeholder="基础输入框"
      onChange={action('onChange')}
      onBlur={action('onBlur')}
      onFocus={action('onFocus')}
    ></Input>
  </div>
);
const inputWithSize = () => (
  <div>
    <Input sized="lg" placeholder="大型输入框"></Input>
    <Input sized="sm" placeholder="小型输入框"></Input>
  </div>
);

const inputWithDisabled = () => (
  <div>
    <Input disabled placeholder="禁用状态"></Input>
  </div>
);

const inputWithIcon = () => {
  return (
    <div>
      <Input placeholder="图标展示" icon="calendar-days"></Input>
    </div>
  );
};

const inputWithPrependAndAppend = () => {
  return (
    <div>
      <Input placeholder="前后缀内容添加" prepend="https://" append=".com"></Input>
    </div>
  );
};

storiesOf('Input<输入框>', module)
  .add('Input', defaultInput)
  .add('不同尺寸的 Input', inputWithSize)
  .add('禁用状态的 Input', inputWithDisabled)
  .add('带 Icon 的 Input', inputWithIcon)
  .add('前后自定内容的 Input', inputWithPrependAndAppend);
