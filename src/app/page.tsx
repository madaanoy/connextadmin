import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      {/* Left side */}
      <section className="flex flex-col justify-center items-center bg-gray-100 w-1/2 p-16">
        <Image
          src="/assets/images/app_logo.png"
          alt="App Logo"
          width={180}
          height={48}
          className="mb-6"
        />
        <h1 className="text-2xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-gray-500 mb-8 text-center max-w-xs">
          Manage your platform with tools and insights.
        </p>
        <div className="flex space-x-6">
          <button className="bg-white shadow-md rounded-md p-4 w-40 text-left">
            <p className="text-blue-600 font-semibold mb-1">Company Verification</p>
            <p className="text-sm">Review and approve applications</p>
          </button>
          <button className="bg-white shadow-md rounded-md p-4 w-40 text-left">
            <p className="text-purple-600 font-semibold mb-1">Analytics and Reports</p>
            <p className="text-sm">Track platform performance</p>
          </button>
        </div>
      </section>

      {/* Right side */}
      <section className="flex flex-col justify-center items-center w-1/2 bg-gradient-to-b from-indigo-600 to-purple-600 text-white p-16">
        <div className="max-w-sm w-full">
          <h2 className="text-3xl font-bold mb-2">Welcome back,</h2>
          <p className="mb-8">Admin</p>

          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block font-semibold mb-1">
                Login
              </label>
              <input
                id="email"
                type="email"
                placeholder="johndoe@gmail.com"
                className="w-full rounded-md p-2 text-black"
              />
            </div>
            <div>
              <label htmlFor="password" className="block font-semibold mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter admin password"
                className="w-full rounded-md p-2 text-black"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 rounded-md py-2 font-semibold"
            >
              Login
            </button>
          </form>

          <p className="mt-12 text-center text-sm">© 2025 Copyright</p>
        </div>
      </section>
    </main>
  );
}
