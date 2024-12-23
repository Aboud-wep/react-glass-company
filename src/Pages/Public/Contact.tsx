import React from "react";
import ContactImage from "../../assets/Images/Contact.png";

const Contact = () => {
  return (
    <div className="text-[#011C38] font-medium">
      {/* Header Section */}
      <div className="flex h-[110px] bg-[#011C38]">
        <h1 className="text-white text-[30px] lg:text-[50px] items-center flex ml-16">
          Contact us
        </h1>
      </div>

      {/* Content Section */}

      <div>
        <h1 className="text-[30px] lg:text-4xl mx-2 font-bold h-[124px] justify-center items-center flex">
          FB Project Sp z o o . Ltd
        </h1>
      </div>
      <div className="relative">
      <div className="py-10 xl:py-0 xl:pt-32 mx-6 xl:mx-0 xl:ml-[115px] h-auto xl:h-[3110px]">
        <div className=" ">
          <table className="text-left text-[20px] lg:text-[30px]">
            <thead>
              <th className="font-bold text-2xl lg:text-[50px] pb-[30px]">Address</th>
            </thead>
            <tbody>
              <td colSpan={2} className="space-y-[20px] ">
                <p>ul. Piaski 5</p>
                <p>62-600 Koło, Poland</p>
              </td>
            </tbody>
            <thead>
              <th colSpan={2} className="font-bold text-[30px] lg:text-[50px] py-5">
                Data
              </th>
            </thead>
            <tbody>
              <td className="space-y-6 ">
                <p>KRS</p>
                <p>REGON</p>
                <p>VAT</p>
              </td>
              <td className="space-y-6 ">
                <p>0000799305</p>
                <p>384112135</p>
                <p>PL6653025468</p>
              </td>
            </tbody>
            <thead>
              <th colSpan={2} className="font-bold text-[30px] lg:text-[50px] py-5">
                Bank Data
              </th>
            </thead>
            <p className="pb-[30px]">Nest Bank</p>
            <tbody>
              <td className="space-y-6 align-">
                <p className=" ">PLN</p>
                <p>EUR</p>
                <p>SWIFT</p>
              </td>
              <td className="space-y-6 ">
                <p>PL87 1870 1045 2078 1064 4933 0001</p>
                <p>PL60 1870 1045 2078 1064 4933 0002</p>
                <p>NESBPLPW</p>
              </td>
            </tbody>
            <thead>
              <th colSpan={2} className="font-bold text-[30px] lg:text-[50px] pb-5 pt-7">
                Office E-mail
              </th>
            </thead>
            <tbody>
              <td colSpan={2} className="">
                <p>office@fb-project.com</p>
              </td>
            </tbody>
            <thead>
              <th colSpan={2} className="font-bold text-[30px] lg:text-[50px] py-5">
                Phone
              </th>
            </thead>
            <tbody>
              <tr className="mb-10">
                <td className=" ">
                  <p>Phone</p>
                </td>
                <td className=" ">
                  <p>+48 63 240 05 17</p>
                </td>
              </tr>
              <tr>
                <td className=" ">
                  <p>Fax</p>
                </td>
              </tr>
            </tbody>
            <thead>
              <th colSpan={2} className="font-bold text-[30px] lg:text-[50px] py-5">
                Hours
              </th>
            </thead>
            <tbody>
              <td className="space-y-6 ">
                <p>Monday</p>
                <p>Tuesday</p>
                <p>Wednesday</p>
                <p>Thursday</p>
                <p>Friday</p>
                <p>Saturday</p>
                <p>Sunday</p>
              </td>
              <td className="space-y-6 ">
                <p>8:00 - 16:00</p>
                <p>8:00 - 16:00</p>
                <p>8:00 - 16:00</p>
                <p>8:00 - 16:00</p>
                <p>8:00 - 16:00</p>
                <p>closed</p>
                <p>closed</p>
              </td>
            </tbody>
            <thead>
              <th colSpan={2} className="font-bold text-[30px] lg:text-[50px] pt-20">
                Natalia Liczbińska
              </th>
            </thead>
            <tbody>
              <td className="">
                <p className="my-5">CEO</p>
              </td>
              <td className="underline">
                <p>natalia@fb-project.com</p>
              </td>
            </tbody>
            <thead>
              <tr>
                <th colSpan={2} className="font-bold text-[30px] lg:text-[50px] py-4">
                  Fadi Bdewy
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pr-10 pb-4">
                  <p>
                    Member of the <br />
                    Management
                    <br />
                    Board
                  </p>
                </td>
                <td className="align-top underline">
                  <p className="">fadi@fb-project.com</p>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                <p>
                  Personal
                  <br />
                  Manager in UE
                </p>
                </td>
              </tr>
            </tbody>
            <thead>
              <th colSpan={2} className="font-bold text-[30px] lg:text-[50px] py-6">
                Agnieszka Rytter
              </th>
            </thead>
            <tbody>
              <tr >
                <td className=" pb-4">
                  <p>Office Manager</p>
                </td>
                <td className="align-top underline">
                  <p>agnieszka@fb-project.com</p>
                </td>
              </tr>
              <tr>
                <td className="">
                  <p>HR specialist</p>
                </td>
              </tr>
            </tbody>
            <thead>
              <th colSpan={2} className="font-bold text-[30px] lg:text-[50px] py-6">
                Ewelina Starosta
              </th>
            </thead>
            <tbody>
              <td className="">
                <p>
                  Recruitment
                  <br />
                  Specialist
                </p>
              </td>
              <td className="align-top underline">
                <p>ewelina@fb-project.com</p>
              </td>
            </tbody>
          </table>
        </div>

        
      </div>
      <img
          src={ContactImage}
          alt="Overlay"
          className="absolute  hidden xl:block top-0 right-0"
        />
    </div>
    </div>
  );
};

export default Contact;
