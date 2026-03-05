import './App.css'
import MagicBento from './components/MagicBento'

function App() {
    return (
        // Mantenemos el fondo oscuro y centramos el componente para que se vea bien
        <div style={{ backgroundColor: '#000000', minHeight: '100vh', padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <MagicBento
                textAutoHide={true}
                enableStars={true}
                enableSpotlight={true}
                enableBorderGlow={true}
                enableTilt={false}
                enableMagnetism={false}
                clickEffect={true}
                spotlightRadius={400}
                particleCount={12}
                glowColor="132, 0, 255"
                disableAnimations={false}
            />
        </div>
    )
}

export default App