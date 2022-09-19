import React from 'react';
import { TableCell, TableRow } from '@mui/material';
import TableButtonWithDeleteIcon from 'src/backoffice-app-code/components/buttons/TableButtonWithDeleteIcon';
import { GenericTableBody } from 'src/backoffice-app-code/components/tables/GenericTableBody';
import { useDeleteTag } from '../../application/mutations/useDeleteTag';
import { Tag } from '../../models/Tag';
import { useNavigate } from 'react-router';
import { TagRoutes } from 'src/backoffice-app-code/routes/Routes';
import TableButtonWithDetailsIcon from 'src/backoffice-app-code/components/buttons/TableButtonWithDetailsIcon';

interface RowProp {
  tags: Tag[] | undefined;
  isLoading: boolean;
}

const TagsTableBody: React.FC<RowProp> = ({ tags, isLoading }) => {
  const { deleteTagAsync, isLoading: isDeleting } = useDeleteTag();
  const navigate = useNavigate();

  const rows = () => (
    <>
      {tags?.map((tag, index) => (
        <TableRow key={index}>
          <TableCell width={'23%'}>{tag?.title}</TableCell>
          <TableCell width={'23%'}>{tag?.urlSlug}</TableCell>
          <TableCell width={'23%'}>{tag?.updatedAt}</TableCell>
          <TableCell align="right">
            <TableButtonWithDetailsIcon
              label="Detalji"
              onClick={() => navigate(TagRoutes.details + '/' + tag?.id)}
            />
          </TableCell>
          <TableCell align="right">
            <TableButtonWithDeleteIcon
              label="Obriši"
              onClick={() => deleteTagAsync(tag?.id)}
              isDeleting={isDeleting}
            />
          </TableCell>
        </TableRow>
      ))}
    </>
  );

  if (!tags) {
    return <GenericTableBody rows={<></>} hasData={false} isLoading={isLoading} />;
  }
  return (
    <GenericTableBody
      rows={rows()}
      hasData={tags !== undefined && tags.length > 0}
      isLoading={isLoading}
    />
  );
};

export default TagsTableBody;
