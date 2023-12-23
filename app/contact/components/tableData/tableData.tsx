import React from "react";
import { TableData as TableDataProp } from "@/Types/commonTypes";

export default function TableData(props: TableDataProp) {
  if (!props.SendData || props.SendData.length === 0) {
    return null;
  }

  return (
    <table className="w-full mt-8">
      <thead>
        <tr>
          <th className="border p-2">Sr</th>
          <th className="border p-2">First Name</th>
          <th className="border p-2">Last Name</th>
          <th className="border p-2">Email</th>
          <th className="border p-2">Phone Number</th>
          <th className="border p-2">Date of Birth</th>
          <th className="border p-2">Age</th>
          <th className="border p-2">Password</th>
          <th className="border p-2">Confirm Password</th>
          <th className="border p-2">Country</th>
          <th className="border p-2">Message</th>
        </tr>
      </thead>
      <tbody>
        {props.SendData.map((item, index) => (
          <tr key={index}>
            <td className="border p-2">{index + 1}</td>
            <td className="border p-2">{item.firstname}</td>
            <td className="border p-2">{item.lastName}</td>
            <td className="border p-2">{item.email}</td>
            <td className="border p-2">{item.phoneNumber}</td>
            <td className="border p-2">{item.dob}</td>
            <td className="border p-2">{item.age}</td>
            <td className="border p-2">{item.password}</td>
            <td className="border p-2">{item.confirmPassword}</td>
            <td className="border p-2">{item.country}</td>
            <td className="border p-2">{item.textarea}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
