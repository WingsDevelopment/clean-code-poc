import Grid from '@mui/material/Grid';
import DefaultSingleColumnBox from '../boxs/DefaultSingleColumnBox';
import { GenericErrorAndLoadingHandler } from '../progressBars/GenericErrorAndLoadingHandler';
import DefaultCard from './DefaultCard';

interface Props {
  children?: React.ReactNode;
  isLoading?: boolean | undefined;
  errorMessage?: string | undefined;
}

//
const LoadableDetailsHandler: React.FC<Props> = ({ children, isLoading, errorMessage }) => {
  //error card
  //if loading return loading card
  //if error return error card
  //if no error and no loading return children <- (layout + data)
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

  //loadable card
  return (
    //details layout card
    <Grid container spacing={3}>
      <DefaultCard>
        <DefaultSingleColumnBox>{children}</DefaultSingleColumnBox>
      </DefaultCard>
    </Grid>
  );
};

export const DetailsLayoutCard: React.FC = ({ children }) => (
  <Grid container spacing={3}>
    <DefaultCard>
      <DefaultSingleColumnBox>{children}</DefaultSingleColumnBox>
    </DefaultCard>
  </Grid>
);

export const neskiUseCase = () => {
  return (
    <LoadableDetailsHandler>
      <DetailsLayoutCard>polje1 polje2</DetailsLayoutCard>
    </LoadableDetailsHandler>
  );
};

export default LoadableDetailsHandler;
