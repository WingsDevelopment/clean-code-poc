import Grid from '@mui/material/Grid';
import { UseFormReturn } from 'react-hook-form';
import DefaultDoubleColumnBox from '../boxs/DefaultDoubleColumnBox';
import { FormProvider } from '../react-hook-form';
import DefaultCard from './DefaultCard';
import DefaultCardFooterButtonsContainer from './DefaultCardFooterButtonsContainer';

interface Props {
  methods: UseFormReturn<any, any>;
  onSubmit: VoidFunction | undefined;
  isSubmitting: boolean;
}

const DefaultDoubleColumnFormCard: React.FC<Props> = ({
  children,
  methods,
  onSubmit,
  isSubmitting,
}) => (
  <Grid container spacing={3}>
    <DefaultCard>
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <DefaultDoubleColumnBox>{children}</DefaultDoubleColumnBox>
        <DefaultCardFooterButtonsContainer isLoading={isSubmitting} />
      </FormProvider>
    </DefaultCard>
  </Grid>
);

export default DefaultDoubleColumnFormCard;
