import { useState } from 'react'

const SignupForm = (props) => {
 const [formData, setFormData] = useState({
  username: null,
  email: null,
  password: null,
  passwordCheck: null
 })

 // handle input changes

 // check if the formdata is valid for submission, if not then display error
 // handle the submit of the form data (through props)

 return (
  <form>
   <label>Username</label>
   <input name="username" type="text" />
   <label>Email</label>
   <input name="email" type="text" />
   <label>Password</label>
   <input name="password" type="password" />
   <label>Confirm Password</label>
   <input name="passwordCheck" type="password" />
  </form>
 )
}

export default SignupForm