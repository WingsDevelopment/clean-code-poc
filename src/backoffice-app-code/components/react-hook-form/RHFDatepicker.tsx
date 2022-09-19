// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { TextField, TextFieldProps } from '@mui/material';
import { DatePicker } from '@mui/lab';

// ----------------------------------------------------------------------

type IProps = {
  name: string;
  rules?: any;
};

type Props = IProps & TextFieldProps;

export default function RHFDatepicker({ name, ...other }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      rules={other.rules}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <DatePicker
          label={other.label}
          value={value}
          onChange={onChange}
          renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => (
            <TextField
              error={!!error}
              helperText={error?.message}
              {...params}
              fullWidth
              sx={{
                maxWidth: { md: 700, sm: 300, xs: 200 },
              }}
            />
          )}
        />
      )}
    />
  );
}
