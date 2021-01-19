import axios from 'axios';

const SEND_EMAIL_API = 'https://m4na165xf4.execute-api.ap-northeast-2.amazonaws.com/api/raw';

export const sendMail = ({ name, address, to, subject, message }) => axios.post(SEND_EMAIL_API, {
  data: 
`From: ${ name } <${ address }>
To: ${ to }
Subject: ${ subject } 
MIME-Version: 1.0
Content-Type: text/html; charset=utf-8

<section>${ message }</section>
`
});