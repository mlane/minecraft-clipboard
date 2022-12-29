const initialClipboardValue = {
  checklist: [],
  name: '',
}
const numberOfClipboardChecklist = 150
interface ChangeClipboardChecklistItemConfig {
  index: number
  type: string
  value: string
}
interface ClipboardConfig {
  checklist: ClipboardChecklistConfig
  name: ClipboardNameConfig
}
type ClipboardChecklistConfig = ClipboardChecklistItemConfig[]
interface ClipboardChecklistItemConfig {
  name: ClipboardChecklistItemNameConfig
  state: ClipboardChecklistItemStateConfig
}
type ClipboardChecklistItemNameConfig = string | null
type ClipboardChecklistItemStateConfig = string | null
type ClipboardNameConfig = string | null

export {
  initialClipboardValue,
  numberOfClipboardChecklist,
  ClipboardConfig,
  ClipboardChecklistConfig,
  ChangeClipboardChecklistItemConfig,
  ClipboardChecklistItemConfig,
  ClipboardChecklistItemNameConfig,
  ClipboardChecklistItemStateConfig,
  ClipboardNameConfig,
}
