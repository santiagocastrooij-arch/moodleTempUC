// src/App.jsx
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import {Card} from './components/Card.jsx';
import { estudiantes } from './data/data.js';

function App() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <Header />

            <main className="max-w-6xl mx-auto px-4 h-screen">
                <div className="mb-8 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-slate-700">
                        Participantes Open Source: <span className="text-blue-600">{estudiantes.length}</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {estudiantes.map((est) => (
                        <Card key={est.id} estudiante={est} />
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default App;