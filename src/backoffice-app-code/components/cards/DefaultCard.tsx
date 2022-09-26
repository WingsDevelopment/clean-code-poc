import { Card } from '@mui/material';

interface Props {
  children: React.ReactNode;
}

const DefaultCard: React.FC<Props> = ({ children }) => (
  <Card sx={{ p: 3, overflow: 'visible' }}>{children}</Card>
);

export default DefaultCard;
