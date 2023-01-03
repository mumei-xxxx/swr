import type { Cache, GlobalState } from '../types'

// Global state used to deduplicate requests and store listeners
// リクエストの重複排除とリスナーの保存に使用されるグローバルな状態
export const SWRGlobalState = new WeakMap<Cache, GlobalState>()
