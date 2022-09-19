import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

interface Props<T, OptionValueKey extends keyof T, OptionLabelKey extends keyof T> {
  name: string;
  label: string;
  data: { [key: string]: T[] };
  optionValueKey: OptionValueKey;
  optionLabelKey: OptionLabelKey;
  rules?: any;
  other?: any;
}

export const RHFCategorySelect = <T,>({
  name,
  label,
  data,
  optionValueKey,
  optionLabelKey,
  ...other
}: Props<T, keyof T, keyof T>) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={other.rules}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          select
          fullWidth
          label={label}
          SelectProps={{ native: true }}
          error={!!error}
          helperText={error?.message}
          {...other}
        >
          {Object.keys(data).map((key) => (
            <optgroup key={key} label={key}>
              {data[key].map((item: T, index) => (
                <option key={index} value={item[optionValueKey] as unknown as string}>
                  {item[optionLabelKey]}
                </option>
              ))}
            </optgroup>
          ))}
        </TextField>
      )}
    />
  );
};
