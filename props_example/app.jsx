class Component extends React.Component{
	render(){
		return(
			<div style={{borderBottom: '1px solid #333'}}>
				<h1 style={{color:'#85E023'}}>Props Example</h1>
				<div>
					<Person name={true} />
				</div>
			</div>
		);
	}
}

class Person extends React.Component{
	render(){
		return(
			<div>
				<h1 style={{color:'#85E023'}}>Imported Es6 Prop</h1>
				{this.props.name ? <p>This is true</p> :<p>This is false</p> }
			</div>
		);
	}
}
ReactDOM.render(<Component />, document.getElementById('root'))