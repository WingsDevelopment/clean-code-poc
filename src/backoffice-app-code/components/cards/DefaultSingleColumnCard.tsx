import React from 'react';
import DefaultSingleColumnBox from '../boxs/DefaultSingleColumnBox';
import DefaultCard from './DefaultCard';

interface Props {
  children: React.ReactNode;
  size: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

const DefaultSingleColumnCard: React.FC<Props> = ({ children, size = 7 }) => (
  <DefaultCard size={size}>
    <DefaultSingleColumnBox>{children}</DefaultSingleColumnBox>
  </DefaultCard>
);

export default DefaultSingleColumnCard;
