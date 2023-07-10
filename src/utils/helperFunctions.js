export const isValid = (type, pattern, value) => {
	if (type === 'text') {
		return pattern.test(value);
	}
};

export const VALIDATOR_OBJECT = {
	name: { min: 3, max: 30, pattern: '', patternText: '' },
	email: {
		min: 6,
		max: 50,
		pattern: new RegExp(/^\w+([\\.-]?\w+)*@([a-z]{2,3})+\.[a-z]{2,3}/),
		patternText: 'Please enter a valid email e.g. your@email.xxx',
	},
	message: { min: 3, max: 150, pattern: '', patternText: '' },
};

export const validatorText = (target, min, max) => {
	return `The ${target} field must between ${min} and ${max} characters.`;
};

export const generateReturntext = (pattern, patternText, key, min, max) => {
	return pattern ? patternText : validatorText(key, min, max);
};

export const formValidator2 = (formObject) => {
	const returnValue = Object.entries(formObject).map(([key, value], index) => {
		let returnBool;
		const validator = VALIDATOR_OBJECT[key] || { min: 0, max: 1 };
		const { min, max, pattern, patternText } = validator;
		let returnText = generateReturntext(pattern, patternText, key, min, max);
		switch (key) {
			case 'name':
				returnBool = value.length >= min && value.length <= max;
				break;
			case 'message':
				returnBool = value.length >= min && value.length <= validator.max;
				break;
			case 'email':
				returnBool = pattern
					? isValid('text', pattern, value)
					: value.length >= min && value.length <= validator.max;
				break;
			default:
				returnText = '';
				returnBool = true;
				break;
		}
		return { returnBool, returnText };
	});
	return returnValue;
};

export const formValidator = (target, value) => {
	let returnBool, returnText;
	const validator = VALIDATOR_OBJECT[target];
	const { min, max } = validator;
	switch (target) {
		case 'name':
			returnText = validatorText(target, min, max);
			returnBool = value.length >= min && value.length <= max;
			break;
		case 'message':
			returnText = validatorText(target, min, max);
			returnBool =
				value.length >= validator.min && value.length <= validator.max;
			break;
		default:
			break;
	}
	return { returnBool, returnText };
};

export const testimonialSetter = (value) => {
	const testimonialLength = value.length;
	const cutLength = 152;
	if (testimonialLength > cutLength) {
		const cutTestimonial = value.slice(0, 152);
		const cutPoint = cutTestimonial.lastIndexOf('.') + 1;
		const shortTestimonial = value.slice(0, cutPoint);
		return [true, shortTestimonial];
	} else {
		return [false, value];
	}
};
