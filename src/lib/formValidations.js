const formValidations = {
	email: {
		regularExp:
			/^[a-zñÑ0-9_-]+(?:\.[a-zñÑ0-9_-]+)*@(?:[a-z0-9](?:[a-z0-9-_]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9]*[a-z0-9])?$/,
		errorMessage: 'El email es incorrecto',
	},
};

export default formValidations;
