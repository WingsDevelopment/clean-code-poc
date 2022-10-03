import Grid from '@mui/material/Grid';
import React from 'react';
import DefaultCard from '../../cards/DefaultCard';
import MyFormProvider from './MyFormProvider';
import { UseFormReturn } from 'react-hook-form';
import DefaultFormCardFooter from '../../layouts/footers/DefaultFormCardFooter';

interface Props {
  isLoading: boolean;
  methods: UseFormReturn<any>;
  onSubmit?: VoidFunction;
}

//namingGGGG
const MyFormWithCardLayout: React.FC<Props> = ({ isLoading, children, methods, onSubmit }) => (
  <MyFormProvider methods={methods} onSubmit={onSubmit}>
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} spacing={3}>
        <DefaultCard>
          {children}
          <DefaultFormCardFooter isLoading={isLoading} />
        </DefaultCard>
      </Grid>
    </Grid>
  </MyFormProvider>
);

export default MyFormWithCardLayout;
