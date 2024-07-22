import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { NameResponse,StatusResponse,InfoResponse,PlayersCountResponse, PlayersMaxResponse, PlayersListResponse } from './types';
import { config } from '@/shared/config/index'
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://mcapi.orudo.ru' }),
  endpoints: (builder) => ({
    getName: builder.query<NameResponse, void>({
      query: () => `/name`,
    }),
    getStatus: builder.query<StatusResponse, void>({
      query: () => `/status`,
    }),
    getInfo: builder.query<InfoResponse, void>({
      query: () => `/info`,
    }),
    getPlayersCount: builder.query<PlayersCountResponse, void>({
      query: () => `/players/count`,
    }),
    getPlayersMax: builder.query<PlayersMaxResponse, void>({
      query: () => `/players/max`,
    }),
    getPlayersList: builder.query<PlayersListResponse, void>({
      query: () => `/players/list`,
    }),
  }),
});


export const {
  useGetNameQuery,
  useGetStatusQuery,
  useGetInfoQuery,
  useGetPlayersCountQuery,
  useGetPlayersMaxQuery,
  useGetPlayersListQuery,
} = api;