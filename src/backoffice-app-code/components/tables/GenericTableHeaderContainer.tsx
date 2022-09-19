import { Stack } from '@mui/material';
import React from 'react';

interface Props {
  children: any;
}

export const GenericTableHeaderContainer: React.FC<Props> = ({ children }) => (
  <Stack spacing={2} direction={{ xs: 'column', md: 'row' }} sx={{ py: 2.5, px: 3 }}>
    {children}
  </Stack>
);
