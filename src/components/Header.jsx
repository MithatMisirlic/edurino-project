import headerImage from '../assets/Header.svg';

const Header = () => {
    return (
        <div style={styles.header}>
            <img src={headerImage} alt="Header" style={styles.image} />
            <h1>Welcome to My App</h1>
        </div>
    );
};

const styles = {
    header: {
        top: '0',
        textAlign: 'center',
        backgroundColor: '#f0f0f0',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        zIndex: 1,
    },
    image: {
        object: 'cover',
        maxWidth: '100%',
        height: 'auto',
        marginBottom: '10px',
    },
};

export default Header;
