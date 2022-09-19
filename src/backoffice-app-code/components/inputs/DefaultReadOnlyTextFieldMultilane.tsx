import { TextField, TextFieldProps } from '@mui/material';

interface IProps {
  label: string;
  value: string | number | undefined;
}

type Props = IProps & TextFieldProps;

const DefaultReadOnlyTextFieldMultilane: React.FC<Props> = ({ label, value, ...other }) => (
  <TextField
    multiline
    rows={other.rows || 2}
    value={value || '/'}
    label={label}
    contentEditable={false}
    suppressContentEditableWarning={true}
  />
);

export default DefaultReadOnlyTextFieldMultilane;
