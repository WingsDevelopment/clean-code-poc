import uuidv4 from 'src/backoffice-app-code/utils/uuidGenerator';
import { NewTagDTO } from '../DTOs/NewTagDTO';
import { TagDTO } from '../DTOs/TagDTO';
import { UpdateTagDTO } from '../DTOs/UpdateTagDTO';

const mockDataTags: TagDTO[] = [
  {
    id: '1',
    title: 'Tag 1',
    createdAt: new Date(),
  },
];

const GetAllTagsAsync = async (): Promise<TagDTO[]> => mockDataTags;

const GetTagByIdAsync = async (id: string): Promise<TagDTO | undefined> => {
  const tag = mockDataTags.find((x) => x.id === id);
  return tag;
};

const CreateTagAsync = async (tag: NewTagDTO): Promise<string> => {
  const newTag = {
    ...tag,
    id: uuidv4(),
    createdAt: new Date(),
  };
  mockDataTags.push(newTag);
  return newTag.id;
};

const UpdateTagAsync = async (tag: UpdateTagDTO): Promise<string> => {
  const index = mockDataTags.findIndex((x) => x.id === tag.id);
  mockDataTags[index] = {
    ...mockDataTags[index],
    ...tag,
  };
  return tag.id;
};

const DeleteTagAsync = async (id: string): Promise<string> => {
  const index = mockDataTags.findIndex((x) => x.id === id);
  mockDataTags.splice(index, 1);
  return id;
};

export const TagsRepository = {
  GetAllTagsAsync,
  GetTagByIdAsync,
  CreateTagAsync,
  UpdateTagAsync,
  DeleteTagAsync,
};
