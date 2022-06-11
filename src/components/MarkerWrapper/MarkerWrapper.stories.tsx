import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Marker} from "react-leaflet";


const Template: ComponentStory<typeof Marker> = (args) => {
  return <Marker {...args} />;
};

const TemplateWithIcon: ComponentStory<typeof Marker> = (args) => {
  return (
    <>
      <Marker {...args} />
      <br />
      <br />
    </>
  );
};

export default {
  title: 'FORMS/Input',
  component: Marker,
  parameters: {
    controls: {
      sort: 'alpha',
      expanded: true,
    },
  },
  argTypes: {
    value: {
      description: 'Содержимое текстового поля',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    type: {
      description: 'Тип отображения данных текстового поля',
      options: ['text', 'password', 'number'],
      control: {
        type: 'radio',
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    icon: {
      description: 'React-элемент, содержащий иконку',
    },
    disabled: {
      description: 'Включен или отключен элемент',
      options: [true, false],
      control: {
        type: 'boolean',
      },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    status: {
      description: 'Показывает правильные ли введены данные',
      options: ['none', 'success', 'error'],
      control: {
        type: 'radio',
        defaultValue: 'success',
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'none' },
      },
    },
    placeholder: {
      description: 'Текст отображаемый как placeholder',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    iconPosition: {
      description: 'Расположение иконки, в начале или в конце элемента',
      options: ['start', 'end'],
      control: {
        type: 'inline-radio',
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'start' },
      },
    },
    onChange: {
      description: 'Функция вызываемая при изменении содержимого поля',
      table: {
        type: { summary: 'Function' },
        defaultValue: { summary: '() => {}' },
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
} as ComponentMeta<typeof Marker>;
} as ComponentMeta<typeof Marker>;

const props = {
  status: 'none',
  type: 'text',
  placeholder: 'Input your text ...',
};

export const Simple = Template.bind({});
Simple.args = {
  ...Simple.args,
  ...props,
};

export const Icon = TemplateWithIcon.bind({});
Icon.args = {
  ...Icon.args,
  ...props,
};
