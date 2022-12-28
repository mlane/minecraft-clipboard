import { numberOfChecklist } from 'src/constants'

export const generateClipboard = () => ({
  checklist: generateClipboardChecklist(),
  id: generateClipboardId(),
  name: '',
})

const generateClipboardId = () =>
  Array.from(Array(36), () => Math.floor(Math.random() * 36).toString(36)).join(
    ''
  )

const generateClipboardChecklist = () =>
  Array(numberOfChecklist).fill({
    name: '',
    state: 'default',
  })
