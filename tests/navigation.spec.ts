import {test, expect} from '@playwright/test'

test('navigation smoke test', async ({page}) => {
	// start at the home page
	await page.goto('/')

	await expect(page).toHaveTitle(/100xify/)
	await expect(
		page.getByRole('heading', {name: '100xify', level: 1}),
	).toBeVisible()
})
