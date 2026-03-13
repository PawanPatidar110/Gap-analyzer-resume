import Sidebar from "./Sidebar";

export default function Layout({ children, setPage }: any) {

  return (
    <div className="flex">

      <Sidebar setPage={setPage} />

      <div className="flex-1 p-8 bg-gray-100 min-h-screen">
        {children}
      </div>

    </div>
  );
}