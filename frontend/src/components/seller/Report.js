import SellerSidebar from './SellerSideBar';

function Reports() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <SellerSidebar />
        </div>
        <div className="col-md-9 col-12 mb-2">
          <div className="row">
            <div className="col-md-3 mb-2">
              <div className="card">
                <div className="card-body text-center">
                  <h4>Reporte Diario</h4>
                  <h4>
                    <a href="#" className="btn btn-warning">Ver</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-2">
              <div className="card">
                <div className="card-body text-center">
                  <h4>Reporte Mensual</h4>
                  <h4>
                    <a href="#" className="btn btn-warning">Ver</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-2">
              <div className="card">
                <div className="card-body text-center">
                  <h4>Reportes Anual</h4>
                  <h4>
                    <a href="#" className="btn btn-warning">Ver</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;
