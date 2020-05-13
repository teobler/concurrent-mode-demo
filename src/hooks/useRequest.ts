import useSWR, { ConfigInterface, responseInterface } from "swr";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export type GetRequest = AxiosRequestConfig | null;

interface Return<Data, Error>
  extends Pick<responseInterface<AxiosResponse<Data>, AxiosError<Error>>, "isValidating" | "revalidate" | "error"> {
  data: Data | undefined;
  response: AxiosResponse<Data> | undefined;
}

export interface Config<Data = unknown, Error = unknown>
  extends Omit<ConfigInterface<AxiosResponse<Data>, AxiosError<Error>>, "initialData"> {}

export const useRequest = <Data = unknown, Error = unknown>(
  requestConfig: GetRequest,
  { ...config }: Config<Data, Error> = {},
): Return<Data, Error> => {
  const { data: response, error, isValidating, revalidate } = useSWR<AxiosResponse<Data>, AxiosError<Error>>(
    requestConfig && JSON.stringify(requestConfig),
    () => axios(requestConfig!),
    {
      ...config,
    },
  );

  return {
    data: response && response.data,
    response,
    error,
    isValidating,
    revalidate,
  };
};
