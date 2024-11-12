import React, { useState } from "react";
import axios from "axios";

function HostelUp() {
 
  const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');
  const [locationType, setLocationType] = useState('');
  const [rentalFee, setRentalFee] = useState(''); 
  const [additionalFee,setAdditionalFee] = useState('');
  const [detailedLocation, setDetailedLocation] = useState(''); 
  const [gender, setGender] = useState(''); 
  const [spaceAvailable, setSpaceAvailable] = useState('');
  const [roomDetails, setRoomDetails] = useState('');
  const [imageUrl, setImageUrl] = useState(null);
  const [progress, setProgress] = useState({ started: false, pc: 0 });
  const [msg, setMsg] = useState(null);
  const [isFileInputDisabled, setIsFileInputDisabled] = useState(false);
  const [file, setFile] = useState(null);

  function handleUpload() {
    if (!file) {
      setMsg("No file selected");
      return;
    }

    const fd = new FormData();
    fd.append('file', file);
    fd.append('title', title);
    fd.append('description', description);
    fd.append('locationType', locationType);
    fd.append('rentalFee', rentalFee);
    fd.append('additionalFee', additionalFee);
    fd.append('detailed location', detailedLocation);
    fd.append('detailed roomDetails', roomDetails);
    fd.append('gender', gender);
    fd.append('spaceAvailable', spaceAvailable);

    setMsg("Uploading...");
    setProgress(prevState => ({ ...prevState, started: true }));

    axios.post('http://httpbin.org/post', fd, {
      onUploadProgress: (progressEvent) => {
        setProgress(prevState => ({ ...prevState, pc: progressEvent.loaded / progressEvent.total * 100 }));
      },
      headers: {
        "Custom-Header": "value"
      }
    })
      .then(res => {
        setMsg("Upload successful");
        setImageUrl(URL.createObjectURL(file)); 
        setIsFileInputDisabled(true); 
        console.log(res.data);
      })
      .catch(err => {
        setMsg("Upload failed");
        console.error(err);
      });
  }

  return (
    <div className="App p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-6">
      <h1 className="text-2xl font-bold mb-4">Ifinder</h1>

      <input 
        type="file" 
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
        onChange={(e) => { setFile(e.target.files[0]) }} 
        disabled={isFileInputDisabled} 
      />

      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">Title:</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Enter the hostel name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
        <input 
          type="text" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          placeholder="Enter description"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">Detailed Location:</label>
        <input 
          type="text"
          value={ detailedLocation}
          onChange={(e) => setDetailedLocation(e.target.value)}
          placeholder="Detailes Location"
          min="0"
          step="0.01"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">Gender:</label>
        <input 
          type="text"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          placeholder="Enter cost"
          min="0"
          step="0.01"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">Room Type:</label>
        <textarea 
        type="text"
          value={roomDetails} 
          onChange={(e) => setRoomDetails(e.target.value)} 
          placeholder="Enter room detail"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></textarea>
      </div>

      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">Space Available:</label>
        <input 
          type="text"
          value={spaceAvailable}
          onChange={(e) => setSpaceAvailable(e.target.value)}
          placeholder="Enter space available"
          min="0"
          step="0.01"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">Rental Fee:</label>
        <input 
          type="number"
          value={rentalFee}
          onChange={(e) => setRentalFee(e.target.value)}
          placeholder="Enter cost"
          min="0"
          step="0.01"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div>
        <label className="block text-blue-700 text-sm font-bold mb-2">Additional Fee:</label>
        <input 
          type="number"
          value={additionalFee}
          onChange={(e) => setAdditionalFee(e.target.value)}
          placeholder="Enter cost"
          min="0"
          step="0.01"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      

      <button 
        onClick={handleUpload} 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Upload
      </button>

      {progress.started && <progress className="w-full mt-2" max="100" value={progress.pc}></progress>}
      {msg && <span className="block mt-2 text-blue-500">{msg}</span>}

      {imageUrl && (
        <div className="relative mt-4">
          <img src={imageUrl} alt="Uploaded hostel" className="rounded-lg shadow-lg w-full" />
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 w-full rounded-b-lg">
            <p><strong>Title:</strong> {title}</p>
            <p><strong>Description:</strong> {description}</p>
            <p><strong>Detailed Location:</strong> {detailedLocation}</p>
            <p><strong>Room Details:</strong> {roomDetails}</p>
            <p><strong>Space Available:</strong> {spaceAvailable}</p>
            <p><strong>Rental Fee:</strong> {rentalFee}</p>
            <p><strong>Additional Fee:</strong> {additionalFee}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default HostelUp;