
import { useState } from "react";
import defaultPic from "../assets/user_pics.png";
import { handelSend } from "../utiles/handelSend"; //bussiness logic of handelSend

function LeftPanel() {

  const [userImage, setUserImage] = useState<string>(defaultPic);
  const [file, setFile] = useState<File | null>(null);

  //Display the Selected Image by User in that Component
  const handelImageInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const imageUrl = URL.createObjectURL(selectedFile);
      setUserImage(imageUrl);
    }
  }

  return (
    <aside className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 w-80 h-80">
      <div className="w-52 h-52 mb-4">
        <img
          src={userImage}
          alt="User"
          className="w-full h-full rounded-lg shadow-sm"
        />
        <input type="file"
          accept="image/*" capture="environment"
          className="hidden"
          onChange={handelImageInput}
        id="chooseImage"/>
      </div>

      <div className="flex gap-3">
        <label
          htmlFor="chooseImage"
          className="px-3 py-2 rounded-lg bg-yellow-400 hover:bg-yellow-500 transition font-semibold text-gray-800 shadow-md cursor-pointer"
        >
          Select Pic
        </label>
        <button
          onClick={() => { handelSend(file) }}
          className="px-3 py-2 rounded-lg bg-green-500 hover:bg-green-600 transition font-semibold text-white shadow-md"
        >
          Upload
        </button>
      </div>
    </aside>
  );
}

export default LeftPanel;
