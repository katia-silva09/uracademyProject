import { Link } from 'react-router-dom'

function BoomCircle(){
    return(
        <div className="d-flex justify-content-center align-items-center">
        <div className="rounded-circle overflow-hidden" style={{ width: 60, height: 60, margin: 30 }}>
            <Link to="/courses"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png" alt="Circle Image" className="img-fluid" /></Link>
    </div>
    </div>
    )
}

export default BoomCircle