import CONST from "./constants";

export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const RECIPE_URL = process.env.REACT_APP_FETCH_RECIPE_URL;

export async function customFetch(URL) {
  try {
    const response = await fetch(URL, {
      mode: "cors",
      cache: "no-cache",
    });
    const data = await response.json();
    return data;
  } catch (exception) {
    if (exception.toString() === CONST.FAILED_TO_FETCH)
      return {
        general: CONST.INTERNAL_SERVER_ERROR_MSG,
        status: CONST.STATUS_FAILED,
      };
  }
}
