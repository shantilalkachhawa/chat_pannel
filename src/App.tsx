import React from 'react'
import logo from './logo.svg'
import './App.scss'
import HeaderComponent from './shared/components/header/header'
import ChatLayoutComponent from './components/chat-layout'

function App() {
    return (
        <>
            <HeaderComponent />
            <ChatLayoutComponent />
        </>
    )
}

export default App
