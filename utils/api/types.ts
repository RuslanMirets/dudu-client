export type LoginDto = {
  email: string;
  password: string;
};

export type CreateUserDto = {
  firstName: string;
  lastName: string;
} & LoginDto;

export type ResponseUser = {
  firstName: string;
  lastName: string;
  email: string;
  id: number;
  createdAt: string;
  updatedAt: string;
  token: string;
};
