import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Input } from './Input';
import { MyIcon } from './Icon';

const Template: ComponentStory<typeof Input> = (args) => {
  return <Input {...args} />;
};

const TemplateWithIcon: ComponentStory<typeof Input> = (args) => {
  return (
    <>
      <Input icon={<MyIcon />} iconPosition='start' {...args} />
      <br />
      <br />
      <Input icon={<MyIcon />} iconPosition='end' {...args} />
    </>
  );
};

export default {
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
      description: 'Включен или отключен элемент',
      options: [true, false],
      table: {
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
    },
    icon: {
      description: 'React-элемент, содержащий иконку',
    },
    iconPosition: {
      control: {
        type: 'inline-radio',
      },
      description: 'Расположение иконки, в начале или в конце элемента',
      options: ['start', 'end'],
      table: {
        defaultValue: { summary: 'start' },
        type: { summary: 'string' },
      },
    },
    onChange: {
      description: 'Функция вызываемая при изменении содержимого поля',
      table: {
        defaultValue: { summary: '() => {}' },
        type: { summary: 'Function' },
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
      description: 'Текст отображаемый как placeholder',
      table: {
        defaultValue: { summary: '' },
        type: { summary: 'string' },
      },
    },
    status: {
      control: {
        defaultValue: 'success',
        type: 'radio',
      },
      description: 'Показывает правильные ли введены данные',
      options: ['none', 'success', 'error'],
      table: {
        defaultValue: { summary: 'none' },
        type: { summary: 'string' },
      },
    },
    textPosition: {
      control: {
        type: 'inline-radio',
      },
      description: 'Выравнивание текста в инпуте',
      options: ['left', 'center', 'right'],
      table: {
        defaultValue: { summary: 'left' },
        type: { summary: 'string' },
      },
    },
    type: {
      control: {
        type: 'radio',
      },
      description: 'Тип отображения данных текстового поля',
      options: ['text', 'password', 'number'],
      table: {
        defaultValue: { summary: 'text' },
        type: { summary: 'string' },
      },
    },
    value: {
      control: {
        type: 'text',
      },
      description: 'Содержимое текстового поля',
      table: {
        defaultValue: { summary: '' },
        type: { summary: 'string' },
      },
    },
  },
  component: Input,
  parameters: {
    controls: {
      expanded: true,
      sort: 'alpha',
    },
  },
  title: 'FORMS/Input',
} as ComponentMeta<typeof Input>;

const props = {
  placeholder: 'Input your text ...',
  status: 'none',
  textPosition: 'left',
  type: 'text',
};

export const Simple = Template.bind({
  ...props,
});

export const Icon = TemplateWithIcon.bind({
  ...props,
});
