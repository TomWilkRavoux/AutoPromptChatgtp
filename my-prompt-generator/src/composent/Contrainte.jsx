import React, {useState} from 'react'

const Contrainte = () => {
    const [contraintes, setContraintes] = useState('');

    return(
        <div className="mb-4 w-[15%]">
        <label className="block text-sm font-medium text-gray-700">Contraintes Spécifiques</label>
        <select
            value={contraintes}
            onChange={(e) => setContraintes(e.target.value)}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
            <option value=""></option>
            <option value="option1">Code lisible et bien commenté</option>
            <option value="option2">Respect des bonnes pratiques et normes de l'industrie</option>
            <option value="option3">Performance optimisée</option>
            <option value="option4">Sécurité renforcée</option>
            <option value="option5">Simplement sans faire compliqué</option>
        </select>
    </div>
    )
};

export default Contrainte;