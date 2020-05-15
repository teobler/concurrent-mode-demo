import { useRequest } from "../hooks/useRequest";
import { BASE_API } from "../config";

export const useData = (id: number) => {
  const { data: user } = useRequest(
    { baseURL: BASE_API, url: `/api/fake-user/${id}`, method: "get" },
    {
      suspense: true,
    },
  );
  const { data: postList } = useRequest(
    { baseURL: BASE_API, url: `/api/fake-list/${id}`, method: "get" },
    {
      suspense: true,
    },
  );

  return {
    user,
    postList,
  };
};
