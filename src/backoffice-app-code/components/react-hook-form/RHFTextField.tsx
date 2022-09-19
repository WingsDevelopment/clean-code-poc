// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { TextField, TextFieldProps } from '@mui/material';

// ----------------------------------------------------------------------

type IProps = {
  name: string;
  rules?: any;
};

type Props = IProps & TextFieldProps;

export default function RHFTextField({ name, ...other }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={other.rules}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          value={field.value || ''}
          fullWidth
          error={!!error}
          helperText={error?.message}
          {...other}
        />
      )}
    />
  );
}
