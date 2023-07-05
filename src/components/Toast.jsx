import React from 'react';
import { motion } from 'framer-motion';

import { toastSlideIn } from '../utils/motion';

const Toast = ({ message, duration, type }) => {
	return (
		<motion.div
			className={`min-w[160px] absolute bottom-10 z-50 bg-purple min-h[60px] p-2`}
			variants={toastSlideIn('left', 'tween', 0.2, 2)}
		>
			<span>{message}</span>
		</motion.div>
	);
};

export default Toast;
