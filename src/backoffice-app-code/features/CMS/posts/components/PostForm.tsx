import { LoadingButton } from '@mui/lab';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RHFSwitch, RHFTextField } from 'src/backoffice-app-code/components/react-hook-form';
import RHFEditor from 'src/backoffice-app-code/components/react-hook-form/RHFEditor';
import RHFSearchableMultiselect from 'src/backoffice-app-code/components/react-hook-form/RHFSearchableMultiselect';
import { RHFSingleImageUpload } from 'src/backoffice-app-code/components/react-hook-form/RHFSingleImageUpload';
import RHFTextFieldMultiline from 'src/backoffice-app-code/components/react-hook-form/RHFTextFieldMultiline';
import { FormPost } from '../models/FormPost';
import { Tag } from '../../tags/models/Tag';
import Grid from '@mui/material/Grid';
import MyFormProvider from 'src/backoffice-app-code/components/form/formProviders/MyFormProvider';
import DefaultCard from 'src/backoffice-app-code/components/cards/DefaultCard';
import SingleColumnBox from 'src/backoffice-app-code/components/boxs/SingleColumnBox';

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
    <Grid container spacing={3}>
      <MyFormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid item xs={12} md={8}>
          <DefaultCard>
            <SingleColumnBox>
              <Typography variant="h6">Napravi objavu</Typography>
              <RHFTextField name="title" label="Naziv objave" />
              <RHFEditor name="styledTitle" label="Stilizovan naziv" />
              <RHFEditor name="content" label="Sadrzaj" />
              <RHFSingleImageUpload name="imagePath" label="Slika" setValue={setValue} />
            </SingleColumnBox>
          </DefaultCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <DefaultCard>
            <SingleColumnBox>
              <Typography variant="h6">Dodatni podaci objave</Typography>

              <RHFTextFieldMultiline name="description" label="Opis objave" />
              <RHFSearchableMultiselect
                name="categories"
                label="Kategorije"
                options={
                  CATEGORIES
                    ? CATEGORIES.map((option) => ({ id: option.value, name: option.label }))
                    : []
                }
              />
              <RHFSearchableMultiselect
                name="tags"
                label="Tagovi"
                options={
                  allTags ? allTags.map((option) => ({ id: option.id, name: option.title })) : []
                }
              />
              <RHFTextField name="urlSlug" label="URL" />
              <RHFTextField name="metaTitle" label="Meta naziv" />
              <RHFTextField name="metaDescription" label="Meta opis" />
              <RHFSwitch name="isVisible" label="Vidljiv" labelPlacement="start" />

              <LoadingButton size="medium" type="submit" variant="contained" loading={isLoading}>
                Sačuvaj
              </LoadingButton>
            </SingleColumnBox>
          </DefaultCard>
        </Grid>
      </MyFormProvider>
    </Grid>
  );
};
