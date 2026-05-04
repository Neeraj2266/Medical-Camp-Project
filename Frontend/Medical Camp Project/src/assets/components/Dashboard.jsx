import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#f8fafc] font-sans">
            {/* Top Navigation Bar */}
            <div className="bg-white border-b border-gray-100 px-8 py-4 flex items-center">
                <div className="flex items-center gap-2 text-slate-800 font-semibold text-lg">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Dashboard
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-8 py-12">
                {/* Welcome Section */}
                <div className="mb-12 animate-fade-in-down">
                    <h1 className="text-4xl font-serif text-slate-800 mb-3 flex items-center gap-3">
                        Welcome back, Admin <span className="animate-wave inline-block origin-bottom-right">👋</span>
                    </h1>
                    <p className="text-slate-500 text-lg">
                        Here's what's happening at MediCare Camp today.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
                    
                    {/* Existing User Card */}
                    <div
                        onClick={() => navigate("/existing")}
                        className="group flex items-center justify-between bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 cursor-pointer transition-all duration-300"
                    >
                        <div className="flex items-center gap-6">
                            {/* Gradient Icon Box */}
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300 ease-out">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>

                            {/* Text Content */}
                            <div>
                                <h2 className="text-xl font-semibold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">
                                    Existing User
                                </h2>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Look up patient history by ID or<br />name
                                </p>
                            </div>
                        </div>

                        {/* Arrow */}
                        <div className="text-slate-300 group-hover:text-blue-500 group-hover:translate-x-2 transition-all duration-300">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </div>

                    {/* Register User Card */}
                    <div
                        onClick={() => navigate("/register")}
                        className="group flex items-center justify-between bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-teal-500/10 hover:-translate-y-1 cursor-pointer transition-all duration-300"
                    >
                        <div className="flex items-center gap-6">
                            {/* Gradient Icon Box */}
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white shadow-lg shadow-teal-500/30 group-hover:scale-110 transition-transform duration-300 ease-out">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM14 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>

                            {/* Text Content */}
                            <div>
                                <h2 className="text-xl font-semibold text-slate-800 mb-1 group-hover:text-teal-600 transition-colors">
                                    Register New User
                                </h2>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Register a new patient for camp<br />services
                                </p>
                            </div>
                        </div>

                        {/* Arrow */}
                        <div className="text-slate-300 group-hover:text-teal-500 group-hover:translate-x-2 transition-all duration-300">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </div>

                </div>
            </div>
            
            <style>{`
                @keyframes wave {
                    0% { transform: rotate(0deg); }
                    10% { transform: rotate(14deg); }
                    20% { transform: rotate(-8deg); }
                    30% { transform: rotate(14deg); }
                    40% { transform: rotate(-4deg); }
                    50% { transform: rotate(10deg); }
                    60% { transform: rotate(0deg); }
                    100% { transform: rotate(0deg); }
                }
                .animate-wave {
                    animation: wave 2.5s infinite;
                    transform-origin: 70% 70%;
                }
                @keyframes fadeInDown {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in-down {
                    animation: fadeInDown 0.6s ease-out forwards;
                }
            `}</style>
        </div>
    );
}

export default Dashboard;