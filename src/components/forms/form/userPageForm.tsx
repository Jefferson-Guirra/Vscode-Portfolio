import React from 'react'
import { BiUser } from 'react-icons/bi'
import Form from './index'
import { FormProps } from './form-protocols'
import * as C from './user-form'

type Props = FormProps

export const UserPage = ({
  button,
  handleSubmit,
  inputs,
  linkProps,
}: Props) => {
  return (
    <C.Container>
      <article className="content-box">
        <div className="content">
          <span className="user-icon">
            <BiUser size={64} />
          </span>
          <Form
            button={button}
            handleSubmit={handleSubmit}
            inputs={inputs}
            linkProps={linkProps}
          />
        </div>
      </article>
    </C.Container>
  )
}
