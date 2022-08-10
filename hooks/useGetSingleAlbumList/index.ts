import { API_HOST } from "apis/api";
import axios, { AxiosError, AxiosResponse } from "axios";
import { singleAlbumPostAxios } from "types/singleAlbum";
import { useQuery } from "react-query";

export const getSingleAlbumList = async () =>
	await axios.get(`${API_HOST}/singleAlbum/getList`, { withCredentials: true });

const useGetSingleAlbumList = () => {
	return useQuery<AxiosResponse<singleAlbumPostAxios>, AxiosError>("getSingleAlbumList", getSingleAlbumList);
};

export default useGetSingleAlbumList;
