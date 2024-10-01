import { useState } from "react";

export default function Input ({name, type="text", defaultValue="", placeholder="", required="true", onChange}) {

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;
    if (!value.trim()) {
      setError('This field is required.');
    } else {
      setError('');
      onChange(value, id)
    }
  };

    return (
    <div className="my-5">
      <label htmlFor={name} className="block text-md font-medium md:text-sm leading-6">
        {name}
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <input className={
          `block w-full rounded-md border-0 py-1.5 px-4 ring-1 ring-inset 
          ${ error ? "ring-red-400 focus:ring-red-500" : "ring-gray-300 focus:ring-sky-300"}
           placeholder:text-gray-400 focus:ring-2 focus:ring-inset text-md md:text-sm leading-6`
          } 
          id={name} 
          name={name} 
          type={type} 
          placeholder={placeholder} 
          onChange={handleInputChange}
          defaultValue={defaultValue} />
          {required && error && <p className="text-xs absolute text-red-400">{error}</p>}
      </div>
    </div>
    );
  }
  