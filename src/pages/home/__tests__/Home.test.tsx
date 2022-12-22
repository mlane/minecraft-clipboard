import { customRender } from 'src/test-utils'
import { App } from '../../../App'

describe('App component', () => {
  it('Text should be in the document', () => {
    const { getByText } = customRender(<App />)
    expect(getByText('Home')).toBeInTheDocument()
  })
})
