import { useState, useEffect } from "react";
import Result from "../components/Result";
import { analyzeResume, getRoles } from "../service/api";

export default function UploadAnalyzer() {

  const [file, setFile] = useState<File | null>(null);
  const [role, setRole] = useState("");
  const [roles, setRoles] = useState<string[]>([]);
  const [result, setResult] = useState<any>(null);

  // Fetch roles when component loads
  useEffect(() => {
    fetchRoles();
  }, []);

  const fetchRoles = async () => {
    try {
      const res = await getRoles();
      setRoles(res.data);
    } catch (error) {
      console.error("Failed to fetch roles", error);
    }
  };

  const handleAnalyze = async () => {

    if (!file) return;

    const formData = new FormData();

    formData.append("resume", file);

    if (role) {
      formData.append("role", role);
    }

    const res = await analyzeResume(formData);

    setResult(res.data.data);
  };

  return (
    <div>

      <h1 className="text-2xl font-bold mb-6">
        Upload Resume
      </h1>

      {/* Resume Upload */}
      <input
        type="file"
        accept=".pdf,.docx"
        className="mb-4"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      {/* Role Dropdown */}
      <select
        className="border p-3 rounded mb-4 w-full"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="">Select role (optional)</option>

        {roles.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}

      </select>

      {/* Analyze Button */}
      <button
        onClick={handleAnalyze}
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
      >
        Analyze
      </button>

      {/* Result */}
      <Result result={result} />

    </div>
  );
}