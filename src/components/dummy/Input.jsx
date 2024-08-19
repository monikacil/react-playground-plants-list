export default function Input ({name, type="text", defaultValue="", placeholder="", onChange}) {
    return (
    <>
    <label htmlFor={name} className="block text-md font-medium md:text-sm leading-6">
      {name}
    </label>
    <div className="relative mt-2 rounded-md shadow-sm">
      <input className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-300 text-md md:text-sm leading-6" 
        id={name} 
        name={name} 
        type={type} 
        placeholder={placeholder} 
        onChange={onChange} 
        defaultValue={defaultValue} />
    </div>
    </>
        
    );
  }
  