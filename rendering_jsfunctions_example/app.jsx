class ComponentTwo extends React.Component{
	render(){
		return(
			<div>
				<h1 style={{color:'#85E023'}}>4{= (2**2)}</h1>
			</div>
		);
	}
}
ReactDOM.render(<ComponentTwo />, document.getElementById('root'))
 