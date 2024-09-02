'use client';

import React from 'react'; // Ensure React is imported
import TodoList from "./components/todolist";
import AddButton from "./components/addbutton";
import { motion } from "framer-motion";

/**
 * Home page of the todo app.
 */
export default function Home() {

  return (
    <main className="mt-10"> {/* Move container higher with mt-10 */}
    
      <div className="w-full px-5 max-w-3xl mx-auto h-[80vh]"> {/* Adjust height with h-[80vh] */}

        <section className="flex flex-col sm:flex-row sm:gap-5 items-center mb-3">
          {/* Animated title */}
          <motion.h1
            className="text-6xl font-bold text-primary drop-shadow-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            TODO APP
          </motion.h1>
          <motion.h2 
          className="text-3xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          
          
          >Created by Xander</motion.h2>

          <AddButton />
        </section>

        <section className="bg-zinc-300 rounded-md p-5 h-full overflow-y-auto"> {/* Make the section fill the container height and scrollable */}
          <TodoList />
        </section>

      </div>

    </main>
  );
}