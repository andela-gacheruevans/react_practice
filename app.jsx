class ComponentOne extends React.Component{
	render(){
		return(
			<div style={{borderBottom: '1px solid #333'}}>
				<h1 style={{color:'#85E023'}}>Welcome to Learning Es6 and Es5 with React </h1>
				<ul>
					<li>
						<a href="event_listener&props_example/app.html">Event Listeners & Props Example</a>
					</li>
					<li>
						<a href="event_listeners_examples/app.html">Event Listeners</a>
					</li>
					<li>
						<a href="exporting_example/app.html">Exporting Component Example</a>
					</li>
					<li>
						<a href="istrue_example/app.html">Property Example</a>
					</li>
					<li>
						<a href="links_example/app.html">URL Links Example</a>
					</li>
					<li>
						<a href="maping_example/app.html">Mapping Example</a>
					</li>
					<li>
						<a href="props_example/app.html">Props Example</a>
					</li>
					<li>
						<a href="rendering_jsfunctions_example/app.html">Rendering JS Functions Example</a>
					</li>
					<li>
						<a href="ternary_operator_example/app.html">Ternary Operator Example</a>
					</li>
				</ul>
			</div>
		);
	}
}
ReactDOM.render(<ComponentOne />, document.getElementById('root'))