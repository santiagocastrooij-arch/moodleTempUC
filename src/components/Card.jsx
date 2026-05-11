export function Card({ estudiante }) {
    return (
        <div key={estudiante.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className={`h-2 'bg-gray-400'}`}></div>
            <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800">{estudiante.nombre}</h2>
                <p className="text-gray-600 my-3 italic text-sm">"{estudiante.frase}"</p>
                <a
                    href={`https://github.com/${estudiante.github}`}
                    target="_blank"
                    className="inline-block mt-2 text-blue-600 font-medium hover:underline"
                >
                    Ver Perfil de GitHub →
                </a>
            </div>
        </div>
    );
}