class ComponentState extends React.Component{
	constructor(props) {
		super(props);
		this.state ={
			user_name : 'Evans',
			age : 20,
			gender : 'M'
		}
	}

	addAge(age){
		let newAge =this.state.age + 10;
		this.setState({age: newAge})
	}

	subtrAge(){
		let newAge =this.state.age - 10;
		this.setState({age: newAge})
	}

	render(){
		return(
			<div>
				<p>{this.state.user_name} is a {this.state.gender} and is {this.state.age} years old.</p>
				<div>
					<button id='add' name='add' onClick={()=> this.addAge()}>Add Age</button>
					<button id='subtract' name='subtract' onClick={()=> this.subtrAge()}>Subtract Age</button>
				</div>
			</div>
		)
	}
}
ReactDOM.render(<ComponentState />, document.getElementById('root'));