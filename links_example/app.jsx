class ComponentTwo extends React.Component{
	render(){
		var link = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Geneva_MotorShow_2013_-_Lamborghini_Veneno_1.jpg/280px-Geneva_MotorShow_2013_-_Lamborghini_Veneno_1.jpg"
		return(
			<div>
				<h1 style={{color:'#85E023'}}>2^2 = {(2**2)}</h1>
				<div>
					<p>Component Two.</p>
					<img src={link} />
				</div>
			</div>
		);
	}
}
ReactDOM.render(<ComponentTwo />, document.getElementById('root'))