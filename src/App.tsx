import { useState } from "react";
import Layout from "./components/Layout";
import TextAnalyzer from "./pages/TextAnalyzer";
import UploadAnalyzer from "./pages/UploadAnalyzer";
import RoleInfo from "./pages/RoleInfo";

function App() {

  const [page, setPage] = useState("text");

  const renderPage = () => {
    if (page === "text") return <TextAnalyzer />;
    if (page === "upload") return <UploadAnalyzer />;
    if (page === "role") return <RoleInfo />;
  };

  return (
    <Layout setPage={setPage}>
      {renderPage()}
    </Layout>
  );
}

export default App;