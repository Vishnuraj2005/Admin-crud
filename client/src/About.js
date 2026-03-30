import React from 'react';

const About = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center mb-5">
        <div className="col-md-6 mb-4 mb-md-0">
          <img 
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop" style={{height:'600px', width:'550px'}}
            alt="Delicious food" 
            className="img-fluid rounded shadow" 
          />
        </div>
        <div className="col-md-6 text-center text-md-start">
          <h2 className="display-4 font-weight-bold mb-4 text-warning">About Foodies</h2>
          <p className="lead text-muted">
            Welcome to Foodies, your ultimate destination for culinary exploration and inventory management. 
            We believe that managing your products should be as delightful as the food itself.
          </p>
          <p>
            Our platform offers a seamless experience designed specifically for passionate food entrepreneurs, 
            restaurant owners, and anyone who wants to keep track of their precious inventory with style and ease.
          </p>
        </div>
      </div>

      <div className="row mt-5 text-center">
        <div className="col-md-4 mb-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <i className="bi bi-clock-history d-block mb-3 text-warning" style={{ fontSize: '3rem' }}></i>
              <h5 className="card-title font-weight-bold">Efficient Tracking</h5>
              <p className="card-text text-muted">Save time by easily keeping track of all your food inventory in one consolidated place.</p>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <i className="bi bi-shield-check d-block mb-3 text-warning" style={{ fontSize: '3rem' }}></i>
              <h5 className="card-title font-weight-bold">Secure Management</h5>
              <p className="card-text text-muted">Enjoy peace of mind knowing your data is handled securely with administrative controls.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <i className="bi bi-heart d-block mb-3 text-warning" style={{ fontSize: '3rem' }}></i>
              <h5 className="card-title font-weight-bold">Made with Love</h5>
              <p className="card-text text-muted">Built by foodies, for foodies. We designed this with your specific needs in mind.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;