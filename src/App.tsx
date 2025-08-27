import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center text-center p-6">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold text-gray-900 drop-shadow-lg"
      >
        🚀 EmlakMoto'ya Hoş Geldiniz!
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-6 text-lg text-gray-700 max-w-xl"
      >
        Gayrimenkul & Otomotiv Dünyasında Yeni Dönem. İlan ver, keşfet, hızla al-sat!
      </motion.p>

      <motion.button 
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.95 }}
        className="mt-10 px-8 py-4 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition"
      >
        Hemen Başla
      </motion.button>

      <footer className="mt-20 text-gray-500 text-sm">
        © 2025 EmlakMoto - Tüm Hakları Saklıdır
      </footer>
    </div>
  )
}
