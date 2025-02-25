"use client";
import { useEffect, useState } from "react";
import { database } from "@/firebase";
import { ref, onValue, remove } from "firebase/database";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Dashboard() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const skillsRef = ref(database, "skills");
    onValue(skillsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const skillsArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setSkills(skillsArray);
      }
    });
  }, []);

  const handleDelete = async (id) => {
    const skillRef = ref(database, `skills/${id}`);
    await remove(skillRef);
  };

  return (
    <div className="min-h-screen bg-[#0a0a1f] text-white px-8 py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-cyan-400">📋 Skills Dashboard</h1>
        <Link href="/add-skill">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-green-500 px-6 py-2 rounded-lg text-white font-bold shadow-md hover:bg-green-600 transition-all duration-300"
          >
            ➕ Add Skill
          </motion.button>
        </Link>
      </div>

      {/* Skills Grid */}
      {skills.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              whileHover={{ scale: 1.05 }}
              className="bg-[#12122a] p-6 rounded-xl shadow-lg border border-cyan-400 transition-all duration-300 hover:shadow-cyan-500/50"
            >
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                {skill.name}
              </h3>
              <p className="text-gray-300 mb-4">
                {skill.description || "No description available"}
              </p>
              <div className="flex justify-between">
                <Link href={`/edit-skill/${skill.id}`}>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="bg-blue-500 px-4 py-2 rounded-md text-white hover:bg-blue-600 transition-all"
                  >
                    ✏️ Edit
                  </motion.button>
                </Link>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={() => handleDelete(skill.id)}
                  className="bg-red-500 px-4 py-2 rounded-md text-white hover:bg-red-600 transition-all"
                >
                  🗑️ Delete
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400 text-lg mt-10">
          No skills added yet. Start tracking your skills now! 🚀
        </p>
      )}
    </div>
  );
}
