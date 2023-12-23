"use client";
import React, { useState } from "react";
import { ContactTypes, OnChangeHandlerTypes } from "@/Types/commonTypes";
import TableData from "../tableData/tableData";
import * as yup from "yup";
import InputFields from "../inputFields/inputFields";

export default function ContactForm() {
  const currentDate = new Date();
  const [contactData, setContactData] = useState<ContactTypes>({
    firstname: "",
    lastName: "",
    email: "",
    phoneNumber: 0,
    dob: "",
    age: 1,
    password: "",
    confirmPassword: "",
    country: "",
    textarea: "",
  });

  const [ContactList, setContactList] = useState<ContactTypes[]>([]);
  const [errors, setError] = useState<string[]>([]);

  const contactInfoSchema = yup.object().shape({
    firstname: yup.string().required().min(3).max(10),
    lastName: yup.string().required().min(3).max(8),
    email: yup.string().email().required(),
    phoneNumber: yup.number().required().min(11),
    dob: yup.date().required('Date of Birth is required').nullable()
    .min(new Date(1970, 0, 1), 'Date of Birth cannot be earlier than 1970-01-01')
    .max(new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 1),
    'Date of Birth cannot be in the future'),
    age: yup.number().required().min(1).max(100),
    password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters').matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character'),
      confirmPassword: yup
    .string()
    .required('Confirm Password is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
    country: yup.string().required().min(3),
    textarea: yup.string().min(5).required(),
  });

  const onChangeHandler = (e: OnChangeHandlerTypes) => {
    let formData: ContactTypes = {
      ...contactData,
      [e.target.name]: e.target.value,
    };
    setContactData(formData);
  };

  const onClickHandler = async () => {
    try {
      const result = await contactInfoSchema.validate(contactData);
      if (!result) {
        return;
      }
      let ListContact: ContactTypes[] = [...ContactList, contactData];
      setContactList(ListContact);
      setError([]);
      setContactData({
        firstname: "",
        lastName: "",
        email: "",
        phoneNumber: 0,
        dob: "",
        age: 1,
        password: "",
        confirmPassword: "",
        country: "",
        textarea: "",
      });
    } catch (error: any) {
      setError(error.errors);
    }
  };

  return (
    <>
      <div className="max-w-xl mx-auto">
        <form>
          <InputFields label="First Name" name="firstname" type="text" valueObj={contactData.firstname} onChangeFn={onChangeHandler} />
          <InputFields label="Last Name" name="lastName" type="text" valueObj={contactData.lastName} onChangeFn={onChangeHandler} />
          <InputFields label="Email" name="email" type="email" valueObj={contactData.email} onChangeFn={onChangeHandler} />
          <InputFields label="Phone Number" name="phoneNumber" type="tel" valueObj={contactData.phoneNumber} onChangeFn={onChangeHandler} />
          <InputFields label="Date of Birth" name="dob" type="date" valueObj={contactData.dob} onChangeFn={onChangeHandler} />
          <InputFields label="Age" name="age" type="age" valueObj={contactData.age} onChangeFn={onChangeHandler} />
          <InputFields label="Password" name="password" type="password" valueObj={contactData.password} onChangeFn={onChangeHandler} />
          <InputFields label="Confirm Password" name="confirmPassword" type="password" valueObj={contactData.confirmPassword} onChangeFn={onChangeHandler} />
          <InputFields label="Country" name="country" type="text" valueObj={contactData.country} onChangeFn={onChangeHandler} />

          <label className="block mt-4 mb-2" htmlFor="textarea">Message:</label>
          <textarea
            className="w-full p-2 border rounded"
            id="textarea"
            name="textarea"
            rows={4}
            value={contactData.textarea}
            onChange={onChangeHandler}
            required
          ></textarea>
          {errors.map((item,index) => {
            return (
              <div style={{ color: "red" }} key={index}>
                <h1>{item}</h1>
              </div>
            );
          })}
          <button className="mt-6 bg-blue-500 text-white p-2 rounded hover:bg-blue-700" type="button" onClick={onClickHandler}>
            Submit
          </button>
        </form>
      </div>

      <TableData SendData={ContactList} />
    </>
  );
}
