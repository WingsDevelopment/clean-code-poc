import Iconify from 'src/components/Iconify';

interface Props {
  icon: string;
  props?: any;
}

const DefaultSizeIconify: React.FC<Props> = ({ icon, props }) => (
  <Iconify icon={icon} width={24} height={24} sx={props} />
);

export default DefaultSizeIconify;
