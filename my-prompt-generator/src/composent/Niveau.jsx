import React, {useState} from "react";

const Niveau = () => {
    const [niveauEtude, setNiveauEtude] = useState('');

    return(
        <div className="glass p-6 rounded-lg mt">
            <label className="block text-sm font-medium text-gray-700">
                Niveau études
            </label>    
            <select 
                value = {niveauEtude}
                onChange = {(e) => setNiveauEtude(e.target.value)}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"

            >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
                <option value="option5">Option 5</option>
                <option value="option6">Option 6</option>
            </select>
        </div>
    )
};

export default Niveau;