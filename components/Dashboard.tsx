"use client";

import {
  Briefcase,
  Building,
  UsersRound,
  VerifiedIcon,
  File,
  Mail,
  Building2,
  IdCardLanyard,
  MapPin,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

import React, { useState, useMemo } from "react";

const summaryData = [
  {
    title: "Employers Pending",
    count: 14,
    icon: <UsersRound size={24}></UsersRound>,
    bgColor: "bg-blue-500",
  },
  {
    title: "Total Job Seekers",
    count: 143,
    icon: <Briefcase size={24}></Briefcase>,
    bgColor: "bg-purple-600",
  },
  {
    title: "Verified This Week",
    count: 21,
    icon: <VerifiedIcon size={24}></VerifiedIcon>,
    bgColor: "bg-indigo-600",
  },
  {
    title: "Total Employers",
    count: 34,
    icon: <Building size={24}></Building>,
    bgColor: "bg-purple-600",
  },
];

const initialTableData = [
  {
    id: 1,
    email: "jollibee@gmail.com",
    companyName: "Jollibee",
    idUploaded: "Recruiter_ID.png",
    companyAddress: "Ateneo Ave, Naga City, 4400 Camarines Sur",
    verificationStatus: "Pending",
  },
  {
    id: 2,
    email: "jollibee.branch1@gmail.com",
    companyName: "Jollibee Branch 1",
    idUploaded: "Recruiter_ID_1.png",
    companyAddress: "SM City Naga, Naga City, 4400 Camarines Sur",
    verificationStatus: "Pending",
  },
  {
    id: 3,
    email: "jollibee.branch2@gmail.com",
    companyName: "Jollibee Branch 2",
    idUploaded: "Recruiter_ID_2.png",
    companyAddress: "Robinsons Place Naga, Naga City, 4400 Camarines Sur",
    verificationStatus: "Verified",
  },
  {
    id: 4,
    email: "jollibee.branch3@gmail.com",
    companyName: "Jollibee Branch 3",
    idUploaded: "Recruiter_ID_3.png",
    companyAddress: "Pili, Camarines Sur",
    verificationStatus: "Not Verified",
  },
  {
    id: 5,
    email: "jollibee.branch4@gmail.com",
    companyName: "Jollibee Branch 4",
    idUploaded: "Recruiter_ID_4.png",
    companyAddress: "Iriga City, Camarines Sur",
    verificationStatus: "Verified",
  },
  {
    id: 6,
    email: "jollibee.branch5@gmail.com",
    companyName: "Jollibee Branch 5",
    idUploaded: "Recruiter_ID_5.png",
    companyAddress: "Libmanan, Camarines Sur",
    verificationStatus: "Pending",
  },
  {
    id: 7,
    email: "jollibee.branch6@gmail.com",
    companyName: "Jollibee Branch 6",
    idUploaded: "Recruiter_ID_6.png",
    companyAddress: "Nabua, Camarines Sur",
    verificationStatus: "Not Verified",
  },
];

const statusColors: Record<string, string> = {
  Pending: "bg-yellow-200 text-yellow-800",
  Verified: "bg-green-200 text-green-800",
  "Not Verified": "bg-red-200 text-red-800",
};

export default function Dashboard() {
  const [tableData, setTableData] = useState(initialTableData);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = useMemo(() => {
    return tableData.filter(item =>
      item.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [tableData, searchQuery]);

  const handleStatusChange = (id: number, newStatus: string) => {
    setTableData(prev => prev.map(item => item.id === id ? {...item, verificationStatus: newStatus} : item));
  };

  return (
    <div className="flex-1 p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-1">Dashboard</h1>
      <p className="text-gray-600 mb-6">
        A quick overview of what you need to know.
      </p>

      {/* Summary Cards */}
      <div className="flex space-x-4 mb-6">
        {summaryData.map(({ title, count, icon, bgColor }) => (
          <div
            key={title}
            className={`flex-1 rounded-md p-4 text-white ${bgColor} flex items-center justify-between`}
          >
            <div>
              <p className="text-sm">{title}</p>
              <p className="text-xl font-bold">{count}</p>
            </div>
            <div className="w-10 h-10 rounded-md flex items-center justify-center bg-white/20 backdrop-blur-sm">
              {icon}
            </div>
          </div>
        ))}
      </div>

      {/* Search Bar */}
      <div className="mb-4 relative">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {/* Search Icon SVG */}
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
            />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-md bg-white shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                <Mail size={18} className="inline mr-1"></Mail>
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                <Building2 size={18} className="inline mr-1"></Building2>
                Company Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                <IdCardLanyard
                  size={18}
                  className="inline mr-1"
                ></IdCardLanyard>
                ID Uploaded
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                <MapPin size={18} className="inline mr-1"></MapPin>
                Company Address
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                <ShieldCheck size={18} className="inline mr-1"></ShieldCheck>
                Verification Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredData.map(
              (
                {
                  id,
                  email,
                  companyName,
                  idUploaded,
                  companyAddress,
                  verificationStatus,
                }
              ) => (
                <tr key={id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {companyName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm flex items-center space-x-2">
                    <File size={18}></File>
                    <span>{idUploaded}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {companyAddress}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select
                      value={verificationStatus}
                      onChange={(e) =>
                        handleStatusChange(id, e.target.value)
                      }
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        verificationStatus === "Pending"
                          ? "bg-yellow-200 text-yellow-800"
                          : verificationStatus === "Verified"
                          ? "bg-green-200 text-green-800"
                          : "bg-red-200 text-red-800"
                      }`}
                    >
                      <option>Pending</option>
                      <option>Verified</option>
                      <option>Not Verified</option>
                    </select>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <span>
                      <a href={`/company/${companyName.toLowerCase()}`} aria-label={`View details for ${companyName}`}>
                        <ChevronRight size={16}></ChevronRight>
                      </a>
                    </span>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
