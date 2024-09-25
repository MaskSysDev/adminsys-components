import { DataSampleFormValues } from "@/validation/data-sample";
import { faker } from "@faker-js/faker";

const FakeDataSample = () => {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    slug: faker.lorem.slug(),
    description: faker.lorem.lines({ min: 1, max: 3 }),
    createdAt: faker.date.recent({ days: 30 }),
    updatedAt: faker.date.recent({ days: 7 }),
  };
};

export const generateFakeDataSample = (length: number) => {
  const data: DataSampleFormValues[] = [];

  Array.from({ length: length }).forEach(() => {
    data.push(FakeDataSample());
  });

  return data;
};
