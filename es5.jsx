var ComponentOneA = React.createClass({
	render(){
		return(
			<div>
				<h1 style={{color:'#F76F00'}}>Es5 Implementation </h1>
				<div style={{color:'#000'}}>
					<p>Component One.</p>
					<ComponentTwoB />
				</div>
			</div>
		)
	}
})
var ComponentTwoB = React.createClass({
	render(){
		return(
			<div>
				<h1 style={{color:'#F76F00'}}>Imported Es5 Implementation </h1>
				<div style={{color:'#000'}}><p>Component Two.</p></div>
			</div>
		)
	}
})
ReactDOM.render(<ComponentOneA />, document.getElementById('body'))

