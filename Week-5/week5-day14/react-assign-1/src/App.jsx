import React from "react";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="mx-auto flex min-h-screen w-[90%] max-w-6xl flex-col border border-gray-300 bg-white shadow-sm">
        <Navbar />

        <main className="flex-1 px-6 py-10 md:px-10">
          <UserList />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;





