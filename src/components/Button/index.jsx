/* eslint-disable react/prop-types */
import React from 'react';

import {Botao} from './styles';

const Button = ({text, ...rest}) => (
	<Botao {...rest} >{text}</Botao>

);

export default Button;