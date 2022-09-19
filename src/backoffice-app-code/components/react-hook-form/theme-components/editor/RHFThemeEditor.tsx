// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { FormHelperText } from '@mui/material';
import Editor, { Props as EditorProps } from '.';
//

// ----------------------------------------------------------------------

interface Props extends EditorProps {
  name: string;
}

export default function RHFThemeEditor({ name, ...other }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Editor
          id={name}
          value={field.value}
          onChange={field.onChange}
          error={!!error}
          helperText={
            <FormHelperText error sx={{ px: 2, textTransform: 'capitalize' }}>
              {error?.message}
            </FormHelperText>
          }
          {...other}
        />
      )}
    />
  );
}
