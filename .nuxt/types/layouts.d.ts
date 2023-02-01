import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/Users/mikaenys/opt/miniconda3/envs/nuxthemsidanotion/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}