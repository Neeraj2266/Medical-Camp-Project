import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ExistingUser() {
    const navigate = useNavigate();
    const [search, setSearch] = useState({
        pid: "",
        name: "",
    });

    const handleChange = (field, value) => {
        setSearch({ ...search, [field]: value });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Searching for:", search);
        // To be implemented: backend search logic
    };

    const handleClear = () => {
        setSearch({ pid: "", name: "" });
    };

    return (
        <div className="min-h-screen bg-[#f8fafc] p-8 font-sans">
            <div className="max-w-6xl mx-auto mt-4">
                {/* Header Section */}
                <button
                    type="button"
                    onClick={() => navigate('/Dashboard')}
                    className="mb-4 flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors text-[14px] font-medium"
                >
                    ← Back to Dashboard
                </button>
                <h1 className="text-[1.75rem] font-serif text-slate-800 mb-2 flex items-center gap-2">
                    🔍 Patient Lookup
                </h1>
                <p className="text-slate-500 mb-8 text-[15px]">
                    Search for an existing patient by their Patient ID or Name to view their history.
                </p>

                {/* Main Form Card */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                    <h2 className="text-[1.05rem] font-bold text-slate-800 mb-8">
                        Find Patient
                    </h2>

                    <form onSubmit={handleSearch} className="space-y-6">
                        {/* Search Inputs Row */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <label className="block text-[13px] font-bold text-slate-800 mb-2">
                                    Patient ID
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g. PID-001"
                                    value={search.pid}
                                    onChange={(e) => handleChange("pid", e.target.value)}
                                    className="w-full border border-slate-200 p-3 rounded-lg bg-slate-50/30 text-[14px] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-[13px] font-bold text-slate-800 mb-2">
                                    Patient Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Patient's full name"
                                    value={search.name}
                                    onChange={(e) => handleChange("name", e.target.value)}
                                    className="w-full border border-slate-200 p-3 rounded-lg bg-slate-50/30 text-[14px] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors"
                                />
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex items-center gap-4 mt-8 pt-4">
                            <button
                                type="submit"
                                className="bg-[#10a393] hover:bg-[#0d8f81] text-white font-medium text-[14px] px-6 py-2.5 rounded-lg transition-colors shadow-sm flex items-center gap-2"
                            >
                                🔍 Search Patient
                            </button>

                            <button
                                type="button"
                                onClick={handleClear}
                                className="bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium text-[14px] px-6 py-2.5 rounded-lg transition-colors"
                            >
                                Clear
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ExistingUser;
