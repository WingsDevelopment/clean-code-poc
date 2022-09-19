import DefaultPageWithBreadcrumbs from 'src/backoffice-app-code/components/page/DefaultPageWithBreadcrumbs';
import { Button } from '@mui/material';
import DefaultSingleColumnFormCard from 'src/backoffice-app-code/components/cards/DefaultSingleColumnFormCard';
import { SubmitHandler, useForm } from 'react-hook-form';
import RHFEditor from 'src/backoffice-app-code/components/react-hook-form/RHFEditor';
import { RHFSingleImageUpload } from 'src/backoffice-app-code/components/react-hook-form/RHFSingleImageUpload';
import { RHFCheckbox, RHFSwitch } from 'src/backoffice-app-code/components/react-hook-form';
import RHFSwitchAffiliated from 'src/backoffice-app-code/components/react-hook-form/RHFSwitchAffiliated';
import { useDataGroupedByKeyValue } from 'src/backoffice-app-code/utils/dataMutationsUtils';
import { RHFCategorySelect } from 'src/backoffice-app-code/components/react-hook-form/RHFCategorySelect';

// ----------------------------------------------------------------------

interface IDataWithCategories {
  id: number;
  name: string;
  categoryName: string;
}

const DATA_WITH_CATEGORIES: IDataWithCategories[] = [
  {
    id: 1,
    name: 'Nesto1',
    categoryName: 'Kategorija1',
  },
  {
    id: 2,
    name: 'Nesto2',
    categoryName: 'Kategorija1',
  },
  {
    id: 3,
    name: 'Nesto3',
    categoryName: 'Kategorija2',
  },
  {
    id: 4,
    name: 'Nesto4',
    categoryName: 'Kategorija3',
  },
];

export default function PageOne() {
  const methods = useForm<any>({
    defaultValues: {},
  });
  const { handleSubmit, setValue } = methods;

  const onEditorSubmit: SubmitHandler<any> = async (data: any) => {
    console.log(data);
  };

  const groupedData = useDataGroupedByKeyValue(DATA_WITH_CATEGORIES, 'categoryName');

  return (
    <DefaultPageWithBreadcrumbs
      title="Page One"
      links={[{ name: 'Page One', href: '/page-one' }]}
      breadcrumbsAction={<Button variant="contained">test</Button>}
    >
      <DefaultSingleColumnFormCard
        methods={methods}
        onSubmit={handleSubmit(onEditorSubmit)}
        isSubmitting={false}
      >
        <div>check console log after submit</div>

        <RHFCategorySelect<IDataWithCategories>
          data={groupedData}
          name="category"
          label="Category select"
          optionLabelKey="name"
          optionValueKey="id"
        />

        <RHFCheckbox name="isTest1" label="isTest1" />
        <RHFSwitchAffiliated name="isTest2" label="isTest2" />
        <RHFSwitch name="isTest3" label="isTest3" labelPlacement="start" />

        <RHFSingleImageUpload name="cover" label="Upload" setValue={setValue} />
        <RHFEditor name="content" label="Content" />
      </DefaultSingleColumnFormCard>
    </DefaultPageWithBreadcrumbs>
  );
}