import { LinearProgress } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useIsFetching } from 'react-query';

export const FetchingLinearProgress: React.FC = () => {
  const theme = useTheme();
  const isFetching = useIsFetching();

  return (
    <div style={{ minHeight: '10px' }}>
      {isFetching > 0 && (
        <LinearProgress
          style={{
            zIndex: theme.zIndex.snackbar,
            display: 'relative',
            height: 2,
          }}
        />
      )}
    </div>
  );
};
