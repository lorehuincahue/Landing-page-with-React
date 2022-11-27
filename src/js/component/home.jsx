import React from "react";
import Card from "./card";
import Navbar from "./navbar";
import Header from "./header";
import Footer from "./footer";


//create your first component
const Home = () => {
	return (	
		<>
		<Navbar />
		<Header />
			<div className="row py-lg-5">
			<Card titulo="Titulo :)"/>
			<Card titulo="Titulo :)"/>
			<Card titulo="Titulo :)"/>
			<Card titulo="Titulo :)"/>
			</div>
		<Footer />	
			</>
	);
};

export default Home;
