import React from 'react';
import './App.css';
import axios from 'axios'
import { Menu } from './components/Menu';
import { Spinner } from 'react-bootstrap';
import Basket from "./components/Basket"
import { BsFacebook , BsTwitter, BsInstagram} from "react-icons/bs";
import DeliveryAdress from './components/DeliveryAdress';


type AppProps = {
};

type AppState = {
	categories: Category[];
	loading: boolean;
	adressValid: boolean
};

type Category = {
	name: string;
	items: []
}

const getItemsUrl = "http://localhost:8080/getItems"

class App extends React.Component<AppProps, AppState> {
	state: AppState = {
		categories: [],
		loading: true,
		adressValid: true
	};

	setValid(val) {
		this.setState({ adressValid: val })
	}

	componentDidMount() {
		this.fetchUsers();
	}

	fetchUsers() {
		this.setState({ loading: true }, () => {
			axios.get(getItemsUrl)
				.then(result => {
					this.setState({
						loading: false,
						categories: [...result.data.categories] as Category[],
					});
				});
		});
	}




	render() {
		return (
			<div className="App">
				<header>
					<Basket valid={this.state.adressValid} />
					<div className='delivery-box'>
						<h1 className='delivery-header'>Доставка в г.Москва</h1>
					</div>
					<DeliveryAdress setValid={this.setValid.bind(this)} />
				</header>
				<main>
					{this.state.loading ? <Spinner animation="border" role="status">
						<span className="visually-hidden">Loading...</span>
					</Spinner> : <Menu categories={this.state.categories} />}
				</main>
				<footer className='footer-grid'>
					<div className='section-grid'>
						<div>
							<h2>Раздел</h2>
							<ul>
								<li>Подраздел</li>
								<li>Подраздел</li>
								<li>Подраздел</li>
								<li>Подраздел</li>
								<li>Подраздел</li>
							</ul>
						</div>
						<div>

						</div>
						<div>
							<h2>Раздел</h2>
							<ul>
								<li>Подраздел</li>
								<li>Подраздел</li>
								<li>Подраздел</li>
								<li>Подраздел</li>
								<li>Подраздел</li>
							</ul>
						</div>
					</div>
					<div className='icons-grid'>
						<BsInstagram/>
						<BsFacebook/>
						<BsTwitter/>
					</div>
				</footer>
			</div>
		);
	}
}

export default App;
