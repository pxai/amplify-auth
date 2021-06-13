import { Auth } from 'aws-amplify';

export default async function signUp(username: string, password: string, attributes: any) {
    try {
        const { user } = await Auth.signUp({
            username,
            password,
            attributes: {
                email,
                phone_number,
            }
        });
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
}
