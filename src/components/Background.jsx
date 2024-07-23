import background from '../assets/background.svg';

const Background = () => {
    return (
        <img src={background} alt="Background" style={styles.Background} />
    );
};

const styles = {
    Background: {
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: -1,
    },
};

export default Background;


