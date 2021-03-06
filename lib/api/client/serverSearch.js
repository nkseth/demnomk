import logger from "../../serverlogger";
import axiosClient from "../axios";

export const server_fetchSearch = async (filters) => {
  const axios = axiosClient.getAxios();
  try {
    const result = await axios.post(`/Home/FilterGoods`, filters);
    logger.http(
      "successful result from /Home/FilterGoods with: " +
        JSON.stringify(result.data)
    );
    return result.data;
  } catch (err) {
    logger.error(JSON.stringify(err));
  }
};
