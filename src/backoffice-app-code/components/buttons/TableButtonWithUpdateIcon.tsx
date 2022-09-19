import DefaultSizeIconify from '../icons/DefaultSizeIconify';
import { LoadingButton } from '@mui/lab';

interface Props {
  label: string;
  onClick: () => void;
  isDeleting: boolean;
}

const TableButtonWithUpdateIcon: React.FC<Props> = ({ label, onClick, isDeleting }) => (
  <LoadingButton variant="outlined" onClick={onClick} loading={isDeleting}>
    <DefaultSizeIconify
      icon="clarity:update-line"
      props={{
        mr: 1,
      }}
    />
    {label}
  </LoadingButton>
);

export default TableButtonWithUpdateIcon;
