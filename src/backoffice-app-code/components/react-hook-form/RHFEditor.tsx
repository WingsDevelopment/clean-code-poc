import { Props as EditorProps } from './theme-components/editor';
import RHFThemeEditor from './theme-components/editor/RHFThemeEditor';
import { DefaultFormLabel } from '../labels/DefaultFormLabel';

interface Props extends EditorProps {
  name: string;
  label: string;
}

export default function RHFEditor({ name, label, ...other }: Props) {
  return (
    <div>
      <DefaultFormLabel>{label}</DefaultFormLabel>
      <RHFThemeEditor name={name} {...other} />
    </div>
  );
}
