import { Controller, useFormContext, UseFormSetValue } from 'react-hook-form';
import { UploadProps, UploadSingleFile } from '../upload';
import { FormHelperText } from '@mui/material';
import { useCallback } from 'react';
import { DefaultFormLabel } from '../labels/DefaultFormLabel';
import { toBase64 } from 'src/backoffice-app-code/utils/fileUtils';

interface Props extends Omit<UploadProps, 'file'> {
  name: string;
  label: string;
  setValue: UseFormSetValue<any>;
}

export function RHFSingleImageUpload({ name, label, setValue, ...other }: Props) {
  const { control } = useFormContext();

  const handleDrop = useCallback(
    async (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (!file) return;

      const base64 = await toBase64(file);
      setValue(name, base64);
    },
    [setValue, name]
  );

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const checkError = !!error && !field.value;

        return (
          <div>
            <DefaultFormLabel>{label}</DefaultFormLabel>

            <UploadSingleFile
              accept="image/*"
              maxSize={3145728}
              file={field.value}
              error={checkError}
              onDrop={handleDrop}
              helperText={
                checkError && (
                  <FormHelperText error sx={{ px: 2 }}>
                    {error.message}
                  </FormHelperText>
                )
              }
              {...other}
            />
          </div>
        );
      }}
    />
  );
}
