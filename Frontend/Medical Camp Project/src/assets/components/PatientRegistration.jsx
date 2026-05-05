
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PatientRegistration() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        pid: "",
        name: "",
        age: "",
        gender: "",
        regdate: "",
        campdate: "",
        contact: "",
        address: "",
    });

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const handleChange = (field, value) => {
        setForm({ ...form, [field]: value });
        setErrors({ ...errors, [field]: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let newErrors = {};
        let valid = true;

        if (!form.pid) {
            newErrors.pid = "Patient ID required";
            valid = false;
        }
        if (!form.name) {
            newErrors.name = "Name required";
            valid = false;
        }
        if (!form.age || form.age < 0 || form.age > 130) {
            newErrors.age = "Valid age required";
            valid = false;
        }
        if (!form.regdate) {
            newErrors.regdate = "Required";
            valid = false;
        }
        if (!form.campdate) {
            newErrors.campdate = "Required";
            valid = false;
        }
        if (!form.contact) {
            newErrors.contact = "Required";
            valid = false;
        }
        if (!form.address) {
            newErrors.address = "Required";
            valid = false;
        }

        setErrors(newErrors);

        if (!valid) return;

        console.log("Patient Data:", form);

        setSuccess(true);

        setForm({
            pid: "",
            name: "",
            age: "",
            gender: "",
            regdate: "",
            campdate: "",
            contact: "",
            address: "",
        });

        setTimeout(() => setSuccess(false), 3000);
    };

    const handleClear = () => {
        setForm({
            pid: "",
            name: "",
            age: "",
            gender: "",
            regdate: "",
            campdate: "",
            contact: "",
            address: "",
        });
        setErrors({});
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
                    🏥 Patient Registration
                </h1>
                <p className="text-slate-500 mb-8 text-[15px]">
                    Register new patients for medical camp services.
                </p>

                {/* Main Form Card */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                    <h2 className="text-[1.05rem] font-bold text-slate-800 mb-8">
                        New Patient Form
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Row 1 */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <label className="block text-[13px] font-bold text-slate-800 mb-2">
                                    Patient ID *
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g. PID-001"
                                    value={form.pid}
                                    onChange={(e) => handleChange("pid", e.target.value)}
                                    className="w-full border border-slate-200 p-3 rounded-lg bg-slate-50/30 text-[14px] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors"
                                />
                                {errors.pid && <p className="text-red-500 text-xs mt-1 font-medium">{errors.pid}</p>}
                            </div>

                            <div>
                                <label className="block text-[13px] font-bold text-slate-800 mb-2">
                                    Patient Name *
                                </label>
                                <input
                                    type="text"
                                    placeholder="Patient's full name"
                                    value={form.name}
                                    onChange={(e) => handleChange("name", e.target.value)}
                                    className="w-full border border-slate-200 p-3 rounded-lg bg-slate-50/30 text-[14px] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors"
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p>}
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <label className="block text-[13px] font-bold text-slate-800 mb-2">
                                    Age *
                                </label>
                                <input
                                    type="number"
                                    placeholder="Age"
                                    value={form.age}
                                    onChange={(e) => handleChange("age", e.target.value)}
                                    className="w-full border border-slate-200 p-3 rounded-lg bg-slate-50/30 text-[14px] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors"
                                />
                                {errors.age && <p className="text-red-500 text-xs mt-1 font-medium">{errors.age}</p>}
                            </div>

                            <div>
                                <label className="block text-[13px] font-bold text-slate-800 mb-2">
                                    Gender
                                </label>
                                <select
                                    value={form.gender}
                                    onChange={(e) => handleChange("gender", e.target.value)}
                                    className="w-full border border-slate-200 p-3 rounded-lg bg-slate-50/30 text-[14px] text-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors appearance-none"
                                >
                                    <option value="" className="text-slate-400">Select gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>

                        {/* Row 3 */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <label className="block text-[13px] font-bold text-slate-800 mb-2">
                                    Date of Registration *
                                </label>
                                <div className="relative">
                                    <input
                                        type="date"
                                        value={form.regdate}
                                        onChange={(e) => handleChange("regdate", e.target.value)}
                                        className="w-full border border-slate-200 p-3 rounded-lg bg-slate-50/30 text-[14px] text-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors [color-scheme:light]"
                                    />
                                    {errors.regdate && <p className="text-red-500 text-xs mt-1 font-medium">{errors.regdate}</p>}
                                </div>
                            </div>

                            <div>
                                <label className="block text-[13px] font-bold text-slate-800 mb-2">
                                    Camp Date *
                                </label>
                                <div className="relative">
                                    <input
                                        type="date"
                                        value={form.campdate}
                                        onChange={(e) => handleChange("campdate", e.target.value)}
                                        className="w-full border border-slate-200 p-3 rounded-lg bg-slate-50/30 text-[14px] text-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors [color-scheme:light]"
                                    />
                                    {errors.campdate && <p className="text-red-500 text-xs mt-1 font-medium">{errors.campdate}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Row 4 */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <label className="block text-[13px] font-bold text-slate-800 mb-2">
                                    Contact No *
                                </label>
                                <input
                                    type="text"
                                    placeholder="+91 XXXXXXXXXX"
                                    value={form.contact}
                                    onChange={(e) => handleChange("contact", e.target.value)}
                                    className="w-full border border-slate-200 p-3 rounded-lg bg-slate-50/30 text-[14px] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors"
                                />
                                {errors.contact && <p className="text-red-500 text-xs mt-1 font-medium">{errors.contact}</p>}
                            </div>

                            <div>
                                <label className="block text-[13px] font-bold text-slate-800 mb-2">
                                    Address *
                                </label>
                                <input
                                    type="text"
                                    placeholder="Full address"
                                    value={form.address}
                                    onChange={(e) => handleChange("address", e.target.value)}
                                    className="w-full border border-slate-200 p-3 rounded-lg bg-slate-50/30 text-[14px] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors"
                                />
                                {errors.address && <p className="text-red-500 text-xs mt-1 font-medium">{errors.address}</p>}
                            </div>
                        </div>

                        {/* Buttons & Success Message */}
                        <div className="flex items-center gap-4 mt-10 pt-4">
                            <button
                                type="submit"
                                className="bg-[#10a393] hover:bg-[#0d8f81] text-white font-medium text-[14px] px-6 py-2.5 rounded-lg transition-colors shadow-sm"
                            >
                                Register Patient
                            </button>

                            <button
                                type="button"
                                onClick={handleClear}
                                className="bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium text-[14px] px-6 py-2.5 rounded-lg transition-colors"
                            >
                                Clear
                            </button>

                            {success && (
                                <p className="text-teal-600 text-sm font-medium ml-4 animate-fade-in">
                                    ✅ Patient registered successfully!
                                </p>
                            )}
                        </div>
                    </form>
                </div>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(5px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fadeIn 0.3s ease-out forwards;
                }
            `}</style>
        </div>
    );
}

export default PatientRegistration;

