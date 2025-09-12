"use client";

import {
  Briefcase,
  Building,
  UsersRound,
  VerifiedIcon,
  File,
  ChevronDown,
  Mail,
  Building2,
  IdCardLanyard,
  MapPin,
  ShieldCheck,
  Pin,
} from "lucide-react";
import React from "react";

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

const tableData = [
  {
    email: "jollibee@gmail.com",
    companyName: "Jollibee",
    idUploaded: "Recruiter_ID.png",
    companyAddress: "Ateneo Ave, Naga City, 4400 Camarines Sur",
    verificationStatus: "Pending",
  },
  {
    email: "jollibee@gmail.com",
    companyName: "Jollibee",
    idUploaded: "Recruiter_ID.png",
    companyAddress: "Ateneo Ave, Naga City, 4400 Camarines Sur",
    verificationStatus: "Pending",
  },
  {
    email: "jollibee@gmail.com",
    companyName: "Jollibee",
    idUploaded: "Recruiter_ID.png",
    companyAddress: "Ateneo Ave, Naga City, 4400 Camarines Sur",
    verificationStatus: "Verified",
  },
  {
    email: "jollibee@gmail.com",
    companyName: "Jollibee",
    idUploaded: "Recruiter_ID.png",
    companyAddress: "Ateneo Ave, Naga City, 4400 Camarines Sur",
    verificationStatus: "Not Verified",
  },
  {
    email: "jollibee@gmail.com",
    companyName: "Jollibee",
    idUploaded: "Recruiter_ID.png",
    companyAddress: "Ateneo Ave, Naga City, 4400 Camarines Sur",
    verificationStatus: "Verified",
  },
  {
    email: "jollibee@gmail.com",
    companyName: "Jollibee",
    idUploaded: "Recruiter_ID.png",
    companyAddress: "Ateneo Ave, Naga City, 4400 Camarines Sur",
    verificationStatus: "Pending",
  },
  {
    email: "jollibee@gmail.com",
    companyName: "Jollibee",
    idUploaded: "Recruiter_ID.png",
    companyAddress: "Ateneo Ave, Naga City, 4400 Camarines Sur",
    verificationStatus: "Not Verified",
  },
];

const statusColors: Record<string, string> = {
  Pending: "bg-yellow-200 text-yellow-800",
  Verified: "bg-green-200 text-green-800",
  "Not Verified": "bg-red-200 text-red-800",
};

export default function Dashboard() {
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
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
                <IdCardLanyard size={18} className="inline mr-1"></IdCardLanyard>
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
            {tableData.map(
              (
                {
                  email,
                  companyName,
                  idUploaded,
                  companyAddress,
                  verificationStatus,
                },
                index
              ) => (
                <tr key={index}>
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
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded text-xs font-semibold ${statusColors[verificationStatus]}`}
                    >
                      {verificationStatus}
                      <ChevronDown size={14}></ChevronDown>
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
