import React from 'react'
import Input from '~/components/form/Input'
import { FormProvider } from '~/components/form/FormContext'
import Send from '~/components/form/Send'

const REGEX_EMAIL = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const Form = () => {
  return <div className="form-wrap">
    <FormProvider>
      <form>
        <Input
          type="text"
          label="이름"
          name="name"
          feedback="이름을 입력해주세요."
          validate={(value) => Boolean(value.length)}
        />
        <Input
          type="tel"
          label="연락처"
          name="phone"
          feedback="연락처 번호를 입력해주세요."
          validate={(value) => Boolean(value.length)}
        />
        <Input
          type="text"
          label="이메일"
          name="email"
          feedback="이메일을 입력해주세요."
          validate={(value) => REGEX_EMAIL.test(value)}
        />
        <Input
          type="text"
          label="회사명"
          name="company"
          feedback="회사명을 입력해주세요."
          validate={(value) => Boolean(value.length)}
        />
      </form>
      <Send></Send>
    </FormProvider>
  
      {/* <Field.RadioGroup legend="성별" feedback="성별을 선택하세요">
        <Field.Radio name="gender" value="male" label="남자" />
        <Field.Radio name="gender" value="female" label="여자" />
      </Field.RadioGroup>

      <Field.Checkbox 
        label="Check me out"
        name="check"
        value="1"
        feedback="체크해주세요"
        validate={(target) => target.checked}
      /> */}
  </div>
}

export default Form