import { useState } from "react";
import { useNavigate } from "react-router-dom";



function AdminLoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Demo credentials (replace with backend later)
        if (username === "admin" && password === "medcamp2024") {
            setMessage("success");

            setTimeout(() => {
                navigate("/Dashboard");
            }, 1500);
        } else {
            setMessage("error");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-teal-500">

            {/* Card */}
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">

                {/* Title */}
                <h1 className="text-2xl font-bold text-center mb-2">
                    Care & Career Charities
                </h1>

                <p className="text-center text-gray-500 mb-6">
                    Medical Camp Management System
                </p>

                <h2 className="text-lg font-semibold text-center mb-4">
                    Admin Login
                </h2>

                {/* Form */}
                <form onSubmit={handleLogin} className="space-y-4">

                    {/* Username */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Username
                        </label>
                        <input
                            type="text"
                            placeholder="Enter admin username"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Password
                        </label>

                        <div className="flex items-center border rounded-lg">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter password"
                                className="w-full p-3 focus:outline-none"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />

                            <button
                                type="button"
                                className="px-3 text-gray-500"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "🙈" : "👁"}
                            </button>
                        </div>
                    </div>

                    {/* Remember + Forgot */}
                    <div className="flex justify-between text-sm">
                        <label>
                            <input type="checkbox" className="mr-1" />
                            Remember me
                        </label>

                        <button
                            type="button"
                            className="text-blue-600 hover:underline"
                            onClick={() => setMessage("forgot")}
                        >
                            Forgot password?
                        </button>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        Sign In
                    </button>

                </form>

                {/* Alerts */}
                {message === "success" && (
                    <p className="text-green-600 text-center mt-4">
                        ✅ Login successful! Redirecting...
                    </p>
                )}

                {message === "error" && (
                    <p className="text-red-600 text-center mt-4">
                        ❌ Invalid username or password
                    </p>
                )}

                {message === "forgot" && (
                    <p className="text-blue-600 text-center mt-4">
                        📧 Reset link sent (demo)
                    </p>
                )}

                {/* Demo Credentials */}
                <p className="text-sm text-center mt-4 text-gray-400">
                    Demo: admin / medcamp2024
                </p>
            </div>
        </div>
    );
}

export default AdminLoginPage;