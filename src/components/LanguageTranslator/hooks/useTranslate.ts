import { useState } from "react";
import { useQuery } from "react-query";
import { sendTextForTranslation } from "../api";

import { ISendTextForTranslation } from "../types";
import { queryKeys } from "../constants";

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
      staleTime: 5000,
      select: (data) => data.responseData.translatedText,
    }
  );

  return { data, setRequest };
};
