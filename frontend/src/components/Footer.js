function Footer(){
    return(
                  <footer className="d-flex flex-wrap justify-content-between container align-items-center my-4 border-top">
                  <div className="col-md-4 d-flex align-items-center">
                  <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                      URACADEMY
                      </a>
                          <span className="mb-3 mb-md-0 text-muted">© 2024 Company</span>
                      </div>
      
                      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex pt-2">
                          <li className="ms-3">
                              <a className="text-muted" href="www.linkedin.com" target='blank'><i className='fa-brands fa-linkedin fa-2x'></i></a>            
                          </li>
                          <li className="ms-3">
                              <a className="text-muted" href="www.gmail.com" target="_blank"><i className="fab fa-google fa-2x"></i></a>            
                          </li>
                          <li className="ms-3">
                              <a className="text-muted" href="www.twitter.com" target='blank'><i className='fa-brands fa-twitter fa-2x'></i></a>            
                          </li>
                          <li className="ms-3">
                              <a className="text-muted" href="https://github.com/Bryan18-Alvarado" target='blank'><i className='fa-brands fa-github fa-2x'></i></a>            
                          </li>
                      </ul>
                </footer>
    );
}

export default Footer