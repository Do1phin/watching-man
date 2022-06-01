import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { Issue } from './Issue';

const Template: ComponentStory<typeof Issue> = (args) => {
  return (
    <BrowserRouter>
      <Issue {...args} />
    </BrowserRouter>
  );
};

export default {
  title: 'ISSUES/Issue',
  component: Issue,
  parameters: {
    controls: {
      sort: 'alpha',
      expanded: true,
    },
  },
  argTypes: {
    title: {
      description: 'Название обращения',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    description: {
      description: 'Подробное описание обращения',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    city: {
      description: 'Название города',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    status: {
      description: 'Показывает состояние запроса',
      options: ['pending', 'working', 'completed', 'waiting'],
      control: {
        type: 'radio',
        defaultValue: 'pending',
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'none' },
      },
    },
    onClick: {
      description: 'Функция вызываемая при клике на элемент',
      table: {
        type: { summary: 'Function' },
        defaultValue: { summary: '() => {}' },
      },
    },
  },
} as ComponentMeta<typeof Issue>;

const props = {
  title: 'Неразорвавшийся боеприпас',
  city: 'Киев, Оболоньский район',
  description: 'Во дворе первого подъезда торчит неразорвавшийся боеприпас ...',
};

export const Simple = Template.bind({});
Simple.args = {
  ...Simple.args,
  ...props,
};
