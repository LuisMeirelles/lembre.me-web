import React from 'react';
import {
	Container,
	Descricao,
	Titulo
} from './styles';

const Erro = ({ titulo, descricao }) => (
	<Container>
		<Titulo>{titulo}</Titulo>
		<Descricao>{descricao}</Descricao>
	</Container>
);

export default Erro;
