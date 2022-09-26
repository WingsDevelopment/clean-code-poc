import Grid from '@mui/material/Grid';
import React from 'react';
import DefaultCard from '../cards/DefaultCard';
import { LoadableCardWrapper } from '../cards/LoadableCardWrapper';

interface Props {
  isLoading: boolean;
  errorMessage?: string | undefined;
  children: React.ReactNode;
}

const DefaultDetailsLayout: React.FC<Props> = ({ children, isLoading, errorMessage }) => (
  <LoadableCardWrapper isLoading={isLoading} errorMessage={errorMessage}>
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <DefaultCard>{children}</DefaultCard>
      </Grid>
    </Grid>
  </LoadableCardWrapper>
);

export default DefaultDetailsLayout;
