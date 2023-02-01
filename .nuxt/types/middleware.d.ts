import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/mikaenys/opt/miniconda3/envs/nuxthemsidanotion/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}