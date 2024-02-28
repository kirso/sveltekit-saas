import {redirect} from '@sveltejs/kit'

export const GET = async (event) => {
	const {
		url,
		locals: {supabase},
	} = event
	const token_hash = url.searchParams.get('token_hash') as string
	const type = url.searchParams.get('type') as string
	const next = url.searchParams.get('profile') ?? '/'

	if (token_hash && type) {
		const {error} = await supabase.auth.verifyOtp({token_hash, type})
		if (!error) {
			redirect(303, `/${next.slice(1)}`)
		} else {
			// return the user to an error page with some instructions
			redirect(303, '/login?error=invalid_otp')
		}
	}
	redirect(303, '/login')
}