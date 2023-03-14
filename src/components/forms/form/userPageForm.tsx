import React from 'react'
import Clock from '../../header/clock/Clock'
import { ClockProps } from '@/protocols/clock'
import { BiUser } from 'react-icons/bi'
import Form from './index'
import { FormProps } from './form-protocols'
import * as C from './user-form'

type Props = FormProps

const UserPage = ({ button, handleSubmit, inputs, linkProps }: Props) => {
  const clockProps: ClockProps = {
    language: 'pt-BR',
    dateTimeFormatOptions: {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    },
  }

  return (
    <C.Container>
      <header>
        <Clock
          language={clockProps.language}
          dateTimeFormatOptions={clockProps.dateTimeFormatOptions}
        />
      </header>
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

export default UserPage
