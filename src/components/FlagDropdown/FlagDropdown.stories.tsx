import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { FlagDropdown } from './FlagDropdown';

const Template: ComponentStory<typeof FlagDropdown> = (args) => {
  return (
    <BrowserRouter>
      <FlagDropdown {...args} />
    </BrowserRouter>
  );
};

export default {
  argTypes: {
    onClick: {
      description: 'Функция вызываемая при клике на элемент',
      table: {
        defaultValue: { summary: '() => {}' },
        type: { summary: 'Function' },
      },
    },
  },
  component: FlagDropdown,
  parameters: {
    controls: {
      expanded: true,
      sort: 'alpha',
    },
  },
  title: 'Flag/FlagDropdown',
} as ComponentMeta<typeof FlagDropdown>;

const props = {};

export const WithTitle = Template.bind({
  ...props,
});
