import axios from "axios";

export const handelSend = async (file: File | null) => {
  if (!file) return alert("Please Select an image!!");

  const formdata = new FormData();
  formdata.append("image", file);

  try {
    const res = await axios.post("API backend", formdata, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(res.data.url);
    alert("Uploaded Image Successfully...Wait for Info");
  } catch (error) {
    console.log("Upload Faild", error);
    alert("Upload Failed Retry again");
  }
};
