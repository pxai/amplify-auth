import { FC, useState, ChangeEvent, MouseEvent } from 'react';

const SignUpConfirm: FC = () => {
  const [values, setValues] = useState({email: '', code: ''});
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;

    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSignUpConfirm = (event: MouseEvent<HTMLButtonElement>) => {
    console.log("SignUp Confirm: ", values);
  };

  return (
    <>
      <form>
        <div>
          <input
            type="text"
            name="email"
            placeholder="email"
            required
            value={values.email}
            onChange={handleChange}
            />
        </div>
        <div>
          <input
            type="text"
            name="code"
            placeholder="code"
            required
            value={values.code}
            onChange={handleChange}
            />
        </div>
        <div>
          <button onClick={handleSignUpConfirm}>Sign Up Confirm</button>
        </div>
      </form>
    </>
  )
}

export default SignUpConfirm;
