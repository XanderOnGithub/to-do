'use client';

import { FaTrashCan } from "react-icons/fa6";

import { clearTasks } from '../_lib/todo';
import { motion } from 'framer-motion';

/**
 * AddButton component representing a button to add a new task.
 */
export default function ClearButton() {
    /**
     * Handles the click event to add a new task.
     */
    function onClicked() {
        clearTasks();
    }

    return (
        <motion.button
            onClick={onClicked}
            className="w-10 h-10 rounded-md bg-decline mx-auto my-3 sm:my-auto"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <FaTrashCan className="mx-auto" />
        </motion.button>
    );
}