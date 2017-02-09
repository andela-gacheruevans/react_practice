class ComponentOne extends React.Component{
	handleClick() {
		alert('Button was clicked')
	}

	render(){
		return(
			<div style={{borderBottom: '1px solid #333'}}>
				<h1 style={{color:'#85E023'}}>Es6 Implementation</h1>
				<div>
					<ComponentTwo onClick={this.handleClick}/>
				</div>
			</div>
		);
	}
}

class ComponentTwo extends React.Component{
	
	render(){
		return(
			<div>
				<h1 style={{color:'#85E023'}}>Imported Es6 Implementation</h1>
				<div>
					<button onClick={this.props.onClick} >OnClick</button>
				</div>
			</div>
		);
	}
}
ReactDOM.render(<ComponentOne />, document.getElementById('root'))