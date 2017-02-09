class ComponentOne extends React.Component{
	render(){
		return(
			<div style={{borderBottom: '1px solid #333'}}>
				<h1 style={{color:'#85E023'}}>Welcome to Learning Es6 and Es5 with React </h1>
			</div>
		);
	}
}
ReactDOM.render(<ComponentOne />, document.getElementById('root'))