import SkillForm from "@/components/SkillForm";

export default function AddSkill() {
  return (
    <div className="min-h-screen bg-[#0a0a1f] text-white">
      {/* Navbar */}
      <nav className="w-full bg-[#12122a] py-4 px-6 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold text-cyan-300">SkillTracker</h1>
        <a 
          href="/dashboard"
          className="text-white bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-600 transition"
        >
          Dashboard
        </a>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-cyan-300">Update your Skill status</h1>
          <p className="text-gray-400 mt-2">
            Enhance your skillset by tracking and improving your progress.
          </p>
        </div>

        {/* Skill Form */}
        <SkillForm isEdit={true} />
      </div>
    </div>
  );
}
