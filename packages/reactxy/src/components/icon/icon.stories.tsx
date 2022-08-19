/*
 * @Author: Chengbotao
 * @Date: 2022-11-17 22:53:28
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from './icon';

const defaultIcon = () => (
  <div>
    <Icon icon="coffee"></Icon>
  </div>
);
const iconWithTheme = () => {
  return (
    <div>
      <Icon icon="coffee" theme="danger"></Icon>
      <Icon icon="coffee" theme="secondary"></Icon>
      <Icon icon="coffee" theme="success"></Icon>
      <Icon icon="coffee" theme="info"></Icon>
      <Icon icon="coffee" theme="warning"></Icon>
      <Icon icon="coffee" theme="light"></Icon>
      <Icon icon="coffee" theme="dark"></Icon>
    </div>
  );
};

const iconWithSize = () => {
  return (
    <div>
      <Icon icon="coffee" size="2xs"></Icon>
      <Icon icon="coffee"></Icon>
      <Icon icon="coffee" size="2xl"></Icon>
      <Icon icon="coffee" size="10x"></Icon>
    </div>
  );
};

storiesOf('Icon<图标>', module)
  .add('Icon', defaultIcon)
  .add('不同主题的 Icon', iconWithTheme)
  .add('不同尺寸的 Icon', iconWithSize);
