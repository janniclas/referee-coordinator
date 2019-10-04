import React from 'react';
import {cleanup, render} from '@testing-library/react';
import LevelInput from './LevelInput';
import { Level } from './RefereeInput';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('Displays R1 correctly', () => {
  
  const {getByDisplayValue} = render(
    <LevelInput editable={true} level={Level.R1} />,
  );
  getByDisplayValue("R1");
});

it('Displays R2 correctly', () => {
  
  const {getByDisplayValue} = render(
    <LevelInput editable={false} level={Level.R2} />,
  );
  getByDisplayValue("R2");
});