// @mui
import { TableRow, TableCell, Skeleton, Stack, TableRowProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props {
  rowCount: number;
  other?: TableRowProps;
}

export default function TableSkeleton({ rowCount, ...other }: Props) {
  return (
    <TableRow {...other}>
      <TableCell colSpan={12}>
        {[...Array(rowCount)].map((_, index) => (
          <Stack spacing={3} direction="row" alignItems="center" key={index}>
            <Skeleton
              variant="rectangular"
              width={40}
              height={40}
              sx={{ borderRadius: 1, flexShrink: 0 }}
            />
            <Skeleton variant="text" width="100%" height={20} />
            <Skeleton variant="text" width={160} height={20} />
            <Skeleton variant="text" width={160} height={20} />
            <Skeleton variant="text" width={160} height={20} />
            <Skeleton variant="text" width={160} height={20} />
          </Stack>
        ))}
      </TableCell>
    </TableRow>
  );
}
