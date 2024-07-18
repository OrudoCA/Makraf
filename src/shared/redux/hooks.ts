import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'

export {
  useGetNameQuery,
  useGetStatusQuery,
  useGetInfoQuery,
  useGetPlayersCountQuery,
  useGetPlayersMaxQuery,
  useGetPlayersListQuery,
} from './slices/apiSlice.ts'
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()