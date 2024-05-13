import { Link } from 'react-router-dom';

function BoomCircle(props) {
    const { imgSrc } = props;
    return (
        <div className="text-center">
            <div className="d-flex flex-column align-items-center">
                <div className="rounded-circle overflow-hidden" style={{ width: 60, height: 60, margin: 30 }}>
                    <Link to="/courses">
                        <img src={imgSrc} alt="Circle Image" className="img-fluid" />
                    </Link>
                </div>
                <Link to='/courses'><h6 className='text-title' style={{ color: 'white', fontFamily: 'ADLaM Display', margin: 10 }}>{props.title}</h6></Link>
            </div>
        </div>
    );
}

export default BoomCircle;
