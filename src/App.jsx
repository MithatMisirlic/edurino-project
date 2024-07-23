import React, { useState } from 'react';
import './App.css';
import Background from './components/Background';
import Header from "./components/Header.jsx";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div style={styles.appContainer}>
            <Background />
            <Header />

        </div>
    );
}

const styles = {
    appContainer: {
        position: 'relative',
        width: '400px',
        height: '700px',
        margin: '0 auto',
        border: '1px solid #ddd',
        overflow: 'hidden',
    },
};

export default App;


