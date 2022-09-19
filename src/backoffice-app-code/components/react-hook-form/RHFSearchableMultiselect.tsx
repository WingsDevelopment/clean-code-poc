import { Controller, useFormContext } from 'react-hook-form';
import Autocomplete from '@mui/material/Autocomplete';
import { TextField, TextFieldProps } from '@mui/material';
import Chip from '@mui/material/Chip';

type IProps = {
  name: string;
  label: string;
  options: { id: string; name: string }[];
  rules?: any;
};

type Props = IProps & TextFieldProps;

export default function RHFSearchableMultiselect({ name, label, options, rules, ...other }: Props) {
  const { control, watch } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      {...other}
      render={({ field }) => (
        <Autocomplete
          value={watch(name) || []}
          multiple
          isOptionEqualToValue={(option, value) => option.id === value}
          getOptionLabel={(option) => option.name}
          onChange={(event, newValue) => {
            field.onChange(
              newValue.map((item) => {
                if (typeof item === 'string') {
                  return item;
                }
                return item.id;
              })
            );
          }}
          options={options.map((option) => option)}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                {...getTagProps({ index })}
                key={index}
                size="small"
                label={options.find((item) => item.id === option)?.name}
              />
            ))
          }
          renderInput={(params) => <TextField label={label} {...params} />}
        />
      )}
    />
  );
}
