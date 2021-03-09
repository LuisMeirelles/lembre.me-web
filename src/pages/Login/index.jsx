import React from 'react';

import {
	Container,
	Main,
	ContainerBotao,
	BotaoCriarConta
} from './styles';

import InputBlock from '../../components/InputBlock';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Form from '../../components/Form';


const Login = () => (
	<Container>
		<Header />

		<Main>
			<Form>
				<InputBlock type="text" placeholder="USUÁRIO" />
				<InputBlock type="password" placeholder="SENHA" />

				<ContainerBotao>
					<Button text="ENTRAR" type="submit" />
				</ContainerBotao>

				<BotaoCriarConta to="/criar-conta">CRIAR CONTA</BotaoCriarConta>
			</Form>
		</Main>
	</Container>
);

export default Login;
