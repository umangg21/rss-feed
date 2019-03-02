export interface Feed {
    status?: string;
    message?: string;
    feed?: FeedInfo;
    items?: FeedItem[];
}

export interface FeedInfo {
    url: string;
    title: string;
    link: string;
    author: string;
    description: string;
    image: string;
}

export interface FeedItem {
    title: string;
    pubDate: string;
    link: string;
    guid: string;
    author: string;
    thumbnail: string;
    description: string;
    enclosure: any;
    categories: string[];
}

export enum contentState {
    selection,
    inProgress,
    result,
    error,
}