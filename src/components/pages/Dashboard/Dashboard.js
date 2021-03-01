import React from 'react';
import '../../../App.css';

export default function Dashboard() {
  return (
  <div  className='dashboard'>
    <h3>supermarket rating</h3>
  </div>);
  return (
    <div className="row">
			<div className="wp-bar bar">
      <div className="col-sm-3 col-xs-3">
					<h4>Silpo</h4>
				</div>
				<div className="col-sm-8 col-xs-8">
					<div className="progress">
						<div className="progress-bar" role="progressbar" aria-valuenow="70"
						     aria-valuemin="0" aria-valuemax="100" style="width:80%">
						</div>
					</div>
				</div>
				<div className="col-sm-1 col-xs-1">
					<h4>80%</h4>
				</div>

      </div>
  </div>
  );
}
