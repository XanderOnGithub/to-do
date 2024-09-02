'use client';

import { FaPlus } from 'react-icons/fa';
import { addTask } from '../_lib/todo';
import { motion } from 'framer-motion';

/**
 * AddButton component representing a button to add a new task.
 */
export default function AddButton() {
    /**
     * Handles the click event to add a new task.
     */
    function onClicked() {
        addTask();
    }

    return (
        <motion.button
            onClick={onClicked}
            className="w-10 h-10 rounded-md bg-accept mx-auto my-3 sm:my-auto"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <FaPlus className="mx-auto" />
        </motion.button>
    );
}