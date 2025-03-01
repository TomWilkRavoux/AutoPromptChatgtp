import React, { useState } from 'react';

const TypeDev = () => {
    const [typeDev, setTypeDev] = useState('');
    



    return(
            <div className="mb-4 ml-[15%] mr-[20%] w-[15%]">
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
    )
};

export default TypeDev ;