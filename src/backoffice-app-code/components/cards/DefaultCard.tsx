import { Card, Grid } from '@mui/material';

interface Props {
  children: React.ReactNode;
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

const DefaultCard: React.FC<Props> = ({ children, size = 7 }) => (
  <Grid item xs={12} md={size}>
    <Card sx={{ p: 3, overflow: 'visible' }}>{children}</Card>
  </Grid>
);

export default DefaultCard;
