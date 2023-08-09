import baseUrl from '../Api/baseUrl';

const useDeleteData = async (url) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
  const { data } = await baseUrl.delete(url, config);
  return data;
};

export default useDeleteData;
