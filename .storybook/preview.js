import React from 'react';
import { addDecorator } from '@storybook/react';
import { global as designSystemGlobal } from 'thuongho-learnstorybook-design-system';

import '../src/index.css';

const { GlobalStyle } = designSystemGlobal;

addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
));
