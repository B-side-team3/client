import type { AxiosError } from "axios";
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import { useInfiniteQuery, useMutation, useQuery } from "react-query";

export function useCoreQuery<T>(
  keyName: QueryKey,
  query: QueryFunction<T, QueryKey>,
  options?: Omit<UseQueryOptions<T, AxiosError>, "queryKey" | "queryFn">,
): UseQueryResult<T, AxiosError> {
  return useQuery(keyName, query, {
    onError: err => console.error(err),
    ...options,
  });
}

export function useInfinityCoreQuery<T>(
  keyName: QueryKey,
  query: QueryFunction<T, QueryKey>,
  options?: Omit<
    UseInfiniteQueryOptions<T, AxiosError>,
    "queryKey" | "queryFn"
  >,
): UseInfiniteQueryResult<T, AxiosError> {
  return useInfiniteQuery(keyName, query, {
    onError: err => console.error(err),
    ...options,
  });
}

export function useCoreMutation<T, U>(
  mutation: MutationFunction<T, U>,
  options?: Omit<UseMutationOptions<T, AxiosError, U>, "mutationKey">,
): UseMutationResult<T, AxiosError, U> {
  return useMutation(mutation, {
    onError: err => console.error(err),
    ...options,
  });
}
