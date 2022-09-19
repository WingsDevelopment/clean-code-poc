import Grid from '@mui/material/Grid';
import { UseFormReturn } from 'react-hook-form';
import useSettings from 'src/theme-code/hooks/useSettings';
import DefaultSingleColumnBox from '../boxs/DefaultSingleColumnBox';
import { FormProvider } from '../react-hook-form';
import DefaultCard from './DefaultCard';
import DefaultCardFooterButtonsContainer from './DefaultCardFooterButtonsContainer';

interface Props {
  methods: UseFormReturn<any, any>;
  onSubmit: VoidFunction | undefined;
  isSubmitting: boolean;
}

const DefaultSingleColumnFormCard: React.FC<Props> = ({
  children,
  methods,
  onSubmit,
  isSubmitting,
}) => {
  const { themeStretch } = useSettings();

  return (
    <Grid container spacing={3}>
      <DefaultCard size={themeStretch ? 6 : 8}>
        <FormProvider methods={methods} onSubmit={onSubmit}>
          <DefaultSingleColumnBox>{children}</DefaultSingleColumnBox>
          <DefaultCardFooterButtonsContainer isLoading={isSubmitting} />
        </FormProvider>
      </DefaultCard>
    </Grid>
  );
};
export default DefaultSingleColumnFormCard;
