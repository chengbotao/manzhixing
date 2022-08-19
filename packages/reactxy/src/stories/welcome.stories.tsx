/*
 * @Author: Chengbotao
 * @Date: 2022-11-17 13:54:25
 */
import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Welcome page', module).add(
  'welcome',
  () => {
    return (
      <>
        <h1>欢迎来到 React Botaoxy Design 组件库</h1>
      </>
    );
  },
  { info: { disable: true } }
);
