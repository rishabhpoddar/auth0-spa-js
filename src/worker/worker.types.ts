import fetch from 'unfetch';

export type FetchOptions = Parameters<typeof fetch>[1];

export type WorkerRefreshTokenMessage = {
  url: string;
  timeout: number;
  audience: string;
  scope: string;
} & FetchOptions;
