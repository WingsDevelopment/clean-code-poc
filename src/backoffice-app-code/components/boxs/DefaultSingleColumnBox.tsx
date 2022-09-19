import { Box } from '@mui/material';

const DefaultSingleColumnBox: React.FC = ({ children }) => (
  <Box
    sx={{
      display: 'grid',
      columnGap: 2,
      rowGap: 3,
      mt: 3,
      gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)' },
    }}
  >
    {children}
  </Box>
);

export default DefaultSingleColumnBox;
