import { FieldType } from './@types/field-type'
const createField = (type: string, placeholder: string): FieldType => {
  return {
    type,
    inputProps: {
      name: type,
      placeholder: placeholder,
      type: type,
    },
  }
}

export default createField
