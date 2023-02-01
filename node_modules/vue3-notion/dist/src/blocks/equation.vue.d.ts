declare const _sfc_main: import("vue").DefineComponent<{
    blockMap: {
        type: import("vue").PropType<import("..").BlockMap>;
        required: boolean;
    };
    contentId: {
        type: StringConstructor;
        required: boolean;
    };
    contentIndex: {
        type: NumberConstructor;
        default: number;
    };
    embedAllow: {
        type: StringConstructor;
        default: string;
    };
    fullPage: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideList: {
        type: ArrayConstructor;
        default: () => never[];
    };
    level: {
        type: NumberConstructor;
        default: number;
    };
    mapImageUrl: {
        type: FunctionConstructor;
        default: (image: string | undefined, block: import("..").Block) => string;
    };
    mapPageUrl: {
        type: FunctionConstructor;
        default: (pageId?: string) => string;
    };
    pageLinkOptions: ObjectConstructor;
    pageLinkTarget: {
        type: StringConstructor;
        default: string;
    };
    prism: {
        type: BooleanConstructor;
        default: boolean;
    };
    katex: {
        type: BooleanConstructor;
        default: boolean;
    };
    textLinkTarget: {
        type: StringConstructor;
        default: string;
    };
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        blockMap: {
            type: import("vue").PropType<import("..").BlockMap>;
            required: boolean;
        };
        contentId: {
            type: StringConstructor;
            required: boolean;
        };
        contentIndex: {
            type: NumberConstructor;
            default: number;
        };
        embedAllow: {
            type: StringConstructor;
            default: string;
        };
        fullPage: {
            type: BooleanConstructor;
            default: boolean;
        };
        hideList: {
            type: ArrayConstructor;
            default: () => never[];
        };
        level: {
            type: NumberConstructor;
            default: number;
        };
        mapImageUrl: {
            type: FunctionConstructor;
            default: (image: string | undefined, block: import("..").Block) => string;
        };
        mapPageUrl: {
            type: FunctionConstructor;
            default: (pageId?: string) => string;
        };
        pageLinkOptions: ObjectConstructor;
        pageLinkTarget: {
            type: StringConstructor;
            default: string;
        };
        prism: {
            type: BooleanConstructor;
            default: boolean;
        };
        katex: {
            type: BooleanConstructor;
            default: boolean;
        };
        textLinkTarget: {
            type: StringConstructor;
            default: string;
        };
    }>> & {
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
    }>>;
    properties: import("vue").ComputedRef<import("..").Properties>;
    pass: import("vue").ComputedRef<{
        blockMap: import("..").BlockMap;
        contentId: string | undefined;
        contentIndex: number;
        embedAllow: string;
        fullPage: boolean;
        hideList: string[] | undefined;
        level: number;
        mapImageUrl: Function;
        mapPageUrl: Function;
        pageLinkOptions: import("..").PageLinkOptions | undefined;
        prism: boolean;
        katex: boolean;
    }>;
    equation: import("vue").ComputedRef<string>;
    NotionCode: import("vue").DefineComponent<{
        blockMap: {
            type: import("vue").PropType<import("..").BlockMap>;
            required: boolean;
        };
        contentId: {
            type: StringConstructor;
            required: boolean;
        };
        contentIndex: {
            type: NumberConstructor;
            default: number;
        };
        embedAllow: {
            type: StringConstructor;
            default: string;
        };
        fullPage: {
            type: BooleanConstructor;
            default: boolean;
        };
        hideList: {
            type: ArrayConstructor;
            default: () => never[];
        };
        level: {
            type: NumberConstructor;
            default: number;
        };
        mapImageUrl: {
            type: FunctionConstructor;
            default: (image: string | undefined, block: import("..").Block) => string;
        };
        mapPageUrl: {
            type: FunctionConstructor;
            default: (pageId?: string) => string;
        };
        pageLinkOptions: ObjectConstructor;
        pageLinkTarget: {
            type: StringConstructor;
            default: string;
        };
        prism: {
            type: BooleanConstructor;
            default: boolean;
        };
        katex: {
            type: BooleanConstructor;
            default: boolean;
        };
        textLinkTarget: {
            type: StringConstructor;
            default: string;
        };
        overrideLang: StringConstructor;
        overrideLangClass: StringConstructor;
    }, {
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            blockMap: {
                type: import("vue").PropType<import("..").BlockMap>;
                required: boolean;
            };
            contentId: {
                type: StringConstructor;
                required: boolean;
            };
            contentIndex: {
                type: NumberConstructor;
                default: number;
            };
            embedAllow: {
                type: StringConstructor;
                default: string;
            };
            fullPage: {
                type: BooleanConstructor;
                default: boolean;
            };
            hideList: {
                type: ArrayConstructor;
                default: () => never[];
            };
            level: {
                type: NumberConstructor;
                default: number;
            };
            mapImageUrl: {
                type: FunctionConstructor;
                default: (image: string | undefined, block: import("..").Block) => string;
            };
            mapPageUrl: {
                type: FunctionConstructor;
                default: (pageId?: string) => string;
            };
            pageLinkOptions: ObjectConstructor;
            pageLinkTarget: {
                type: StringConstructor;
                default: string;
            };
            prism: {
                type: BooleanConstructor;
                default: boolean;
            };
            katex: {
                type: BooleanConstructor;
                default: boolean;
            };
            textLinkTarget: {
                type: StringConstructor;
                default: string;
            };
            overrideLang: StringConstructor;
            overrideLangClass: StringConstructor;
        }>> & {
            [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        }>>;
        properties: import("vue").ComputedRef<import("..").Properties>;
        lang: import("vue").ComputedRef<string | undefined>;
        langClass: import("vue").ComputedRef<string>;
        supported: import("vue").ComputedRef<false | import("prismjs").Grammar>;
        computedSlot: import("vue").ComputedRef<string>;
        PrismBlock: import("vue").DefineComponent<{
            code: {
                type: StringConstructor;
            };
            inline: {
                type: BooleanConstructor;
                default: boolean;
            };
            language: {
                type: StringConstructor;
                default: string;
            };
        }, {
            slots: Readonly<{
                [name: string]: import("vue").Slot | undefined;
            }>;
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                code: {
                    type: StringConstructor;
                };
                inline: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                language: {
                    type: StringConstructor;
                    default: string;
                };
            }>> & {
                [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
            }>>;
            inline: import("vue").Ref<boolean>;
            language: import("vue").Ref<string>;
            className: import("vue").ComputedRef<string>;
            defaultSlot: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            code: string;
            d: import("vue").ComputedRef<string>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            code: {
                type: StringConstructor;
            };
            inline: {
                type: BooleanConstructor;
                default: boolean;
            };
            language: {
                type: StringConstructor;
                default: string;
            };
        }>>, {
            inline: boolean;
            language: string;
        }>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        blockMap: {
            type: import("vue").PropType<import("..").BlockMap>;
            required: boolean;
        };
        contentId: {
            type: StringConstructor;
            required: boolean;
        };
        contentIndex: {
            type: NumberConstructor;
            default: number;
        };
        embedAllow: {
            type: StringConstructor;
            default: string;
        };
        fullPage: {
            type: BooleanConstructor;
            default: boolean;
        };
        hideList: {
            type: ArrayConstructor;
            default: () => never[];
        };
        level: {
            type: NumberConstructor;
            default: number;
        };
        mapImageUrl: {
            type: FunctionConstructor;
            default: (image: string | undefined, block: import("..").Block) => string;
        };
        mapPageUrl: {
            type: FunctionConstructor;
            default: (pageId?: string) => string;
        };
        pageLinkOptions: ObjectConstructor;
        pageLinkTarget: {
            type: StringConstructor;
            default: string;
        };
        prism: {
            type: BooleanConstructor;
            default: boolean;
        };
        katex: {
            type: BooleanConstructor;
            default: boolean;
        };
        textLinkTarget: {
            type: StringConstructor;
            default: string;
        };
        overrideLang: StringConstructor;
        overrideLangClass: StringConstructor;
    }>>, {
        contentIndex: number;
        embedAllow: string;
        fullPage: boolean;
        hideList: unknown[];
        level: number;
        mapImageUrl: Function;
        mapPageUrl: Function;
        pageLinkTarget: string;
        prism: boolean;
        katex: boolean;
        textLinkTarget: string;
    }>;
    NotionKatek: import("vue").DefineComponent<{
        expression: {
            type: StringConstructor;
            required: true;
        };
    }, {
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            expression: {
                type: StringConstructor;
                required: true;
            };
        }>> & {
            [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        }>>;
        html: import("vue").ComputedRef<string>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        expression: {
            type: StringConstructor;
            required: true;
        };
    }>>, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    blockMap: {
        type: import("vue").PropType<import("..").BlockMap>;
        required: boolean;
    };
    contentId: {
        type: StringConstructor;
        required: boolean;
    };
    contentIndex: {
        type: NumberConstructor;
        default: number;
    };
    embedAllow: {
        type: StringConstructor;
        default: string;
    };
    fullPage: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideList: {
        type: ArrayConstructor;
        default: () => never[];
    };
    level: {
        type: NumberConstructor;
        default: number;
    };
    mapImageUrl: {
        type: FunctionConstructor;
        default: (image: string | undefined, block: import("..").Block) => string;
    };
    mapPageUrl: {
        type: FunctionConstructor;
        default: (pageId?: string) => string;
    };
    pageLinkOptions: ObjectConstructor;
    pageLinkTarget: {
        type: StringConstructor;
        default: string;
    };
    prism: {
        type: BooleanConstructor;
        default: boolean;
    };
    katex: {
        type: BooleanConstructor;
        default: boolean;
    };
    textLinkTarget: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    contentIndex: number;
    embedAllow: string;
    fullPage: boolean;
    hideList: unknown[];
    level: number;
    mapImageUrl: Function;
    mapPageUrl: Function;
    pageLinkTarget: string;
    prism: boolean;
    katex: boolean;
    textLinkTarget: string;
}>;
export default _sfc_main;
