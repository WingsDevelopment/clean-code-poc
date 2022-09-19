import React, { useEffect } from 'react';

import {
  Box,
  Card,
  Table,
  Divider,
  CardHeader,
  TableContainer,
  FormControlLabel,
  Switch,
} from '@mui/material';
import Scrollbar from 'src/components/Scrollbar';
import useTable from 'src/theme-code/hooks/useTable';
import { TableHeadCustom } from './theme-components';

interface Props {
  isLoading: boolean;
  errorMessage?: string;
  sortByHandler?: (sortBy: string) => void;
  tableLabels: { id: string; label: string; sortable?: boolean }[];
  title: string;
  subheader: string;
  filterComponent?: React.ReactNode;
  tableBodyComponent: React.ReactNode;
}

export interface TableLabels {
  id: string;
  label: string;
  sortable?: boolean;
}

export const GenericSimpleTable: React.FC<Props> = ({
  isLoading,
  errorMessage,
  sortByHandler,
  tableLabels,
  title,
  subheader,
  filterComponent,
  tableBodyComponent,
  ...other
}) => {
  const { dense, onChangeDense, order, orderBy, onSort } = useTable({
    defaultOrderBy: '',
  });

  useEffect(() => {
    var sortByStr = `${orderBy}${order === 'asc' ? 'Asc' : 'Desc'}`;
    if (!sortByStr || !sortByHandler) return;

    sortByHandler(sortByStr);
  }, [orderBy, order, sortByHandler]);

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 3 }} />

      {filterComponent}

      <Scrollbar>
        <TableContainer sx={{ minWidth: 720 }} style={{ minHeight: dense ? '24rem' : '37.5rem' }}>
          <Table size={dense ? 'small' : 'medium'}>
            <TableHeadCustom
              order={order}
              orderBy={orderBy}
              headLabel={tableLabels}
              onSort={onSort}
            />

            {tableBodyComponent}
          </Table>
        </TableContainer>
      </Scrollbar>

      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          m: '1rem',
        }}
      >
        <FormControlLabel
          control={<Switch checked={dense} onChange={onChangeDense} />}
          label={'gusto'}
        />
      </Box>
    </Card>
  );
};
