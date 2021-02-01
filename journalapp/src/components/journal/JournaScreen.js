import React from 'react'
import { NoteScreen } from '../notes/NoteScreen'
import { NothingSelected } from './NothinSelected'
import { Sidebar } from './Sidebar'

const JournaScreen = () => {
    return (
        <div className="journal__main-content">
            <Sidebar />
            <main>
                {/* <NothingSelected /> */}
                <NoteScreen />
            </main>
        </div>
    )
}

export default JournaScreen
