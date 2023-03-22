import React from 'react'
import Input from '../input'
import Link from 'next/link'
import { FormProps } from './constants/form-props'

export const Form = ({
  handleSubmit,
  inputs,
  linkProps,
  button,
}: FormProps) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        {inputs.map((item, index) => (
          <Input key={index} {...item} />
        ))}
        {linkProps && <Link href={linkProps.router}>{linkProps.text}</Link>}
        <button>{button}</button>
      </form>
    </>
  )
}