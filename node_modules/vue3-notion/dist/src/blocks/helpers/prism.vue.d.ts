declare const _sfc_main: import("vue").DefineComponent<{
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
export default _sfc_main;
