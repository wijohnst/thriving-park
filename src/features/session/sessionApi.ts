import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface AppUser {
  _id: string;
  __v: number;
  profilePictureURL: string;
}
interface GetUserByIdRequest {
  userId: string;
}
interface GetUserByIdResponse {
  status: number;
  data: AppUser;
}

interface AddUserResponse {
  status: number;
  data: AppUser;
}

interface AddUserRequest {
  userId: string;
}

export const sessionApi = createApi({
  reducerPath: 'sessionApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1112/' }),
  endpoints: (builder) => ({
    getUserById: builder.query<GetUserByIdResponse, GetUserByIdRequest>({
      query: ({ userId }) => `users/${userId}`,
    }),
    addUser: builder.mutation<AddUserResponse, AddUserRequest>({
      query: ({ userId }) => {
        return {
          url: 'users/',
          method: 'POST',
          body: {
            _id: userId ?? 'Test',
            profilePictureURL: null,
          },
        };
      },
    }),
  }),
});

export const { useGetUserByIdQuery, useAddUserMutation } = sessionApi;
