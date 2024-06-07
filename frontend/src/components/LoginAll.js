import { Link } from 'react-router-dom';

function LoginAll() {
  return (
    <div>
      <h4>Login All</h4>
      
      <div className="mb-3">
        <Link to="/customer/login">
          <button type="button" className="btn btn-primary btn-sm">Login as Customer</button>
        </Link>
      </div>
      
      <div className="mb-3">
        <Link to="/seller/login">
          <button type="button" className="btn btn-primary btn-sm">Login as Instructor</button>
        </Link>
      </div>

      <p>Si no tienes cuenta, <Link to="/register-all">regístrate aquí</Link>.</p>
    </div>
  );
}

export default LoginAll;
