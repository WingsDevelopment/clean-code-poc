import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import SingleColumnBox from 'src/backoffice-app-code/components/boxs/SingleColumnBox';
import MyFormProviderWithCardLayout from 'src/backoffice-app-code/components/form/formProviders/MyFormWithCardLayout';
import { RHFTextField } from 'src/backoffice-app-code/components/react-hook-form';
import RHFTextFieldMultiline from 'src/backoffice-app-code/components/react-hook-form/RHFTextFieldMultiline';
import { REQUIRED_FIELD_ERROR_MESSAGE } from 'src/backoffice-app-code/utils/staticData';
import { FormTag } from '../models/FormTag';

interface Props {
  isLoading: boolean;
  submitHandler: (formTagData: FormTag) => Promise<void>;
  initialData: FormTag | undefined;
}

export const TagForm: React.FC<Props> = ({ isLoading, submitHandler, initialData }) => {
  const methods = useForm<FormTag>({
    defaultValues: initialData,
  });
  const { reset, handleSubmit } = methods;

  const onSubmit: SubmitHandler<FormTag> = async (tag: FormTag) => {
    await submitHandler(tag);
  };

  useEffect(() => {
    reset(initialData);
  }, [initialData, reset]);

  return (
    <MyFormProviderWithCardLayout
      isLoading={isLoading}
      methods={methods}
      onSubmit={handleSubmit(onSubmit)}
    >
      <SingleColumnBox>
        <RHFTextField
          name="title"
          rules={{ required: REQUIRED_FIELD_ERROR_MESSAGE }}
          label={'Naziv'}
        />
        <RHFTextField name="urlSlug" label={'Url slug'} />
        <RHFTextField name="orderInCarouselHomePage" label={'OrderInCarouselHomePage'} />
        <RHFTextFieldMultiline name="description" label={'opis'} />
      </SingleColumnBox>
    </MyFormProviderWithCardLayout>
  );
};
