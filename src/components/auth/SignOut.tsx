import { FC, MouseEvent } from 'react';

const SignOut: FC = () => {
  const handleSignOut = (event: MouseEvent<HTMLButtonElement>) => {
    console.log("SignOut: ");
  };

  return (
    <>
      <form>
        <div>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      </form>
    </>
  )
}

export default SignOut;
