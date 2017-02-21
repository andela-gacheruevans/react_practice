class ComponentForm extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			fname:'',
			lname:'',
			age:'',
			email:'',
			country:'',
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
		console.log(JSON.stringify(this.state));
		alert(JSON.stringify(this.state));

	}

	render(){
		return(
			<div style={{margin:'0 auto', width:'50%',padding:'8px',textAlign:'center', borderTop:'1px solid #eee',
			 borderLeft:'1px solid #eee', borderRight:'1px solid #eee', borderBottom:'1px solid #eee'}}>
				<form onSubmit={this.handleSubmit}>
					<div>
						<label style={{padding:'4px',textAlign:'left'}}>First Name</label>
						<input style={{padding:'4px',textAlign:'center'}} name="fname" type='text' value={this.state.fname} onChange={this.handleUserInput} />
						<label style={{padding:'4px',textAlign:'left'}}>Email</label>
						<input style={{padding:'4px',textAlign:'center'}} name="email" type='text' value={this.state.email} onChange={this.handleUserInput} />
					</div>
					<div style={{padding:'8px'}}>
						<label style={{padding:'4px',textAlign:'left'}}>Last Name</label>
						<input style={{padding:'4px',textAlign:'center'}} name="lname" type='text' value={this.state.lname} onChange={this.handleUserInput} />
						<label style={{padding:'4px',textAlign:'left'}}>Age</label>
						<input style={{padding:'4px',textAlign:'center'}} name="age" type='text' value={this.state.age} onChange={this.handleUserInput} />
					</div>
					<div style={{padding:'8px'}}>
						<label style={{padding:'4px',textAlign:'left'}}>Password</label>
						<input style={{padding:'4px',textAlign:'center'}} name="password" type='password' value={this.state.password} onChange={this.handleUserInput}/>
						<label style={{padding:'4px',textAlign:'left'}}>Country</label>
						<select style={{padding:'8px',textAlign:'center'}} name="country" type='text' value={this.state.country} onChange={this.handleUserInput}>
							<option></option>
							<option value='America'>America</option>
							<option value='Australia'>Australia</option>
							<option value='Austria'>Austria</option>
							<option value='Angola'>Angola</option>
							<option value='Brazil'>Brazil</option>
							<option value='Britain'>Britain</option>
							<option value='Belgium'>Belgium</option>
							<option value='Botswana'>Botswana</option>
							<option value='Burundi'>Burundi</option>
							<option value='Kenya'>Kenya</option>
							<option value='Tanzania'>Tanzania</option>
							<option value='Uganda'>Uganda</option>
							<option value='Ethopia'>Ethopia</option>
							<option value='Nigeria'>Nigeria</option>
						</select>
					</div>
					<div style={{padding:'8px', textAlign:'center'}}>
						<input style={{padding:'4px',textAlign:'center'}} type="submit" value="Submit" />
					</div>
				</form>
			</div>
		)
	}
}
ReactDOM.render(<ComponentForm />, document.getElementById('root'));