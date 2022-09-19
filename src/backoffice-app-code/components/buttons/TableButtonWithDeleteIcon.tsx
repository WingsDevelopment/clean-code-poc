import DefaultSizeIconify from '../icons/DefaultSizeIconify';
import { LoadingButton } from '@mui/lab';

interface Props {
  label: string;
  onClick: () => void;
  isDeleting: boolean;
}

const TableButtonWithDeleteIcon: React.FC<Props> = ({ label, onClick, isDeleting }) => (
  <LoadingButton variant="outlined" onClick={onClick} loading={isDeleting}>
    <DefaultSizeIconify
      icon="fluent:delete-16-regular"
      props={{
        mr: 1,
      }}
    />
    {label}
  </LoadingButton>
);

export default TableButtonWithDeleteIcon;
