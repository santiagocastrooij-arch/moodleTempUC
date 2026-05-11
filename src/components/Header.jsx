import { useState } from 'react';
import logoComfacho from '../assets/logo_comfamiliar.png'

export default function Header() {
    // Estado simple para simular el cambio de pestaña activa
    const [activeTab, setActiveTab] = useState('Área personal');
    const navLinks = ['Página Principal', 'Área personal', 'Mis cursos'];

    return (
        <header className="flex items-center justify-between px-6 py-2 mb-16 bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
            <div className="flex items-center gap-4">
                <div className="flex items-center">
                    <img className="h-20 p-4" src={logoComfacho} alt="logo-comfamiliar"/>
                </div>

                <nav className="hidden md:flex items-center ml-4 h-full">
                    {navLinks.map((link) => (
                        <button
                            key={link}
                            onClick={() => setActiveTab(link)}
                            className={`px-4 h-12 text-sm font-medium transition-all relative cursor-pointer
                ${activeTab === link
                                ? 'text-blue-600 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-blue-600'
                                : 'text-gray-500 hover:text-blue-500'
                            }`}
                        >
                            {link}
                        </button>
                    ))}
                </nav>
            </div>


            <div className="flex items-center gap-3">
                <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full relative cursor-pointer">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <span className="absolute top-1 right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
            6
          </span>
                </button>

                <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full cursor-pointer">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                </button>

                <div className="h-8 w-[1px] bg-gray-200 mx-1"></div>

                {/* Perfil de Usuario */}
                <button className="flex items-center gap-2 p-1 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                    <div className="w-9 h-9 p-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-bold text-sm border border-gray-300">
                        USER
                    </div>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>


            </div>
        </header>
    );
}