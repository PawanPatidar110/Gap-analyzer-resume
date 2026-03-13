import { useState } from "react";
import { analyzeResume } from "../service/api";


export default  function ResumeUpload({role,onResult}:any){
const [file, setFile] = useState<File | null>(null);

const handleSubmit = async () =>{
    if(!file || !role) return;

    const formData =new  FormData();
    
    formData.append("resume",file);
    formData.append("role",role);

    const res = await analyzeResume(formData);

    onResult(res.data.data);
    };
    
     return (
    <div className="space-y-4">

      <input
        type="file"
        accept=".pdf,.doc,.docx "
        className="block w-full border rounded-lg p-3"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
      >
        Analyze Resume
      </button>

    </div>
  );
}