/*
 * @Author: Chengbotao
 * @Date: 2022-11-17 13:42:37
 */

import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
const wrapperStyle: React.CSSProperties = {
  padding: '20px 40px'
}

const storyWrapper = (stroyFn: any) => (
  <div style={wrapperStyle}>
    {stroyFn()}
  </div>
)
addDecorator(storyWrapper)
addDecorator(withInfo)
addParameters({ info: { 
    inline: true, 
    header: false 
  } 
})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}