import { useEffect, useState } from 'react'
import './header.scss'
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google'

function HeaderComponent() {
    const [user, setUser] = useState([])
    const login = useGoogleLogin({
        onSuccess: (codeResponse: any) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error),
    })
    useEffect(() => {
        console.log('User:', user)
    }, [user])
    return (
        <>
            <div className="header-container shadow d-flex justify-content-between">
                <div className="left-sec">
                    <button onClick={() => login()}>
                        Sign in with Google 🚀{' '}
                    </button>
                    Left
                </div>
                <div className="right-sec">Right</div>
            </div>
        </>
    )
}

export default HeaderComponent
