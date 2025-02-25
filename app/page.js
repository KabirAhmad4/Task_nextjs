"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/DALL·E 2025-02-25 19.33.42 - A futuristic and sleek digital background with a smooth gradient blend of deep blue and purple, symbolizing innovation and growth. The scene is in lan.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for transparency effect */}
      <div className="absolute inset-0 bg-[#0a0a1f] bg-opacity-50 backdrop-blur-sm"></div>

      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-10 py-4 bg-[#12122a] bg-opacity-90 backdrop-blur-lg shadow-md fixed top-0 z-10">
        <h2 className="text-2xl font-bold tracking-wide text-cyan-400">
          🚀 Skill Tracker
        </h2>
        <div className="space-x-6">
          <Link href="/dashboard">
            <span className="cursor-pointer text-gray-300 hover:text-cyan-400 transition duration-300">
              Dashboard
            </span>
          </Link>
          <Link href="/add-skill">
            <span className="cursor-pointer text-gray-300 hover:text-cyan-400 transition duration-300">
              Add Skill
            </span>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#12122a] bg-opacity-80 p-10 rounded-2xl shadow-2xl backdrop-blur-md border border-cyan-400"
        >
          <h1 className="text-5xl font-extrabold mb-4 text-cyan-400">
            Skill Growth Tracker
          </h1>
          <p className="mb-6 text-lg text-gray-300">
            Track & improve your skills efficiently!
          </p>

          <div className="flex space-x-6">
            <Link href="/dashboard">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-blue-500 px-6 py-3 rounded-lg text-white font-bold hover:bg-purple-500 transition-all duration-300 shadow-lg"
              >
                Go to Dashboard
              </motion.button>
            </Link>

            <Link href="/add-skill">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-blue-500 px-6 py-3 rounded-lg text-white font-bold hover:bg-purple-500 transition-all duration-300 shadow-lg"
              >
                ➕ Add Skill
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
