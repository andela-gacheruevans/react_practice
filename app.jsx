class ComponentOne extends React.Component{
	render(){
		return(
			<div style={{borderBottom: '1px solid #333'}}>
				<h1 style={{color:'#85E023'}}>Es6 Implementation</h1>
				<div>
					<p>Component Two.</p>
					<ComponentTwo />
				</div>
			</div>
		);
	}
}

class ComponentTwo extends React.Component{
	render(){
		return(
			<div>
				<h1 style={{color:'#85E023'}}>Es6 Implementation</h1>
				<div>
					<p>Component Two.</p>
				</div>
			</div>
		);
	}
}
ReactDOM.render(<ComponentOne />, document.getElementById('root'))

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
				<h1 style={{color:'#F76F00'}}>Es5 Implementation </h1>
				<div style={{color:'#000'}}><p>Component One.</p></div>
			</div>
		)
	}
})
ReactDOM.render(<ComponentOneA />, document.getElementById('body'))