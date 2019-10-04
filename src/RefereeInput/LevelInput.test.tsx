import React from 'react';
import {cleanup, render} from '@testing-library/react';
import LevelInput from './LevelInput';
import { Level } from './RefereeInput';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('Displays R1 correctly', () => {
  
  const {getByDisplayValue} = render(
    <LevelInput handleLevelChange={(level: Level) => {}} level={Level.R1} />,
  );
  getByDisplayValue("R1");
});

it('Displays R2 correctly', () => {
  
  const {getByDisplayValue} = render(
    <LevelInput level={Level.R2} />,
  );
  getByDisplayValue("R2");
});