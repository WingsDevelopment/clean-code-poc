import { ReactNode } from 'react';
// form
import { UseFormReturn } from 'react-hook-form';
import { FormProvider } from '../../react-hook-form';

type Props = {
  children: ReactNode;
  //todo: napisati svoj UseFormReturn
  methods: UseFormReturn<any>;
  onSubmit?: VoidFunction;
};

export default function MyFormProvider({ children, onSubmit, methods }: Props) {
  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      {children}
    </FormProvider>
  );
}
