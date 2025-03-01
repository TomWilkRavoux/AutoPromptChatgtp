import React, {useState} from "react";

const Niveau = () => {
    const [niveauEtude, setNiveauEtude] = useState('');

    return(
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
    )
};

export default Niveau;