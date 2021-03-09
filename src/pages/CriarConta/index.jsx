import React from 'react';

import {
	Container,
	Main,
	Form,
	ContainerBotao
} from './styles';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

const CriarConta = () => (
	<Container>
		<Header />

		<Main>
			<Form>
				<Input type="text" placeholder="NOME" />
				<Input type="number" placeholder="IDADE" />

				<Input type="text" placeholder="USUÁRIO" />
				<Input type="email" placeholder="E-MAIL" />

				<Input type="password" placeholder="SENHA" />
				<Input type="password" placeholder="CONFIRMAR SENHA" />

				<Input type="text" placeholder="INSTITUIÇÃO" />
				<Input type="text" placeholder="CURSO" />
				<Input type="text" placeholder="LOCALIZAÇÃO" />

				<ContainerBotao>
					<Button type="submit">CRIAR CONTA</Button>
				</ContainerBotao>
			</Form>
		</Main>
	</Container>
);

export default CriarConta;
