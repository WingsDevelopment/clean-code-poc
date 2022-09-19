import { useNavigate } from 'react-router';
import { Button } from '@mui/material';
import DefaultSizeIconify from '../icons/DefaultSizeIconify';

interface Props {
  label: string;
  route: string;
}

const RedirectButtonWithUpdateIcon: React.FC<Props> = ({ label, route }) => {
  const navigate = useNavigate();

  return (
    <Button variant="contained" onClick={() => navigate(route)}>
      <DefaultSizeIconify
        icon="clarity:update-line"
        props={{
          mr: 1,
        }}
      />
      {label}
    </Button>
  );
};

export default RedirectButtonWithUpdateIcon;
