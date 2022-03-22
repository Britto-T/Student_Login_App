import React from "react";

const StudentsDetails = (StudentDetails: any) => {
  const studentData: any = [];
  StudentDetails.map((item: any) => {
    studentData.push({
      name: item?.name,
      phone: item?.phone,
      email: item?.email,
      zipcode: item?.address?.zipcode,
    });
  });
  return studentData;
};

export default StudentsDetails;
