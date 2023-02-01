import { PropType, StyleValue } from "vue";
declare const _sfc_main: import("vue").DefineComponent<{
    text: PropType<string[]>;
    level: {
        type: NumberConstructor;
        default: number;
    };
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        text: PropType<string[]>;
        level: {
            type: NumberConstructor;
            default: number;
        };
    }>> & {
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
    }>>;
    computedText: import("vue").ComputedRef<string>;
    computedStyle: StyleValue;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    text: PropType<string[]>;
    level: {
        type: NumberConstructor;
        default: number;
    };
}>>, {
    level: number;
}>;
export default _sfc_main;
