import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Uploader } from '../index';

const Template: ComponentStory<typeof Uploader> = (args) => {
  return <Uploader {...args} />;
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
  component: Uploader,
  parameters: {
    controls: {
      expanded: true,
      sort: 'alpha',
    },
  },
  title: 'Upload/Uploader',
} as ComponentMeta<typeof Uploader>;

const props = {};

export const Simple = Template.bind({
  ...props,
});
