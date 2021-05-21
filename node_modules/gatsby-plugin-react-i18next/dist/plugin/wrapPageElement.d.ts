import { WrapPageElementBrowserArgs } from 'gatsby';
import { PageContext, PluginOptions } from '../types';
export declare const wrapPageElement: ({ element, props }: WrapPageElementBrowserArgs<any, PageContext>, { i18nextOptions, redirect, generateDefaultLanguagePage, siteUrl, localeJsonNodeName }: PluginOptions) => JSX.Element | null | undefined;
