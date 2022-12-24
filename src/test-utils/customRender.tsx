import './jest-setup'
import { ReactElement } from 'react'
import { render } from '@testing-library/react'

beforeAll(() => {
  jest.mock('facepaint', () => ({
    ...jest.requireActual('facepaint'),
    mq: jest.fn(),
  }))
})

afterAll(() => {
  jest.unmock('facepaint')
})

export const customRender = (ui: ReactElement) => render(ui)
