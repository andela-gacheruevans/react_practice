class ComponentForm extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			username:'',
			password:''
		}
	    this.handleSubmit = this.handleSubmit.bind(this)
	    this.handleUserInput = this.handleUserInput.bind(this)
	}

	handleUserInput(e) {
		let field = e.target.name;
		let value = e.target.value;
		this.setState({[field]: value});
	}

	handleSubmit(e){
		e.preventDefault();
		alert('Username: ' + this.state.username + ' Password: ' + this.state.password);

	}

	render(){
		return(
			<div>
				<div>
					<form onSubmit={this.handleSubmit}>
						<label>Username</label>
						&nbsp;
						<input name="username" type='text' value={this.state.username} onChange={this.handleUserInput}/>
						<label>Password</label>
						<input name="password" type='password' value={this.state.password} onChange={this.handleUserInput}/>
						&nbsp;
						<input type="submit" value="Submit" />
					</form>
				</div>
			</div>
		)
	}
}
ReactDOM.render(<ComponentForm />, document.getElementById('root'));