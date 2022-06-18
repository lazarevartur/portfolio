export type Counrty = Record<string, string>;

export interface ISendTextForTranslation {
  langFrom: string;
  langTo: string;
  text: string;
}

export interface ApiResponse {
  responseData: ResponseData;
  quotaFinished: boolean;
  mtLangSupported: null;
  responseDetails: string;
  responseStatus: number;
  responderId: string;
  exception_code: null;
  matches: Match[];
}

export interface Match {
  id: string;
  segment: string;
  translation: string;
  source: string;
  target: string;
  quality: string;
  reference: null;
  "usage-count": number;
  subject: string;
  "created-by": string;
  "last-updated-by": string;
  "create-date": string;
  "last-update-date": string;
  match: number;
}

export interface ResponseData {
  translatedText: string;
  match: number;
}
