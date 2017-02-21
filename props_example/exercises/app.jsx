class ComponentB extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			result: 1
		}
		this.add_click = this.add_click.bind(this)
		this.subtrack_click = this.subtrack_click.bind(this)
	}
	add_click() {
		let number  = this.state.result;
		console.log(number)
		let newNumber = number + 1;
		console.log(newNumber)
		this.setState({result: newNumber})
		console.log(this.state)
	}
	subtrack_click() {
		let number  = this.state.result;
		let newNumber = number - 1;
		this.setState({result: newNumber})
	}
	render(){
		return(
			<div style={{borderBottom: '1px solid #333'}}>
				<h1 style={{color:'#85E023'}}>Props Example</h1>
				<div>
					<ComponentA number={this.state.result} sub={this.subtrack_click} add={this.add_click}/>
				</div>
			</div>
		);
	}
}

class ComponentA extends React.Component{
	
	render(){
		return(
			<div>
				<h2 style={{textAlign:'center',color:'#85E023'}}>Addition and Subtraction Functionality</h2>
				<h3 style={{textAlign:'center',padding:'8px'}}>{this.props.number}</h3>
				<div style={{textAlign:'center',padding:'8px'}}>
					<button id='add' name='add' onClick={this.props.add}>+</button>
					&nbsp;
					<button id='add' name='subtract' onClick={this.props.sub}>-</button>
				</div>
			</div>
	
			
		);
	}
}
ReactDOM.render(<ComponentB />, document.getElementById('root'))