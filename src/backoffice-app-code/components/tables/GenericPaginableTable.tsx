import React, { useEffect } from 'react';

import {
  Box,
  Card,
  Table,
  Divider,
  CardHeader,
  TableContainer,
  Pagination,
  TextField,
  FormControlLabel,
  Switch,
} from '@mui/material';
import Scrollbar from 'src/components/Scrollbar';
import useTable from 'src/theme-code/hooks/useTable';
import { TableHeadCustom } from './theme-components';

interface Props {
  isLoading: boolean;
  errorMessage?: string;
  totalCount: number | undefined;
  currentPage: number;
  onPageChangeHandler: (page: number) => void;
  onChangeItemsPerPageHandler: (itemsPerPage: number) => void;
  sortByHandler?: (sortBy: string, isAscending: boolean) => void;
  tableLabels: { id: string; label: string; sortable?: boolean }[];
  itemsPerPage: number;
  title?: string;
  subheader?: string;
  tableHeaderComponent?: React.ReactNode;
  tableBodyComponent: React.ReactNode;
}

export interface TableLabels {
  id: string;
  label: string;
  sortable?: boolean;
}

export const GenericPaginableTable: React.FC<Props> = ({
  isLoading,
  errorMessage,
  sortByHandler,
  totalCount,
  currentPage,
  onPageChangeHandler,
  onChangeItemsPerPageHandler,
  tableLabels,
  itemsPerPage,
  title = '',
  subheader = '',
  tableHeaderComponent: tableHeaerComponent,
  tableBodyComponent,
  ...other
}) => {
  const numberOfPages = totalCount ? Math.ceil(totalCount / itemsPerPage) : 0;

  const { dense, onChangeDense, order, orderBy, onSort, rowsPerPage, onChangeRowsPerPage } =
    useTable({
      defaultOrderBy: '',
      defaultRowsPerPage: itemsPerPage,
    });

  useEffect(() => {
    var sortByStr = `${orderBy}`;
    console.log(sortByStr);
    if (!sortByStr) return;
    if (!sortByHandler) return;

    sortByHandler(sortByStr, order === 'asc');
  }, [orderBy, order, sortByHandler]);

  useEffect(() => {
    onChangeItemsPerPageHandler(rowsPerPage);
  }, [rowsPerPage, onChangeItemsPerPageHandler]);

  const onPageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
    onPageChangeHandler(page);
  };

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 3 }} />

      {tableHeaerComponent}

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
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {'Po strani'}:
          <TextField
            select
            value={itemsPerPage}
            onChange={onChangeRowsPerPage}
            size={'small'}
            SelectProps={{ native: true }}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </TextField>
        </div>
        <Pagination
          page={currentPage}
          count={numberOfPages}
          variant="outlined"
          shape="rounded"
          onChange={onPageChange}
        />
        <FormControlLabel
          control={<Switch checked={dense} onChange={onChangeDense} />}
          label={'gusto'}
          style={{ marginLeft: '3rem' }}
        />
      </Box>
    </Card>
  );
};
