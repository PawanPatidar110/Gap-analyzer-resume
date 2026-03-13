import { useState, useEffect } from "react";
import { getRoleDetails, getRoles,  } from "../service/api";

export default function RoleInfo() {

  const [role, setRole] = useState("");
  const [roles, setRoles] = useState<string[]>([]);
  const [data, setData] = useState<any>(null);

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

  const fetchRole = async () => {

    if (!role) return;

    try {
      const res = await getRoleDetails(role);
      setData(res.data.role);
    } catch (err) {
      console.error("Failed to fetch role details", err);
    }
  };

  return (
    <div>

      <h1 className="text-2xl font-bold mb-2">
        Role Information
      </h1>

      <p className="text-gray-500 mb-6">
        Select a role to view required skills, optional skills and tools.
      </p>

      {/* Role Dropdown */}
      <select
        className="border p-3 rounded mb-4 w-full"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="">Select role</option>

        {roles.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>

      <button
        onClick={fetchRole}
        className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
      >
        Get Role Details
      </button>

      {data && (
        <div className="mt-6 space-y-4">

          <div>
            <h3 className="font-bold">Required Skills</h3>
            <ul className="list-disc pl-5">
              {data.required_skills.map((s: string) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold">Optional Skills</h3>
            <ul className="list-disc pl-5">
              {data.optional_skills.map((s: string) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold">Tools</h3>
            <ul className="list-disc pl-5">
              {data.tools.map((s: string) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

        </div>
      )}

    </div>
  );
}