import Grid from '@mui/material/Grid';
import { UseFormReturn } from 'react-hook-form';
import { FormProvider } from '../react-hook-form';

interface Props {
  methods: UseFormReturn<any, any>;
  onSubmit: VoidFunction | undefined;
}

const DefaultMultiCardFormContainer: React.FC<Props> = ({ children, methods, onSubmit }) => (
  <FormProvider methods={methods} onSubmit={onSubmit}>
    <Grid container spacing={3}>
      {children}
    </Grid>
  </FormProvider>
);

export default DefaultMultiCardFormContainer;
