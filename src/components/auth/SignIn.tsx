import { FC, useState, ChangeEvent, MouseEvent } from 'react';

const SignIn: FC = () => {
  const [values, setValues] = useState({email: ''});
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;

    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSignIn = (event: MouseEvent<HTMLButtonElement>) => {
    console.log("SignIn: ", values);
  };

  return (
    <>
      <form>
        <div>
          <input
            type="text"
            name="email"
            placeholder="username"
            required
            value={values.email}
            onChange={handleChange}
            />
        </div>
        <div>
          <button onClick={handleSignIn}>Sign In</button>
        </div>
      </form>
    </>
  )
}

export default SignIn;
