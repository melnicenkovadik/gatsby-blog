import { CreatePageArgs } from 'gatsby';
import { PageContext, PluginOptions } from '../types';
export declare const onCreatePage: ({ page, actions }: CreatePageArgs<PageContext>, pluginOptions: PluginOptions) => Promise<void>;
