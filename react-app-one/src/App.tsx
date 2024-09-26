import React from "react";
import "./App.css";

function App() {
  // Define your dummy data array
  const data: { id: number; name: string; age: number; city: string }[] = [
    { id: 1, name: "John Doe", age: 28, city: "New York" },
    { id: 2, name: "Jane Smith", age: 34, city: "Los Angeles" },
    { id: 3, name: "Alice Johnson", age: 45, city: "Chicago" },
    { id: 4, name: "Bob Brown", age: 23, city: "Houston" },
  ];

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-custom-red-100">
      <div className="w-2/3">
        <h1 className="text-3xl font-bold underline text-blue-400 text-center mb-6">
          Simple React + Typescript + Tailwind Sample
        </h1>
        <table className="min-w-full bg-white shadow-lg rounded overflow-hidden custom-table-class">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Age</th>
              <th className="py-2 px-4">City</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="py-2 px-4">{item.id}</td>
                <td className="py-2 px-4">{item.name}</td>
                <td className="py-2 px-4">{item.age}</td>
                <td className="py-2 px-4">{item.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
