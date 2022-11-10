export type CacheType = {
  [key: string]: {
    time: Date;
    value: SearchType[];
  };
};

export type SearchType = {
  readonly sickCd: string;
  readonly sickNm: string;
};
