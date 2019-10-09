import React from 'react';
import {cleanup, render} from '@testing-library/react';
import TextInput from '../TextInput';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);


it('Enabled Name Input', () => {
  const {getByDisplayValue} = render(
    <TextInput title={'Name'} handleTextChange={(name: string) => {}} value={'TestName'} />,
  );
    getByDisplayValue('TestName');
});

it('Disabled Name Input', () => {
  
    const {getByDisplayValue} = render(
      <TextInput title={'Name'} value={'TestName'} />,
    );
       const textField = getByDisplayValue('TestName');
       expect(textField.getAttributeNames().includes('disabled')).toBeTruthy();
  });
