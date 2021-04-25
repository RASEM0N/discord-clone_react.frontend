import Sidebar from './component/Sidebar/Sidebar'
import './App.scss'
import Chat from './component/Chat/Chat'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from './store/user-reducer'
import Login from './component/Authorization/Login'
import { useEffect } from 'react'
import { fbAuth } from './firebase'

function App() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    useEffect(() => {
        fbAuth.onAuthStateChanged((authUser) => {
            if (authUser) {
                dispatch(
                    login({
                        uid: authUser.uid,
                        photoURL: authUser.photoURL,
                        email: authUser.email,
                        displayName: authUser.displayName,
                    })
                )
            } else {
                dispatch(logout())
            }
        })
    }, [dispatch])

    return (
        <div className="app">
            {user ? (
                <>
                    <Sidebar />
                    <Chat />
                </>
            ) : (
                <Login />
            )}
        </div>
    )
}

export default App
