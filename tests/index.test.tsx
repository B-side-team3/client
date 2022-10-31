import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Home', () => {
	it('counter', () => {
		const { container } = render(<Home />)

		expect(container).toMatchSnapshot()
	})
})
