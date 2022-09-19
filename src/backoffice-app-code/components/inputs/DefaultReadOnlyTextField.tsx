import { TextField } from '@mui/material';

interface Props {
  label: string;
  value: string | number | undefined;
}

const DefaultReadOnlyTextField: React.FC<Props> = ({ label, value }) => (
  <TextField
    value={value || '/'}
    label={label}
    contentEditable={false}
    suppressContentEditableWarning={true}
  />
);

export default DefaultReadOnlyTextField;
