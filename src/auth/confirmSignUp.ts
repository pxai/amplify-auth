import { Auth } from 'aws-amplify';

export default async function confirmSignUp(username: string, code: string) {
    try {
      await Auth.confirmSignUp(username, code);
    } catch (error) {
        console.log('error confirming sign up', error);
    }
}
