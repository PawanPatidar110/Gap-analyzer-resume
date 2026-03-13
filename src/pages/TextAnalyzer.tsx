import { useState, useEffect } from "react";
import Result from "../components/Result";
import { analyzeResume, getRoles } from "../service/api";

export default function TextAnalyzer() {

  const [text, setText] = useState("");
  const [role, setRole] = useState("");
  const [roles, setRoles] = useState<string[]>([]);
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    fetchRoles();
  }, []);

  const fetchRoles = async () => {
    try {
      const res = await getRoles();
        
      setRoles(res.data);
    } catch (err) {
      console.error("Failed to fetch roles", err);
    }
  };

  const handleAnalyze = async () => {

    if (!text.trim()) return;

    const formData = new FormData();

    formData.append("resumeText", text);

    if (role) {
      formData.append("role", role);
    }

    const res = await analyzeResume(formData);

    setResult(res.data.data);
  };

  return (
    <div>

      <h1 className="text-2xl font-bold mb-2">
        Analyze Resume Text
      </h1>

      <p className="text-gray-500 mb-6">
        Paste resume text and optionally choose a role to evaluate skill match
      </p>

      <textarea
        className="w-full border p-4 rounded mb-4"
        rows={6}
        placeholder="Paste resume text here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

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

      <button
        onClick={handleAnalyze}
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
      >
        Analyze
      </button>

      <Result result={result} />

    </div>
  );
}