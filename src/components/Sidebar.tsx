export default function Sidebar({ setPage }: any) {

  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-6">

      <h2 className="text-xl font-bold mb-8">
        Resume Analyzer
      </h2>

      <ul className="space-y-4">

        <li>
          <button
            onClick={() => setPage("text")}
            className="w-full text-left hover:text-blue-400"
          >
            Analyze Text Resume
          </button>
        </li>

        <li>
          <button
            onClick={() => setPage("upload")}
            className="w-full text-left hover:text-blue-400"
          >
            Upload Resume
          </button>
        </li>

        <li>
          <button
            onClick={() => setPage("role")}
            className="w-full text-left hover:text-blue-400"
          >
            Role Information
          </button>
        </li>

      </ul>

    </div>
  );
}