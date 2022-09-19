// form
import { useFormContext, Controller, UseFormSetValue } from 'react-hook-form';
// @mui
import { FormHelperText } from '@mui/material';
import { UploadMultiFile, UploadMultiFileProps } from '../upload';
import { useCallback } from 'react';
import { DefaultFormLabel } from '../labels/DefaultFormLabel';
import { toBase64 } from 'src/backoffice-app-code/utils/fileUtils';

interface RHFUploadMultiFileProps extends Omit<UploadMultiFileProps, 'files'> {
  name: string;
  label: string;
  setValue: UseFormSetValue<any>;
}

export function RHFMultiImageUpload({ name, label, setValue, ...other }: RHFUploadMultiFileProps) {
  const { control, watch } = useFormContext();

  // const handleDrop = useCallback(
  //   async (acceptedFiles) => {
  //     const images = watch(name) || [];

  //     const base64Images = await Promise.all(
  //       acceptedFiles.map(async (file: any) => {
  //         const base64 = await toBase64(file);
  //         return base64;
  //       })
  //     );

  //     setValue('images', [...images, ...base64Images]);
  //   },
  //   [name, setValue, watch]
  // );

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const images = watch(name) || [];

      setValue(name, [
        ...images,
        ...acceptedFiles.map((file: any) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
    },
    [name, setValue, watch]
  );
  const handleRemoveAll = () => {
    setValue(name, []);
  };

  const handleRemove = (file: File | string) => {
    const filteredItems = watch(name).images?.filter((_file: any) => _file !== file);
    setValue(name, filteredItems);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const checkError = !!error && field.value?.length === 0;

        return (
          <div>
            <DefaultFormLabel>{label}</DefaultFormLabel>

            <UploadMultiFile
              showPreview
              accept="image/*"
              files={field.value}
              error={checkError}
              maxSize={3145728}
              //todo dodaj ovo
              onDrop={handleDrop}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
              onUpload={() => console.log('ON UPLOAD')}
              helperText={
                checkError && (
                  <FormHelperText error sx={{ px: 2 }}>
                    {error?.message}
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
