import { useState, useEffect } from "react";

function ListOfEmps() {
  const [emps, setEmps] = useState([]);
  const [selectedEmp, setSelectedEmp] = useState(null);
  const [editEmp, setEditEmp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const gotoEmployee = (empObj) => {
    setSelectedEmp(empObj);
  };

  const gotoEditEmployee = (empObj) => {
    setEditEmp(empObj);
  };

  const handleEditChange = (field, value) => {
    setEditEmp((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      let res = await fetch(`http://localhost:5000/employee/${editEmp._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editEmp),
      });

      if (res.status === 200) {
        setEmps((prev) =>
          prev.map((e) => (e._id === editEmp._id ? editEmp : e))
        );
        setEditEmp(null);
        alert("Employee updated successfully");
      } else {
        let errData = await res.json();
        throw new Error(errData.message || "Update failed");
      }
    } catch (err) {
      alert("Error updating employee: " + err.message);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      try {
        let res = await fetch(`http://localhost:5000/employee/${id}`, {
          method: "DELETE",
        });
        if (res.status === 200) {
          setEmps((prev) => prev.filter((e) => e._id !== id));
          alert("Employee deleted successfully");
        } else {
          throw new Error("Delete failed");
        }
      } catch (err) {
        alert("Error deleting employee: " + err.message);
      }
    }
  };

       

  useEffect(() => {
    async function getEmps() {
      try {
        setLoading(true);
        setError("");
        let res = await fetch("http://localhost:5000/employee/employees");
        if (res.status === 200) {
          let resObj = await res.json();
          setEmps(resObj);
        } else {
          let errData = await res.json();
          throw new Error(errData.message || `Fetch failed with status ${res.status}`);
        }
      } catch (err) {
        console.error("Error fetching employees:", err);
        setError(err.message || "Unable to fetch employees.");
      } finally {
        setLoading(false);
      }
    }
    getEmps();
  }, []);

  if (selectedEmp) {
    return (
      <div className="max-w-md mx-auto mt-10 bg-white p-5 rounded-4xl">
        <h1 className="text-3xl text-center mb-5">Employee Details</h1>
        <p className="mb-3"><strong>Name:</strong> {selectedEmp.name}</p>
        <p className="mb-3"><strong>Email:</strong> {selectedEmp.email}</p>
        <p className="mb-3"><strong>Mobile:</strong> {selectedEmp.mobile}</p>
        <p className="mb-3"><strong>Designation:</strong> {selectedEmp.designation}</p>
        <p className="mb-5"><strong>Company:</strong> {selectedEmp.companyName}</p>
        <button
          onClick={() => setSelectedEmp(null)}
          className="bg-gray-600 p-2 rounded-2xl text-white w-full"
        >
          Back
        </button>
      </div>
    );
  }

  if (editEmp) {
    return (
      <div className="max-w-md mx-auto mt-10 bg-white p-5 rounded-2xl">
        <h1 className="text-3xl text-center mb-5">Edit Employee</h1>
        <form onSubmit={handleUpdate} className="space-y-3">
          <input
            value={editEmp.name}
            onChange={(e) => handleEditChange("name", e.target.value)}
            type="text"
            placeholder="Name"
            className="border-2 p-3 w-full rounded-2xl"
            required
          />
          <input
            value={editEmp.email}
            onChange={(e) => handleEditChange("email", e.target.value)}
            type="email"
            placeholder="Email"
            className="border-2 p-3 w-full rounded-2xl"
            required
          />
          <input
            value={editEmp.mobile}
            onChange={(e) => handleEditChange("mobile", e.target.value)}
            type="text"
            placeholder="Mobile"
            className="border-2 p-3 w-full rounded-2xl"
            required
          />
          <input
            value={editEmp.designation}
            onChange={(e) => handleEditChange("designation", e.target.value)}
            type="text"
            placeholder="Designation"
            className="border-2 p-3 w-full rounded-2xl"
            required
          />
          <input
            value={editEmp.companyName}
            onChange={(e) => handleEditChange("companyName", e.target.value)}
            type="text"
            placeholder="Company"
            className="border-2 p-3 w-full rounded-2xl"
            required
          />
          <div className="flex gap-2">
            <button type="submit" className="flex-1 bg-blue-600 text-white p-3 rounded-2xl">
              Save
            </button>
            <button
              type="button"
              onClick={() => setEditEmp(null)}
              className="flex-1 bg-gray-500 text-white p-3 rounded-2xl"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }

  if (loading) {
    return <p className="text-center text-4xl mt-10">Loading employees...</p>;
  }

  if (error) {
    return (
      <div className="text-center mt-10">
        <p className="text-3xl text-red-600">Error loading employees</p>
        <p className="text-xl mt-4">{error}</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-4xl text-center p-6">List of Employees</h1>
      {emps.length === 0 ? (
        <p className="text-center text-2xl">No employees found.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 rounded-2xl gap-14">
          {emps.map((empObj) => (
            <div key={empObj._id} className="bg-white p-5 text-center text-2xl">
              <p>{empObj.email}</p>
              <p className="mb-4">{empObj.name}</p>
              <div className="flex justify-around">
                <button
                  onClick={() => gotoEmployee(empObj)}
                  className="bg-green-600 p-2 rounded-2xl text-white"
                >
                  View
                </button>
                <button
                  onClick={() => gotoEditEmployee(empObj)}
                  className="bg-blue-600 p-2 rounded-2xl text-white"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(empObj._id)}
                  className="bg-red-600 p-2 rounded-2xl text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ListOfEmps;