import { TextField, TextFieldProps } from '@mui/material';
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form';

type IProps = {
  name: string;
  options: { label: string; value: string | number }[] | undefined;
  rules?: RegisterOptions;
  hasEmptyFirstOption?: boolean | undefined;
};

type Props = IProps & TextFieldProps;

export default function RHFSelectWithOptions({
  name,
  options,
  rules,
  hasEmptyFirstOption,
  ...other
}: Props) {
  const { control } = useFormContext();

  if (!options) return <span>{name} : Options_are_loading. . .</span>;
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          select
          fullWidth
          SelectProps={{ native: true }}
          error={!!error}
          helperText={error?.message}
          {...other}
        >
          {hasEmptyFirstOption && <option value="" disabled />}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      )}
    />
  );
}
