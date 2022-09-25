import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import RHFSingleColumnFormCard from 'src/backoffice-app-code/components/cards/DefaultSingleColumnFormCard';
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
    <RHFSingleColumnFormCard
      methods={methods}
      onSubmit={handleSubmit(onSubmit)}
      isSubmitting={isLoading}
    >
      <RHFTextField
        name="title"
        rules={{ required: REQUIRED_FIELD_ERROR_MESSAGE }}
        label={'Naziv'}
      />
      <RHFTextField name="urlSlug" label={'Url slug'} />
      <RHFTextField name="orderInCarouselHomePage" label={'OrderInCarouselHomePage'} />
      <RHFTextFieldMultiline name="description" label={'opis'} />
    </RHFSingleColumnFormCard>
  );
};
