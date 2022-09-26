import { ErrorCard } from './ErrorCard';
import { LoadingCard } from './LoadingCard';

interface Props {
  children?: React.ReactNode;
  isLoading?: boolean | undefined;
  errorMessage?: string | undefined;
}
export const LoadableCardWrapper: React.FC<Props> = ({ children, isLoading, errorMessage }) => {
  if (isLoading) return <LoadingCard />;
  if (errorMessage) return <ErrorCard errorMessage={errorMessage} />;
  return <>{children}</>;
};
