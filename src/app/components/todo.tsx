'use client';

import { useState } from "react";
import { Task, editTask, removeTask } from "../_lib/todo";
import { FaCheck, FaXmark, FaPenToSquare, FaTrash } from "react-icons/fa6";
import { motion } from "framer-motion";

/**
 * Todo component representing a single task item.
 * 
 * @param task The task object containing task details.
 * @param onToggleTask Function to toggle the completion status of the task.
 */
export default function Todo({ task, onToggleTask }: { task: Task, onToggleTask: (task: Task) => void }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(task.title);

    const handleEditClick = () => {
        if (isEditing) {
            editTask(task, newTitle);
        }
        setIsEditing(!isEditing);
    };

    return (
        <motion.div
            className="flex bg-white rounded-md px-5 py-3 items-center justify-between mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
        >
            <motion.button
                onClick={() => onToggleTask(task)}
                className={`w-10 h-10 rounded-md me-5 ${task.completed ? 'bg-accept' : 'bg-decline'}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                {task.completed ? (
                    <FaCheck className="mx-auto text-white text-2xl" />
                ) : (
                    <FaXmark className="mx-auto text-white text-2xl" />
                )}
            </motion.button>
            <div className="flex flex-col flex-grow pe-2">
                {isEditing ? (
                    <input
                        type="text"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        className={"text-lg border-b-2 border-primary"}
                    />
                ) : (
                    <h1 className={`text-lg ${task.completed ? 'line-through' : ''}`}>{task.title}</h1>
                )}
                <p className="text-zinc-500 text-sm" suppressHydrationWarning>{task.createdAt.toLocaleString()} </p>
            </div>
            <div className="flex flex-row gap-3">
                <motion.button
                    onClick={handleEditClick}
                    className={`w-10 h-10 rounded-md ${isEditing ? 'bg-accept' : 'bg-zinc-300'}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {isEditing ? (
                        <FaCheck className="mx-auto text-gray-700 text-xl" />
                    ) : (
                        <FaPenToSquare className="mx-auto text-gray-700 text-xl" />
                    )}
                </motion.button>
                <motion.button
                    onClick={() => removeTask(task)}
                    className="w-10 h-10 rounded-md bg-zinc-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaTrash className="mx-auto text-gray-700 text-xl" />
                </motion.button>
            </div>
        </motion.div>
    );
}