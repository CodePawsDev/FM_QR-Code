import QRCode from "./assets/image-qr-code.png";

function App() {
  
  return (
    <div className="w-full h-screen bg-blue-100 flex justify-center items-center">
      <div className="w-340 h-[550px] sm:w-[350px] sm:h-[550px] bg-white rounded-xl flex flex-col items-center font-outfit text-center">
        <img src={QRCode} alt="QR Code" className="rounded-xl w-11/12 my-4"/>
        <h1 className="text-2xl font-bold w-10/12 text-gray-800 my-3">Improve your front-end skills by building projects</h1>
        <p className="text-md w-9/12 sm:w-9/12 text-gray-400">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  )
}

export default App
