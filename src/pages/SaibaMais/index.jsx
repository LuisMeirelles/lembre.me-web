import React from 'react';
import logo from '../../assets/img/logo.svg';
import {
	Container,
	Conteudo,
	Header,
	LinkLogo,
	Main,
	Navbar,
	NavItem
} from './styles';


const SaibaMais = () => (
	<Container>
		<Navbar>
			<NavItem to='/login'>LOGIN</NavItem>
		</Navbar>

		<Header>
			<LinkLogo to="/">
				<img src={logo} alt="Logo" />
			</LinkLogo>
		</Header>

		<Main>
			<Conteudo>

				<div>
					<h1>SAIBA MAIS </h1>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and scrambled it to make a type specimen book.
						It has survived not only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
						containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
						ncluding versions of Lorem Ipsum.
					</p>
				</div>

				<img src={logo} alt="algumacoisa" />
			</Conteudo>

			<NavItem to='/login'>LOGIN</NavItem>
		</Main>
	</Container >
);

export default SaibaMais;
