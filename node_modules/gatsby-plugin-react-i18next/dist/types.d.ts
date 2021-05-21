import { InitOptions } from 'i18next';
import { NodeInput } from 'gatsby';
export declare const LANGUAGE_KEY = "gatsby-i18next-language";
export declare type PageOptions = {
    matchPath: string;
    getLanguageFromPath?: boolean;
    excludeLanguages?: string[];
    languages?: string[];
};
export declare type PluginOptions = {
    languages: string[];
    defaultLanguage: string;
    generateDefaultLanguagePage: boolean;
    redirect: boolean;
    siteUrl?: string;
    i18nextOptions: InitOptions;
    pages: Array<PageOptions>;
    localeJsonSourceName?: string;
    localeJsonNodeName?: string;
};
export declare type I18NextContext = {
    language: string;
    routed: boolean;
    languages: string[];
    defaultLanguage: string;
    generateDefaultLanguagePage: boolean;
    originalPath: string;
    path: string;
    siteUrl?: string;
};
export declare type PageContext = {
    path: string;
    language: string;
    i18n: I18NextContext;
};
export interface FileSystemNode extends Node {
    absolutePath: string;
    accessTime: string;
    birthTime: Date;
    changeTime: string;
    extension: string;
    modifiedTime: string;
    prettySize: string;
    relativeDirectory: string;
    relativePath: string;
    sourceInstanceName: string;
    base: string;
    dir: string;
    ext: string;
    name: string;
    root: string;
    atime: Date;
    atimeMs: number;
    /**
     * @deprecated Use `birthTime` instead
     */
    birthtime: Date;
    /**
     * @deprecated Use `birthTime` instead
     */
    birthtimeMs: number;
    ctime: Date;
    ctimeMs: number;
    gid: number;
    mode: number;
    mtime: Date;
    mtimeMs: number;
    size: number;
    uid: number;
}
export interface LocaleNodeInput extends NodeInput {
    language: string;
    ns: string;
    data: string;
    fileAbsolutePath: string;
}
export interface LocaleNode extends LocaleNodeInput {
    parent: string;
    children: string[];
    internal: NodeInput['internal'] & {
        owner: string;
    };
}
