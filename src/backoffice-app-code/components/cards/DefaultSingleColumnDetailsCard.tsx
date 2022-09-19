import Grid from '@mui/material/Grid';
import DefaultSingleColumnBox from '../boxs/DefaultSingleColumnBox';
import { GenericErrorAndLoadingHandler } from '../progressBars/GenericErrorAndLoadingHandler';
import DefaultCard from './DefaultCard';

interface Props {
  children?: React.ReactNode;
  isLoading?: boolean | undefined;
  errorMessage?: string | undefined;
}

const DefaultSingleColumnDetailsCard: React.FC<Props> = ({ children, isLoading, errorMessage }) => {
  if (isLoading || errorMessage) {
    return (
      <Grid container spacing={3}>
        <DefaultCard size={6}>
          <DefaultSingleColumnBox>
            <GenericErrorAndLoadingHandler
              isLoading={isLoading || false}
              errorMessage={errorMessage}
            />
          </DefaultSingleColumnBox>
        </DefaultCard>
      </Grid>
    );
  }

  return (
    <Grid container spacing={3}>
      <DefaultCard>
        <DefaultSingleColumnBox>{children}</DefaultSingleColumnBox>
      </DefaultCard>
    </Grid>
  );
};

export default DefaultSingleColumnDetailsCard;
