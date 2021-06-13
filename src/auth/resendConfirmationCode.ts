import { Auth } from 'aws-amplify';

export default async function resendConfirmationCode(username: string) {
    try {
        await Auth.resendSignUp(username);
        console.log('code resent successfully');
    } catch (err) {
        console.log('error resending code: ', err);
    }
}
