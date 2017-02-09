class EventListener extends React.Component{
	
	click() {alert('Button was clicked')}
	render(){
		return(
			<div>
				<h1 style={{color:'#85E023'}}>on Click</h1>
				<div>
					<p>Event Listeners.</p>
					<button onClick={this.click}>OnClick</button>
				</div>
			</div>
		);
	}
}
ReactDOM.render(<EventListener />, document.getElementById('root'))

