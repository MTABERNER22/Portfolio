const style={
    notFound:{
        textAlign: 'center',
        fontFamily: 'Quicksand, sans-serif',
        margin: '250px auto'
    }
}

function NotFound() {
    return(
        <div style={style.notFound}>
        <h1> LA PÁGINA NO EXISTE </h1>
        </div>
    )
}

export default NotFound;