import React from 'react';
import {cleanup, render} from '@testing-library/react';
import NameInput from './NameInput';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);


it('Enabled Name Input', () => {
  const {getByDisplayValue} = render(
    <NameInput handleNameChange={(name: string) => {}} name={'TestName'} />,
  );
    getByDisplayValue('TestName');
});

it('Disabled Name Input', () => {
  
    const {getByDisplayValue} = render(
      <NameInput name={'TestName'} />,
    );
       const textField = getByDisplayValue('TestName');
       expect(textField.getAttributeNames().includes('disabled')).toBeTruthy();
  });
