import 'formdata-polyfill'
import swal from 'sweetalert';
import { sendMail } from './aws-email'

export default async (from) => {
  const fd = new FormData(from)
  const name = fd.get('name')
  const phone = fd.get('phone')
  const email = fd.get('email')
  const company = fd.get('company')

  try {
    swal({
      text: "발송중...",
      button: false,
      closeModal: false,
      closeOnClickOutside: false
    })

    await sendMail({
      name,
      address: 'byjihye@hashsnap.net',
      to: 'byjihye@hashsnap.net',
      subject: '해시스냅 메일문의',
      message: `
      <p>이름 : ${name}</p>
      <p>연락처 : ${phone}</p>
      <p>이메일 : ${email}</p>
      <p>회사명 : ${company}</p>
      `,
    })

    swal({
      icon: 'success',
      title: '문의 접수가 완료되었습니다.',
    })

  }catch(ev) {
    swal({
      icon: 'error',
      title: '다시 시도해주세요.',
    })
  }
}