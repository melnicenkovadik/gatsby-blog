import { Namespace, UseTranslationOptions } from 'react-i18next';
import { NavigateOptions } from '@reach/router';
export declare const useI18next: (ns?: string | string[] | undefined, options?: UseTranslationOptions | undefined) => {
    i18n: import("i18next").i18n;
    t: import("react-i18next/*").TFunction<Namespace<string>>;
    ready: boolean;
    navigate: (to: string, options?: NavigateOptions<{}> | undefined) => Promise<void>;
    changeLanguage: (language: string, to?: string | undefined, options?: NavigateOptions<{}> | undefined) => Promise<void>;
    language: string;
    routed: boolean;
    languages: string[];
    defaultLanguage: string;
    generateDefaultLanguagePage: boolean;
    originalPath: string;
    path: string;
    siteUrl?: string | undefined;
};
