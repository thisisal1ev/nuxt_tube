import type { FetchOptions } from 'ofetch'

type ApiInstance = {
	<T = any>(request: string, opts?: FetchOptions): Promise<T>
}

declare module '#app' {
	interface NuxtApp {
		$api: ApiInstance
	}
}

declare module 'nuxt/dist/app/nuxt' {
	interface NuxtApp {
		$api: ApiInstance
	}
}
