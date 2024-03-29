import SupabaseClient, {type Session} from '@supabase/supabase-js'
declare global {
	// fresh API just dropped, let's extend Document
	interface Document {
		startViewTransition?(callback: () => Promise<void>): void
	}
	interface CSSStyleDeclaration {
		viewTransitionName?: string
	}
	interface Window {
		toggleTheme?(): void
	}

	// for enhanced images with query params such as w=64
	declare module '*&img'

	namespace App {
		// interface Error {}
		interface Locals {
			supabase: SupabaseClient
			getSession: () => Promise<Session | null>
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {}
