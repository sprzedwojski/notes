import React from 'react'
import './App.css'
import Notes from './Notes'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

function App() {
    return (
        <Container maxWidth="lg">
            <Typography variant="h4" style={{margin: '1rem 0'}}>
                Welcome to SzymNotes!
            </Typography>
            <Notes/>
        </Container>
    )
}

export default App
