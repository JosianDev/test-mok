import React, { useState, useEffect } from "react";
import Table from "./Table";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [deletedData, setDeletedData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/?results=100");
      const result = await response.json();
      setData(result.results);
      setFilteredData(result.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const addColor = () => {
    setFilteredData((prevData) =>
      prevData.map((item, index) =>
        index % 2 === 0
          ? { ...item, color: "#112233" }
          : { ...item, color: "#556677" }
      )
    );
  };

  const sortByCountry = () => {
    setFilteredData((prevData) =>
      [...prevData].sort((a, b) =>
        a.location.country.localeCompare(b.location.country)
      )
    );
  };

  const deleteRow = (index) => {
    const deletedRow = filteredData[index];
    setFilteredData((prevData) => prevData.filter((item, i) => i !== index));
    setDeletedData((prevDeletedData) => [...prevDeletedData, deletedRow]);
  };

  const restoreData = () => {
    setFilteredData(data);
    setDeletedData([]);
  };

  const filterByCountry = (country) => {
    if (country === "") {
      setFilteredData(data);
    } else {
      const lowerCaseCountry = country.toLowerCase();
      setFilteredData((prevData) =>
        prevData.filter((item) =>
          item.location.country.toLowerCase().includes(lowerCaseCountry)
        )
      );
    }
  };

  const sortDataByField = (field) => {
    setFilteredData((prevData) =>
      [...prevData].sort((a, b) => (a[field] > b[field] ? 1 : -1))
    );
  };

  return (
    <div className="app-container">
      <h1>Lista de Usuarios</h1>
      <Table
        data={filteredData}
        onAddColor={addColor}
        onSortByCountry={sortByCountry}
        onDeleteRow={deleteRow}
        onRestoreData={restoreData}
        onFilterByCountry={filterByCountry}
        onSortDataByField={sortDataByField}
      />
    </div>
  );
}

export default App;
