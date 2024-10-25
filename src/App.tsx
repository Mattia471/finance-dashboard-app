import './index.css';
import { useState } from 'react';

function App() {
    const [showSurprise, setShowSurprise] = useState(false);

    const handleSurprise = () => {
        setShowSurprise(true);
    };

    return (
        <div className="app-container flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-100 to-white">
            {/* Messaggio di benvenuto */}
            <div className="welcome-container p-6 bg-white rounded-lg shadow-md text-center mb-6">
                <h1 className="text-3xl font-bold text-pink-600 mb-4">Ciao Amore! 💕</h1>
                <p className="text-lg text-gray-700 mb-4">
                    So che abbiamo avuto un litigio, e mi dispiace.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    Vorrei solo che sapessi quanto sei importante per me e quanto mi manchi.
                </p>
                <button
                    className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition duration-200"
                    onClick={handleSurprise}
                >
                    Clicka qui per una sorpresa! 🎁
                </button>
            </div>

            {/* Sezione di sorpresa */}
            {showSurprise && (
                <div className="surprise-container p-6 bg-yellow-100 rounded-lg shadow-md text-center">
                    <h2 className="text-2xl font-bold text-pink-600 mb-4">Ecco qualcosa per te! 🧸</h2>
                    <p className="text-lg text-gray-700 mb-4">
                        Questo orsacchiotto è qui per dirti quanto ti voglio bene e quanto desidero che torni tutto come prima! ❤️
                    </p>
                    <h3 className="text-xl font-bold text-pink-600 mt-4">Ti voglio tanto bene, non tenermi distante! 🌟</h3>
                </div>
            )}
        </div>
    );
}

export default App;
