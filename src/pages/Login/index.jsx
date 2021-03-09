import React from 'react';

import {
	Container,
	Main,
	Form,
	ContainerBotao,
	BotaoCriarConta
} from './styles';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';


const Login = () => (
	<Container>
		<Header />

		<Main>
			<Form>
				<Input type="text" placeholder="USUÁRIO" />
				<Input type="password" placeholder="SENHA" />

				<ContainerBotao>
					<Button type="submit">ENTRAR</Button>
				</ContainerBotao>

				<BotaoCriarConta to="/criar-conta">CRIAR CONTA</BotaoCriarConta>
			</Form>
		</Main>
	</Container>
);

export default Login;
