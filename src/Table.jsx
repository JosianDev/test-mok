import React from "react";
import TableRow from "./TableRow";

function Table({
  data,
  onAddColor,
  onSortByCountry,
  onDeleteRow,
  onRestoreData,
  onFilterByCountry,
  onSortDataByField,
}) {
  return (
    <div className="table-container">
      <button onClick={onAddColor}>Add Color</button>
      <button onClick={onSortByCountry}>Sort by Country</button>
      <button onClick={onRestoreData}>Restore Data</button>
      <input
        type="text"
        placeholder="Filter by Country"
        onChange={(e) => onFilterByCountry(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Foto</th>
            <th onClick={() => onSortDataByField("name.first")}>First Name</th>
            <th onClick={() => onSortDataByField("name.last")}>Last Name</th>
            <th onClick={() => onSortDataByField("location.country")}>
              Country
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <TableRow
              key={index}
              data={item}
              onDelete={() => onDeleteRow(index)}
              index={index}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
