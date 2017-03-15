class ComponentOne extends React.Component{
	render(){
		return(
			<div>
				<h1 style={{color:'#85E023', textAlign:'center', borderBottom:'1px solid #ddd'}}>Welcome to Learning Es6 and Es5 with React </h1>
				<ol>
					<li style={{padding:'8px', borderBottom:'1px solid #ddd'}}>
						<a className='btn' href="event_listener&props_example/app.html">Event Listeners & Props Example</a>
					</li>
					<li style={{padding:'8px', borderBottom:'1px solid #ddd'}}>
						<a className='btn' href="event_listeners_examples/app.html">Event Listeners</a>
					</li>
					<li style={{padding:'8px', borderBottom:'1px solid #ddd'}}>
						<a className='btn' href="exporting_example/app.html">Exporting Component Example</a>
					</li>
					<li style={{padding:'8px', borderBottom:'1px solid #ddd'}}>
						<a className='btn' href="forms/app.html">Forms Example</a>
					</li>
					<li style={{padding:'8px', borderBottom:'1px solid #ddd'}}>
						<a className='btn' href="input/app.html">Input Example</a>
					</li>
					<li style={{padding:'8px', borderBottom:'1px solid #ddd'}}>
						<a className='btn' href="maping_example/app.html">Mapping Example</a>
					</li>
					<li style={{padding:'8px', borderBottom:'1px solid #ddd'}}>
						<a className='btn' href="istrue_example/app.html">Property Example</a>
					</li>
					<li style={{padding:'8px', borderBottom:'1px solid #ddd'}}>
						<a className='btn' href="links_example/app.html">URL Links Example</a>
					</li>
					<li style={{padding:'8px', borderBottom:'1px solid #ddd'}}>
						<a className='btn' href="props_example/app.html">Props Example</a>
					</li>
					<li style={{padding:'8px', borderBottom:'1px solid #ddd'}}>
						<a className='btn' href="rendering_jsfunctions_example/app.html">Rendering JS Functions Example</a>
					</li>
					<li style={{padding:'8px', borderBottom:'1px solid #ddd'}}>
						<a className='btn' href="ternary_operator_example/app.html">Ternary Operator Example</a>
					</li>
					<li style={{padding:'8px', borderBottom:'1px solid #ddd'}}>
						<a className='btn' href="states/app.html">Stateful Example</a>
					</li>
					<li style={{padding:'8px', borderBottom:'1px solid #ddd'}}>
						<a className='btn' href="mounting_lifecycles/app.html">Mounting life Cycles Example</a>
					</li>
				</ol>
			</div>
		);
	}
}
ReactDOM.render(<ComponentOne />, document.getElementById('root'))