import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { SetCity } from './SetCity';

const Template: ComponentStory<typeof SetCity> = (args) => {
  return (
    <BrowserRouter>
      <SetCity {...args} />
    </BrowserRouter>
  );
};

export default {
  argTypes: {
    locality: {
      control: {
        type: 'text',
      },
      description: 'Населённый пункт',
      table: {
        defaultValue: { summary: 'text' },
        type: { summary: 'string' },
      },
    },
    onClick: {
      description: 'Функция вызываемая при клике на элемент',
      table: {
        defaultValue: { summary: '() => {}' },
        type: { summary: 'Function' },
      },
    },
    placeholder: {
      control: {
        type: 'text',
      },
      description: 'Плейсхолдер, который виден пока не выбран населённый пункт',
      table: {
        defaultValue: { summary: 'text' },
        type: { summary: 'string' },
      },
    },
  },
  component: SetCity,
  parameters: {
    controls: {
      expanded: true,
      sort: 'alpha',
    },
  },
  title: 'SetCity',
} as ComponentMeta<typeof SetCity>;

const props = {
  locality: 'Курахово',
};

export const Simple = Template.bind({
  ...props,
});
