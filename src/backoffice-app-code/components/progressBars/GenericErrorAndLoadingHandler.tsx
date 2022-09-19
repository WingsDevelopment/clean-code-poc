interface Props {
  isLoading: boolean;
  errorMessage: string | undefined;
}

export const GenericErrorAndLoadingHandler: React.FC<Props> = ({ isLoading, errorMessage }) => (
  <>
    {isLoading && <GenericLoadingHandler />}
    {errorMessage && <GenericErrorHandler errorMessage={errorMessage} />}
    {!isLoading && errorMessage && <GenericDataNotFoundHandler message="Podaci nisu pronadjeni" />}
  </>
);

//GenericLoadingHandler
export const GenericLoadingHandler: React.FC = () => <>Ucitava. . .</>;

//GenericErrorHandler
interface GenericErrorHandlerProps {
  errorMessage: string;
}
export const GenericErrorHandler: React.FC<GenericErrorHandlerProps> = ({ errorMessage }) => (
  <>{errorMessage}</>
);

//GenericDataNotFoundHandler
interface GenericDataNotFoundHandlerProps {
  message?: string;
}
export const GenericDataNotFoundHandler: React.FC<GenericDataNotFoundHandlerProps> = ({
  message = 'No data found',
}) => <h2>{message}</h2>;
