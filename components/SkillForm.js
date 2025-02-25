"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { database } from "@/firebase";
import { ref, get, update, push, set } from "firebase/database";
import { motion } from "framer-motion";

export default function SkillForm({ isEdit }) {
  const router = useRouter();
  const { id } = useParams();

  const [skill, setSkill] = useState({
    name: "",
    description: "",
    status: "Learning",
    difficulty: "Beginner",
    category: "Programming",
    timeSpent: "",
  });

  useEffect(() => {
    if (isEdit && id) {
      const skillRef = ref(database, `skills/${id}`);
      get(skillRef).then((snapshot) => {
        if (snapshot.exists()) {
          setSkill(snapshot.val());
        }
      });
    }
  }, [id, isEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEdit) {
      const skillRef = ref(database, `skills/${id}`);
      await update(skillRef, skill);
    } else {
      const newSkillRef = push(ref(database, "skills"));
      await set(newSkillRef, skill);
    }
    router.push("/dashboard");
  };

  return (
    <motion.div
      className="bg-[#12122a] p-8 rounded-2xl shadow-xl border border-cyan-400 w-full max-w-lg"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-cyan-300 text-center mb-6"
      >
        {isEdit ? "✏️ Edit Skill" : "➕ Add Skill"}
      </motion.h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-cyan-300 font-medium">Skill Name:</label>
          <input
            type="text"
            value={skill.name}
            onChange={(e) => setSkill({ ...skill, name: e.target.value })}
            className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-cyan-300 font-medium">Description:</label>
          <textarea
            value={skill.description}
            onChange={(e) => setSkill({ ...skill, description: e.target.value })}
            className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-cyan-300 font-medium">Status:</label>
          <select
            value={skill.status}
            onChange={(e) => setSkill({ ...skill, status: e.target.value })}
            className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all"
          >
            <option value="Learning">Learning</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
          </select>
        </div>


        <div className="mb-4">
          <label className="block text-cyan-300 font-medium">Difficulty Level:</label>
          <select
            value={skill.difficulty}
            onChange={(e) => setSkill({ ...skill, difficulty: e.target.value })}
            className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all"
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>


        <div className="mb-4">
          <label className="block text-cyan-300 font-medium">Category:</label>
          <select
            value={skill.category}
            onChange={(e) => setSkill({ ...skill, category: e.target.value })}
            className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all"
          >
            <option value="Programming">Programming</option>
            <option value="Design">Design</option>
            <option value="Marketing">Marketing</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-cyan-300 font-medium">Time Spent (in hours):</label>
          <input
            type="number"
            value={skill.timeSpent}
            onChange={(e) => setSkill({ ...skill, timeSpent: e.target.value })}
            className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all"
          />
        </div>


        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-cyan-500 py-3 rounded-lg text-white font-semibold shadow-lg hover:bg-cyan-600 transition-all"
        >
          {isEdit ? "Save Changes" : "Add Skill"}
        </motion.button>
      </form>
    </motion.div>
  );
}
