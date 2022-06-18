import { useState } from "react";
import { useQuery } from "react-query";
import { queryKeys } from "../../utils/constants";

interface ISendTextForTranslation {
  langFrom: string;
  langTo: string;
  text: string;
}

const BASE_URL = "https://api.mymemory.translated.net";
const httpClient = (query: string) => fetch(`${BASE_URL}/${query}`);

const sendTextForTranslation = async ({
  langFrom,
  langTo,
  text,
}: ISendTextForTranslation) => {
  const res = await httpClient(`get?q=${text}!&langpair=${langFrom}|${langTo}`);
  const data = await res.json();
  return data;
};

interface useTranslate {
  langFrom: string;
  langTo: string;
  text: string | undefined;
}

export const useTranslate = () => {
  const [request, setRequest] = useState<ISendTextForTranslation>({
    langFrom: "",
    langTo: "",
    text: "",
  });
  
  const isEnabled = !!request.langFrom && !!request.langTo && !!request.text;
  const { data } = useQuery(
    [queryKeys.translate, request],
    () => sendTextForTranslation(request),
    {
      enabled: isEnabled,
      staleTime: Infinity,
    }
  );

  return { data, setRequest };
};
