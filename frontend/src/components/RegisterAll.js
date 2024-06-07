import { Link } from 'react-router-dom';

function RegisterAll() {
  return (
    <div>
      <h4>Register All</h4>
      
      <div className="mb-3">
        <Link to="/customer/register">
          <button type="button" className="btn btn-primary btn-sm">Register as Customer</button>
        </Link>
      </div>
      
      <div className="mb-3">
        <Link to="/seller/register">
          <button type="button" className="btn btn-primary btn-sm">Register as Instructor</button>
        </Link>
      </div>

      <p>Si tienes una cuenta <Link to="/">inicia  cesion aquí</Link>.</p>
    </div>
  );
}

export default RegisterAll;
