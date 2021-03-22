import React, { useState } from 'react';
import Button from '../../components/Button';
import Erro from '../../components/Erro';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Navbar from '../../components/Navbar';
import {
	BotaoVoltar,
	Container,
	ContainerBotao,
	ErrorContainer,
	Form,
	Main
} from './styles';




const CriarConta = () => {
	const [formulario, setFormulario] = useState(1);

	const [usuario, setUsuario] = useState('');
	const [senha, setSenha] = useState('');
	const [confirmaSenha, setConfirmaSenha] = useState('');

	const [usuarioValido, setUsuarioValido] = useState(true);
	const [senhaValida, setSenhaValida] = useState(true);
	const [senhasCoincidem, setSenhasCoincidem] = useState(true);

	const [email, setEmail] = useState('');
	const [nome, setNome] = useState('');
	const [idade, setIdade] = useState('');

	const [emailValido, setEmailValido] = useState(true);
	const [nomeValido, setNomeValido] = useState(true);
	const [idadeValida, setIdadeValida] = useState(true);


	const [camposVazios, setCamposVazios] = useState(true);


	const proximo = (e) => {
		e.preventDefault();

		camposEmBranco();

		const $usuarioValido = validaUsuario();
		const $senhaValida = validaSenha();

		if ($senhaValida && $usuarioValido) {
			setFormulario(formulario + 1);
			setCamposVazios(true);
		}
	};

	const criaConta = (e) => {
		e.preventDefault();

		camposEmBranco();

		const $emailValido = validaEmail();
		const $nomeValido = validaNome();
		const $idadeValida = validaIdade();

		if ($nomeValido && $idadeValida && $emailValido) {
			alert('CONTA CRIADA');
		}
	};

	const compararRegex = (regex, string) => regex.test(string);

	const validaUsuario = () => {
		const validacaoUsuario = compararRegex(/^[A-z](?=.*[A-zéãáçâêüúíîõèìöó@#@!$%*?#+-])[A-zéãáçâêüúíîõèìöó@!$%*?#+-\d]{1,}[A-z\d]$/, usuario);

		setUsuarioValido(validacaoUsuario);

		return validacaoUsuario;
	};

	const validaSenha = () => {
		const validacaoSenha = compararRegex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?^&-])[A-Za-z\d#?!@$%^&*-]{8,}$/, senha);
		setSenhaValida(validacaoSenha);

		const senhasIguais = senha === confirmaSenha;
		setSenhasCoincidem(senhasIguais);

		return validacaoSenha && senhasIguais;
	};

	const validaEmail = () => {
		const validacaoEmail = compararRegex(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, email);

		setEmailValido(validacaoEmail);

		return validacaoEmail;
	};

	const validaNome = () => {
		const validacaoNome = compararRegex(/^[A-Z](?=.*[A-zéãáçâêüúíîõèìö])(?=.*\s)[A-zéãáçâêüúíîõèìö\s]{5,}[a-z]$/, nome);

		setNomeValido(validacaoNome);

		return validacaoNome;
	};

	const validaIdade = () => {
		const validacaoIdade = compararRegex(/^[0-9]{1,}$/, idade);

		setIdadeValida(validacaoIdade);

		return validacaoIdade;
	};

	const camposEmBranco = () => {
		if (formulario == 1 && (usuario === '' || senha === ''))
			setCamposVazios(true);
		else if (formulario == 2 && (email === '' || idade == '' || nome === '')) {
			setCamposVazios(true);
		} else {
			setCamposVazios(false);
		}
	};

	return (
		<Container>
			<Header>
				{formulario == 1 && (
					<Navbar items={[{
						key: 'voltar',
						path: '/login',
						text: 'VOLTAR'
					}]} />
				)}

				{formulario > 1 && (
					<BotaoVoltar onClick={() => setFormulario(formulario - 1)}>VOLTAR</BotaoVoltar>
				)}
			</Header>

			<Main>
				{formulario == 1 && (
					<Form onSubmit={(e) => proximo(e)}>
						<Input
							type="text"
							placeholder="USUÁRIO"
							onChange={(e) => setUsuario(e.target.value)}
							value={usuario}
						/>

						<Input
							type="password"
							placeholder="SENHA"
							onChange={(e) => setSenha(e.target.value)}
							value={senha}
						/>

						<Input
							type="password"
							placeholder="CONFIRMAR A SENHA"
							onChange={(e) => setConfirmaSenha(e.target.value)}
							value={confirmaSenha}
						/>

						<ErrorContainer>
							{camposVazios ?
								<Erro titulo="TODOS OS CAMPOS DEVEM SER PREENCHIDOS." />
								: (

									!usuarioValido && (
										<Erro
											titulo="USUÁRIO INVÁLIDO"
										/>
									) ||

									!senhaValida && (
										<Erro
											titulo="SENHA INVÁLIDA"
											descricao="As senhas devem ter pelo menos 8 caracteres, contendo no mínimo uma letra maíuscula,
													uma letra mínuscula, um número e um caractere especial (ex: !@#)."
										/>

									) ||

									!senhasCoincidem && (
										<Erro
											titulo="AS SENHAS NÃO COINCIDEM"
										/>
									)
								)
							}

						</ErrorContainer>



						<ContainerBotao>
							<Button type="submit">PRÓXIMO</Button>
						</ContainerBotao>
					</Form>
				)}

				{formulario == 2 && (
					<Form noValidate onSubmit={(e) => criaConta(e)}>
						<Input
							type="email"
							placeholder="E-MAIL"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>

						<Input
							type="text"
							placeholder="NOME"
							onChange={(e) => setNome(e.target.value)}
							value={nome}
						/>

						<Input
							type="number"
							placeholder="IDADE"
							onChange={(e) => setIdade(e.target.value)}
							value={idade}
						/>

						<ErrorContainer>
							{camposVazios ?
								<Erro titulo="TODOS OS CAMPOS DEVEM SER PREENCHIDOS." />
								: (
									!emailValido && (
										<Erro
											titulo="EMAIL INVÁLIDO"
										/>
									) ||

									!nomeValido && (
										<Erro
											titulo="NOME INVÁLIDO"
										/>

									) ||

									!idadeValida && (
										<Erro
											titulo="IDADE INVÁLIDA"
										/>
									)
								)
							}


						</ErrorContainer>

						<ContainerBotao>
							<Button type="submit">CRIAR CONTA</Button>
						</ContainerBotao>
					</Form>
				)}
			</Main>
		</Container >
	);
};

export default CriarConta;
