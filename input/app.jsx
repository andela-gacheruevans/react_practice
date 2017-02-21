class ComponentState extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			value :'',
		}
	    this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e){
		let newValue= e.target.value;
		this.setState({value: newValue})
	}

	render(){
		return(
			<div>
				<div>
					<input value={this.state.value} onChange={this.handleChange} />
				</div>
				<p>{this.state.value}</p>
			</div>
		)
	}
}
ReactDOM.render(<ComponentState />, document.getElementById('root'));