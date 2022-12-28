import { numberOfChecklist } from 'src/constants'

export const generateClipboard = () => ({
  checklist: generateClipboardChecklist(),
  name: '',
})

export const generateClipboardId = () =>
  Array.from(Array(36), () => Math.floor(Math.random() * 36).toString(36)).join(
    ''
  )

export const generateClipboardChecklist = () =>
  Array(numberOfChecklist).fill({
    name: '',
    state: 'default',
  })
