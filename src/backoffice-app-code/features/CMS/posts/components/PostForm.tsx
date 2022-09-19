import { LoadingButton } from '@mui/lab';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import DefaultMultiCardFormContainer from 'src/backoffice-app-code/components/cards/DefaultMultiCardFormContainer';
import DefaultSingleColumnCard from 'src/backoffice-app-code/components/cards/DefaultSingleColumnCard';
import { RHFSwitch, RHFTextField } from 'src/backoffice-app-code/components/react-hook-form';
import RHFEditor from 'src/backoffice-app-code/components/react-hook-form/RHFEditor';
import RHFSearchableMultiselect from 'src/backoffice-app-code/components/react-hook-form/RHFSearchableMultiselect';
import { RHFSingleImageUpload } from 'src/backoffice-app-code/components/react-hook-form/RHFSingleImageUpload';
import RHFTextFieldMultiline from 'src/backoffice-app-code/components/react-hook-form/RHFTextFieldMultiline';
import { FormPost } from '../models/FormPost';
import { Tag } from '../../tags/models/Tag';

const CATEGORIES = [
  { label: 'Category 1', value: 'category-1' },
  { label: 'Category 2', value: 'category-2' },
  { label: 'Category 3', value: 'category-3' },
];

interface Props {
  isLoading: boolean;
  submitHandler: (formTagData: any) => Promise<void>;
  initialData: FormPost | undefined;
  allTags: Tag[] | undefined;
}

export const PostForm: React.FC<Props> = ({ isLoading, submitHandler, initialData, allTags }) => {
  const methods = useForm<any>({
    defaultValues: initialData,
  });
  //watch is used to watch for changes in the form
  //setValue is used to set the value of the image field
  const { reset, handleSubmit, setValue } = methods;

  const onSubmit: SubmitHandler<FormPost> = async (post: FormPost) => {
    await submitHandler(post);
  };

  useEffect(() => {
    reset(initialData);
  }, [initialData, reset]);

  return (
    <DefaultMultiCardFormContainer methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <DefaultSingleColumnCard size={8}>
        <Typography variant="h6">Napravi objavu</Typography>
        <RHFTextField name="title" label="Naziv objave" />
        <RHFEditor name="styledTitle" label="Stilizovan naziv" />
        <RHFEditor name="content" label="Sadrzaj" />
        <RHFSingleImageUpload name="imagePath" label="Slika" setValue={setValue} />
      </DefaultSingleColumnCard>

      <DefaultSingleColumnCard size={4}>
        <Typography variant="h6">Dodatni podaci objave</Typography>

        <RHFTextFieldMultiline name="description" label="Opis objave" />
        <RHFSearchableMultiselect
          name="categories"
          label="Kategorije"
          options={
            CATEGORIES ? CATEGORIES.map((option) => ({ id: option.value, name: option.label })) : []
          }
        />
        {/* todo: replace TAGS_OPTION with data from getAllTagsAsync query */}
        <RHFSearchableMultiselect
          name="tags"
          label="Tagovi"
          options={allTags ? allTags.map((option) => ({ id: option.id, name: option.title })) : []}
        />
        <RHFTextField name="urlSlug" label="URL" />
        <RHFTextField name="metaTitle" label="Meta naziv" />
        <RHFTextField name="metaDescription" label="Meta opis" />

        <RHFSwitch name="isVisible" label="Vidljiv" labelPlacement="start" />
        <LoadingButton size="medium" type="submit" variant="contained" loading={isLoading}>
          Sačuvaj
        </LoadingButton>
      </DefaultSingleColumnCard>
    </DefaultMultiCardFormContainer>
  );
};
