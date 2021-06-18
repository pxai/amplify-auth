import { FC, MouseEvent } from 'react';

const SignOutAll: FC = () => {
  const handleSignOutAll = (event: MouseEvent<HTMLButtonElement>) => {
    console.log("SignOut: ");
  };

  return (
    <>
      <form>
        <div>
          <button onClick={handleSignOutAll}>Sign Out All</button>
        </div>
      </form>
    </>
  )
}

export default SignOutAll;
