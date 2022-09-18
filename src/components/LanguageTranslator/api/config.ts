const BASE_URL = "https://api.mymemory.translated.net";

export const httpClient = (query: string) => fetch(`${BASE_URL}/${query}`);
