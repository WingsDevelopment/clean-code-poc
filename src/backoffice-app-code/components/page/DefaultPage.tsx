import Page from 'src/components/Page';
import useSettings from 'src/theme-code/hooks/useSettings';
import { Container } from '@mui/material';

interface Props {
  children: React.ReactNode;
  title: string;
}

const DefaultPage: React.FC<Props> = ({ children, title }) => {
  const { themeStretch } = useSettings();

  return (
    <Page title={title}>
      <Container maxWidth={themeStretch ? false : 'lg'}>{children}</Container>
    </Page>
  );
};

export default DefaultPage;
