import React from 'react';

import { Form as StyledForm } from './styles';

const Form = ({ children }) => (
	<StyledForm>
		{children}
	</StyledForm>
);

export default Form;
