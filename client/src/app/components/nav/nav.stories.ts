import {
  Meta,
  StoryObj,
  applicationConfig,
  moduleMetadata,
} from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { PureNavComponent } from './pure-nav-component';
import { NavComponent } from './nav.component';

const meta: Meta<NavComponent> = {
  component: NavComponent,
  title: 'PureNavComponent',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<NavComponent>;

export const LoggedIn: Story = {
  args: {
    user: { name: 'Sumedh S Bhat' },
  },
};

export const Default: Story = {
  args: {},
};
