import { ApiResponse, ISendTextForTranslation } from "../types";
import { httpClient } from "./config";

export const sendTextForTranslation = async ({
  langFrom,
  langTo,
  text,
}: ISendTextForTranslation): Promise<ApiResponse> => {
  const res = await httpClient(`get?q=${text}!&langpair=${langFrom}|${langTo}`);
  const data = await res.json();
  return data;
};
