"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Building,
  Mail,
  MapPin,
  File,
  Clock,
  ChevronDown,
} from "lucide-react";

const companyData = {
  jollibee: {
    companyName: "Jollibee",
    email: "jollibee@gmail.com",
    address: "Ateneo Ave, Naga City, 4400 Camarines Sur",
    registrationNumber: "RN000000001",
    industry: "Food and Beverage",
    verificationStatus: "Pending",
    document: {
      filename: "Recruiter_ID.png",
      fileSize: "2.4 MB",
      uploadDate: "January 21, 2025",
    },
  },
};

interface CompanyDetailProps {
  params: Promise<{
    companyName: string;
  }>;
}

export default function CompanyDetail({ params }: CompanyDetailProps) {
  const unwrappedParams = use(params);
  const companyKey = unwrappedParams.companyName.toLowerCase() as keyof typeof companyData;
  const company = companyData[companyKey];

  const [status, setStatus] = useState(company?.verificationStatus || "Pending");

  if (!company) {
    return (
      <div className="p-8">
        <p>Company not found.</p>
        <Link href="/home"><button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded">Back to Dashboard</button></Link>
      </div>
    );
  }

  return (
    <div className="flex-1 p-8 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-6">
        <Link href="/home">
          <button className="flex items-center space-x-2 bg-white px-4 py-2 rounded shadow hover:bg-gray-100">
            <ArrowLeft size={16} />
            <span>Back to Dashboard</span>
          </button>
        </Link>
        <div className="flex items-center space-x-2 bg-blue-100 px-3 py-2 rounded">
          <Building size={20} className="text-blue-600" />
        </div>
        <div>
          <h1 className="text-xl font-semibold">{company.companyName}</h1>
          <p className="text-gray-500 text-sm">Company Details and Information</p>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className={`px-3 py-1 rounded text-sm font-semibold ${
              status === "Pending"
                ? "bg-yellow-200 text-yellow-800"
                : status === "Verified"
                ? "bg-green-200 text-green-800"
                : "bg-red-200 text-red-800"
            }`}
          >
            <option>Pending</option>
            <option>Verified</option>
            <option>Not Verified</option>
          </select>
          <button className="bg-black text-white px-4 py-2 rounded flex items-center space-x-2 hover:bg-gray-900">
            <Mail size={16} />
            <span>Contact Company</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex space-x-6">
        {/* Left Column */}
        <div className="flex-1 space-y-6">
          {/* Company Information */}
          <div className="bg-white rounded-lg p-6 shadow">
            <h2 className="text-lg font-semibold mb-4 flex items-center space-x-2">
              <Building size={20} className="text-blue-600" />
              <span>Company Information</span>
            </h2>
            <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <Building size={16} className="text-gray-600" />
                <span className="font-semibold">Company Name</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold"># Registration Number</span>
              </div>

              <div>{company.companyName}</div>
              <div>{company.registrationNumber}</div>

              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-gray-600" />
                <span className="font-semibold">Email Adress</span>
              </div>
              <div className="flex items-center space-x-2">
                <File size={16} className="text-gray-600" />
                <span className="font-semibold">Industry</span>
              </div>

              <div>{company.email}</div>
              <div>Food and Beverage</div>

              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-gray-600" />
                <span className="font-semibold">Company Address</span>
              </div>
              <div></div>

              <div>{company.address}</div>
              <div></div>
            </div>
          </div>

          {/* Uploaded Documents */}
          <div className="bg-white rounded-lg p-6 shadow">
            <h2 className="text-lg font-semibold mb-4 flex items-center space-x-2">
              <File size={20} className="text-blue-600" />
              <span>Uploaded Documents</span>
            </h2>
            <div className="border border-gray-200 rounded p-4">
              <div className="mb-2">
                <p className="font-semibold">Company Registration ID</p>
                <p className="text-xs text-gray-500">
                  Primary Identification Document
                </p>
              </div>
              <div className="bg-gray-200 h-40 rounded flex items-center justify-center text-gray-400">
                <File size={48} />
              </div>
              <div className="grid grid-cols-3 text-xs text-gray-600 mt-4">
                <div>
                  <p className="font-semibold">Filename:</p>
                  <p>{company.document.filename}</p>
                </div>
                <div>
                  <p className="font-semibold">File Size:</p>
                  <p>{company.document.fileSize}</p>
                </div>
                <div>
                  <p className="font-semibold">Upload Date:</p>
                  <p>{company.document.uploadDate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-80 bg-white rounded-lg p-6 shadow">
          <h2 className="text-lg font-semibold mb-4 flex items-center space-x-2">
            <Clock size={20} className="text-yellow-600" />
            <span>Verification Status</span>
          </h2>
          {/* Empty content box */}
          <div className="h-48 border border-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}
