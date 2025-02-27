import React, { useState } from 'react';

const MyComponent = () => {
const [niveauEtude, setNiveauEtude] = useState('');
const [typeDev, setTypeDev] = useState('');
const [contraintes, setContraintes] = useState('');
const [outils, setOutils] = useState('');
const [prompt, setPrompt] = useState('');

return (
    <div className="w-3/4 mx-auto p-6 glass rounded-lg">
        <div className="mb-4 w-[15%]">
            <label className="block text-sm font-medium text-gray-700">Niveau études</label>
            <select
                value={niveauEtude}
                onChange={(e) => setNiveauEtude(e.target.value)}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
                <option value=""></option>
                <option value="option1">Apprentissage</option>
                <option value="option2">développeur</option>
                <option value="option3">3iem année</option>
                <option value="option4">4iem année</option>
                <option value="option5">5iem année</option>

            </select>
        </div>

        <div className="mb-4 ml-[15%] w-[15%]">
            <label className="block text-sm font-medium text-gray-700">Type de Dev</label>
            <select
                value={typeDev}
                onChange={(e) => setTypeDev(e.target.value)}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
                <option value=""></option>
                <option value="option1">Frontend</option>
                <option value="option2">Backend</option>
                <option value="option3">Fullstack</option>
                <option value="option4">IA</option>
                <option value="option5">Data Science</option>
                <option value="option6">CI/CD</option>
            </select>
        </div>

        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Contraintes Spécifiques</label>
            <input
                type="text"
                value={contraintes}
                onChange={(e) => setContraintes(e.target.value)}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
        </div>

        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Outils Complémentaires Utilisés</label>
            <input
                type="text"
                value={outils}
                onChange={(e) => setOutils(e.target.value)}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
        </div>

        <div className="mb-4 flex items-center">
            <input
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm font-medium text-gray-700">Checkbox</label>
        </div>

        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Prompt générer</label>
            <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
        </div>

        <button className="bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            Button
        </button>
        </div>
    );
};

export default MyComponent;
