import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebaseConfig' 


export const LoginAPI = (email, pass) => {

    try {
        let response = signInWithEmailAndPassword(auth ,email, pass)
        return response
    }
    catch(err){
        return err
    }
}

export const RegisterAPI = (email, pass) => {

try {
    let response = createUserWithEmailAndPassword(auth ,email, pass)
    return response
}
catch(err){
    return err
}
}