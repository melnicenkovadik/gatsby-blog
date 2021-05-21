import { CreateNodeArgs, Node } from 'gatsby';
import { FileSystemNode, PluginOptions } from '../types';
export declare function unstable_shouldOnCreateNode({ node }: {
    node: Node;
}): boolean;
export declare const onCreateNode: ({ node, actions, loadNodeContent, createNodeId, createContentDigest, reporter }: CreateNodeArgs<FileSystemNode>, { localeJsonSourceName }: PluginOptions) => Promise<void>;
