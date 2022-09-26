import Grid from '@mui/material/Grid';
import useSettings from 'src/theme-code/hooks/useSettings';
import DefaultSingleColumnBox from '../boxs/DefaultSingleColumnBox';
import { GenericErrorAndLoadingHandler } from '../progressBars/GenericErrorAndLoadingHandler';
import DefaultCard from './DefaultCard';

export const LoadingCard = () => {
  const { themeStretch } = useSettings();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={themeStretch ? 6 : 8}>
        <DefaultCard>
          <DefaultSingleColumnBox>
            <GenericErrorAndLoadingHandler isLoading={true} errorMessage={undefined} />
          </DefaultSingleColumnBox>
        </DefaultCard>
      </Grid>
    </Grid>
  );
};
