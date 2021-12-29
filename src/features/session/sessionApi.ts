import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface GetUserResponse {
  profileURI: string;
}

export const sessionApi = createApi({
  reducerPath: 'sessionApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getUser: builder.query<GetUserResponse, string>({
      query: () => `user`,
    }),
  }),
});

export const { useGetUserQuery } = sessionApi;
