import DefaultSizeIconify from '../icons/DefaultSizeIconify';
import { Button } from '@mui/material';

interface Props {
  label: string;
  onClick: () => void;
}

const TableButtonWithDetailsIcon: React.FC<Props> = ({ label, onClick }) => (
  <Button variant="outlined" onClick={onClick}>
    <DefaultSizeIconify
      icon="clarity:details-line"
      props={{
        mr: 1,
      }}
    />
    {label}
  </Button>
);

export default TableButtonWithDetailsIcon;
