import { LoadingButton } from '@mui/lab';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router';

interface Props {
  isLoading: boolean;
}

const DefaultFormCardFooter: React.FC<Props> = ({ isLoading }) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        mt: 2,
        justifyContent: 'space-between',
      }}
    >
      <LoadingButton
        size="medium"
        onClick={() => navigate(-1)}
        variant="contained"
        loading={isLoading}
      >
        Nazad
      </LoadingButton>
      <LoadingButton size="medium" type="submit" variant="contained" loading={isLoading}>
        Sačuvaj
      </LoadingButton>
    </Box>
  );
};

export default DefaultFormCardFooter;
