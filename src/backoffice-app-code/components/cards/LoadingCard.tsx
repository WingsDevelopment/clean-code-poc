import Grid from '@mui/material/Grid';
import useSettings from 'src/theme-code/hooks/useSettings';
import SingleColumnBox from '../boxs/SingleColumnBox';
import { GenericErrorAndLoadingHandler } from '../progressBars/GenericErrorAndLoadingHandler';
import DefaultCard from './DefaultCard';

export const LoadingCard = () => {
  const { themeStretch } = useSettings();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={themeStretch ? 6 : 8}>
        <DefaultCard>
          <SingleColumnBox>
            <GenericErrorAndLoadingHandler isLoading={true} errorMessage={undefined} />
          </SingleColumnBox>
        </DefaultCard>
      </Grid>
    </Grid>
  );
};
