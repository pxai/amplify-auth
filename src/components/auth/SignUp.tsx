import { FC, useState, ChangeEvent, MouseEvent } from 'react';

const SignUp: FC = () => {
  const [values, setValues] = useState({email: '', phone: ''});
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;

    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSignUp = (event: MouseEvent<HTMLButtonElement>) => {
    console.log("Signup: ", values);
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
          <input
            type="phone"
            name="phone"
            placeholder="phone (optional)"
            value={values.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <button onClick={handleSignUp}>Sign Up</button>
        </div>
      </form>
    </>
  )
}

export default SignUp;
