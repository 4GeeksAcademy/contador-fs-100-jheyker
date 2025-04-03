import React from "react";
import { Digit } from "./Digit";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = (props) => {
	return (
		<div className="container d-flex justify-content-center bg-dark mt-3">

				<Digit digitValue={<i class="fa-regular fa-clock"></i>} />
				<Digit digitValue={props.digitOne}/>
				<Digit digitValue={props.digitDos}/>
				<Digit digitValue={props.digitTres}/>
				<Digit digitValue={props.digitCuatro}/>
				<Digit digitValue={props.digitCinco}/>
				<Digit digitValue={props.digitSeis}/>
			</div>
	);
};

export default Home;