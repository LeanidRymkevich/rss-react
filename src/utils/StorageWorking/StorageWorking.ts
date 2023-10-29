const STORAGE_FIELD_FOR_QUERY = 'query';

export function getQueryFromStorage(): string {
  return localStorage.getItem(STORAGE_FIELD_FOR_QUERY) || '';
}

export function setQueryToStorage(query: string): void {
  localStorage.setItem(STORAGE_FIELD_FOR_QUERY, query);
}
