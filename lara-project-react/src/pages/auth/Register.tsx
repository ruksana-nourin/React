import { Link } from "react-router";

function Register() {


    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-[#F8F9D7] px-4">
                <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-800">
                            Create Account
                        </h1>
                        <p className="text-gray-500 mt-2">
                            Register to get started
                        </p>
                    </div>

                    {/* Registration Form */}
                    <form>

                        {/* Name */}
                        <div className="mb-5">
                            <label
                                htmlFor="name"
                                className="block text-sm font-semibold text-gray-700 mb-2"
                            >
                                Name
                            </label>

                            <input
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg
              focus:border-[#F15412] focus:ring-2 focus:ring-[#F15412]/20
              focus:outline-none transition duration-300"
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-5">
                            <label
                                htmlFor="email"
                                className="block text-sm font-semibold text-gray-700 mb-2"
                            >
                                Email
                            </label>

                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg
              focus:border-[#F15412] focus:ring-2 focus:ring-[#F15412]/20
              focus:outline-none transition duration-300"
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-5">
                            <label
                                htmlFor="password"
                                className="block text-sm font-semibold text-gray-700 mb-2"
                            >
                                Password
                            </label>

                            <input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg
              focus:border-[#F15412] focus:ring-2 focus:ring-[#F15412]/20
              focus:outline-none transition duration-300"
                            />
                        </div>

                        {/* Confirm Password */}
                        <div className="mb-6">
                            <label
                                htmlFor="confirmPassword"
                                className="block text-sm font-semibold text-gray-700 mb-2"
                            >
                                Confirm Password
                            </label>

                            <input
                                id="confirmPassword"
                                type="password"
                                placeholder="Confirm your password"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg
              focus:border-[#F15412] focus:ring-2 focus:ring-[#F15412]/20
              focus:outline-none transition duration-300"
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full bg-[#F15412] border-2 border-[#F15412]
            hover:bg-[#F8F9D7] hover:text-[#F15412]
            text-[#F8F9D7] font-bold py-3 px-4 rounded-lg
            transition duration-300"
                        >
                            Create Account
                        </button>

                    </form>

                    {/* Login Link */}
                    <p className="text-center text-sm text-gray-600 mt-6">
                        Already have an account?{" "}
                        <Link
                        to="/login"
                            type="button"
                            className="font-semibold text-[#F15412] hover:underline"
                        >
                            Login
                        </Link>
                    </p>

                </div>
            </div>

        </>
    );
}

export default Register;