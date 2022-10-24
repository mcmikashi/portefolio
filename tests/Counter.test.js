// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom'

import {render, fireEvent, screen} from '@testing-library/svelte'

import Comp from '../src/lib/Counter.svelte'

// Note: This is as an async test as we are using `fireEvent`
test('changes button text on click', async () => {
  render(Comp)
  const button = screen.getByRole('button')
  expect(button).toHaveTextContent('count is 0')
  // Using await when firing events is unique to the svelte testing library because
  // we have to wait for the next `tick` so that Svelte flushes all pending state changes.
  await fireEvent.click(button)

  expect(button).toHaveTextContent('count is 1')
})