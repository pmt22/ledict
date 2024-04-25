export interface TranslationDetail {
    en: string,
    vi: string,
    note?: string,
    timestamp: number,
    tags?: string[],
    moreVIs?: string[],
    moreENs?: string[],
    createdBy?: string,
    lastModifiedBy?: string,
    modifiedTimestamp?: number,
}