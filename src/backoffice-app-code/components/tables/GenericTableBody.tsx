import { TableBody } from '@mui/material';
import { TableNoData, TableSkeleton } from './theme-components';

interface Props {
  hasData: boolean;
  isLoading: boolean;
  rows: React.ReactNode;
}

export const GenericTableBody: React.FC<Props> = ({ hasData, isLoading, rows }) => {
  const getTableBody = () => {
    if (isLoading) {
      return <TableSkeleton rowCount={13} />;
    } else if (!hasData) {
      return <TableNoData isNotFound={true} />;
    } else {
      return <>{rows}</>;
    }
  };

  return <TableBody>{getTableBody()}</TableBody>;
};
