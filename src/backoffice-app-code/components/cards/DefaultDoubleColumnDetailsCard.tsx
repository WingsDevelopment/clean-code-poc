import Grid from '@mui/material/Grid';
import DefaultDoubleColumnBox from '../boxs/DefaultDoubleColumnBox';
import { GenericErrorAndLoadingHandler } from '../progressBars/GenericErrorAndLoadingHandler';
import DefaultCard from './DefaultCard';

interface Props {
  children: React.ReactNode;
  isLoading?: boolean | undefined;
  errorMessage?: string | undefined;
}

const DefaultDoubleColumnDetailsCard: React.FC<Props> = ({ children, isLoading, errorMessage }) => {
  if (isLoading || errorMessage) {
    return (
      <Grid container spacing={3}>
        <DefaultCard>
          <DefaultDoubleColumnBox>
            <GenericErrorAndLoadingHandler
              isLoading={isLoading || false}
              errorMessage={errorMessage}
            />
          </DefaultDoubleColumnBox>
        </DefaultCard>
      </Grid>
    );
  }

  return (
    <Grid container spacing={3}>
      <DefaultCard>
        <DefaultDoubleColumnBox>{children}</DefaultDoubleColumnBox>
      </DefaultCard>
    </Grid>
  );
};

export default DefaultDoubleColumnDetailsCard;
