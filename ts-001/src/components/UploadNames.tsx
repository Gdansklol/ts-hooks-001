import { useState } from 'react';
import './UploadNames.css'; 

const lazyInitState = (): string[] => {
  console.log('lazy initState');
  return ['Mellanie', 'Neil'];
};

function UploadNames() {
  const [names, setNames] = useState<string[]>(() => lazyInitState());
  const [input, setInput] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleUpload = () => {
    if (!input.trim()) return;
    setNames(prev => [...prev, input]);
    setInput('');
  };

  return (
    <div className="container"> 
      <div className="upload-box">
        <input type="text" placeholder='Enter user name...' value={input} onChange={handleInputChange} />
        <button onClick={handleUpload}>Upload</button>
        {names.map((name, index) => (
          <p key={index}>{name}</p>
        ))}
      </div>
    </div>
  );
}

export default UploadNames;
