import Sidebar from './component/Sidebar/Sidebar'
import './App.scss'
import Chat from './component/Chat/Chat'

function App() {
    return (
        <div className="app">
            <Sidebar />
            <Chat />
        </div>
    )
}

export default App
