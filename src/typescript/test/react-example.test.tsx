/**
 * @jest-environment jsdom
 */

import React from 'react';
import {render} from '@testing-library/react';
import {MyComponent} from './react-example';

describe('MyComponent', () => {
  it('should render', () => {
    const {container} = render(<MyComponent />);
    expect(container.textContent).toEqual('Hello, world!');
  });
});
