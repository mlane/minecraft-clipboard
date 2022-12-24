import { customRender } from 'src/test-utils'
import { Home } from '../Home'

describe('Home', () => {
  it('checks for text in the document', () => {
    const { getByText } = customRender(<Home />)
    expect(getByText('Home')).toBeInTheDocument()
  })
})
