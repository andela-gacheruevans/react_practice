class Gender extends React.Component{
    render(){
        var arr =   [
                        {model:'C-180', make:'Mercedes', url:'https://i.ytimg.com/vi/3DaJJX-J5HU/maxresdefault.jpg'},
                        {model:'LancerX', make:'Mitsubishi', url:'http://www.borongaja.com/data_images/out/17/636283-mitsubishi-lancer-x-hatchback.jpg'},
                        {model:'Focus',  make:'Ford', url:'http://blog.caranddriver.com/wp-content/uploads/2014/02/2009-ford-focus-rs-photo-271838-s-1280x782.jpg'}
                    ]
        return(
            <div>
                <h1>List of Cars, their Model and Make.</h1>
                <div>
                    <p><b>Cars</b></p>
                    {arr.map((value, index) => 
                        {
                            return(
                            <div key={index}> 
                                <img src={value.url} height='80px' width='140px'/>
                                <p key={index}>{value.model} is manufactured by {value.make}</p>
                            </div>
                                
                            )
                        }
                    )}
                </div>
            </div>
        );
    }
}
ReactDOM.render(<Gender />, document.getElementById('root'))


