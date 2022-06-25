import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { Issue } from '../index';

const Template: ComponentStory<typeof Issue> = (args) => {
  return (
    <BrowserRouter>
      <Issue {...args} />
    </BrowserRouter>
  );
};

export default {
  argTypes: {
    city: {
      control: {
        type: 'text',
      },
      description: 'Название города',
      table: {
        defaultValue: { summary: 'text' },
        type: { summary: 'string' },
      },
    },
    description: {
      control: {
        type: 'text',
      },
      description: 'Подробное описание обращения',
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
    status: {
      control: {
        defaultValue: 'pending',
        type: 'radio',
      },
      description: 'Показывает состояние запроса',
      options: ['pending', 'working', 'completed', 'waiting'],
      table: {
        defaultValue: { summary: 'none' },
        type: { summary: 'string' },
      },
    },
    title: {
      control: {
        type: 'text',
      },
      description: 'Название обращения',
      table: {
        defaultValue: { summary: 'text' },
        type: { summary: 'string' },
      },
    },
  },
  component: Issue,
  parameters: {
    controls: {
      expanded: true,
      sort: 'alpha',
    },
  },
  title: 'ISSUES/Issue',
} as ComponentMeta<typeof Issue>;

const props = {
  city: 'Киев, Оболоньский район',
  description: 'Во дворе первого подъезда торчит неразорвавшийся боеприпас ...',
  title: 'Неразорвавшийся боеприпас',
};

export const Simple = Template.bind({
  ...props,
});
