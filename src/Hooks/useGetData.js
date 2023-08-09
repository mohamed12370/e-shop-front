import baseUrl from '../Api/baseUrl';

const useGetData = async (url, params) => {
  const { data } = await baseUrl.get(url, params);
  return data;
};

export default useGetData;

export const useGetDataToken = async (url) => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  };
  const res = await baseUrl.get(url, config);
  return res.data;
};
