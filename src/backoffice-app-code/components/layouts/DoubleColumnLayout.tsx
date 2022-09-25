import Grid from '@mui/material/Grid';
import DefaultDoubleColumnBox from '../boxs/DefaultDoubleColumnBox';
import DefaultCard from '../cards/DefaultCard';

interface Props {
  onSubmit: VoidFunction | undefined;
}

import React from 'react';

const DoubleColumnLayout = () => {
  return <div>DoubleColumnLayout</div>;
};

export default DoubleColumnLayout;

// const DoubleColumnLayout: React.FC<Props> = ({ children }) => (
//   <Grid container spacing={3}>
//     <DefaultCard>
//       <DefaultDoubleColumnBox>{children}</DefaultDoubleColumnBox>
//     </DefaultCard>
//   </Grid>
// );

// export default DoubleColumnLayout;

// import React from 'react';
// import { FormProvider } from 'react-hook-form';

// export const DoubleColumnLayout = () => {
//   return (
//     <FormProvider methods={methods} onSubmit={onSubmit}>
//       <DoubleColumnLayout>
//         <p>test</p>
//       </DoubleColumnLayout>
//     </FormProvider>
//   );
// };
