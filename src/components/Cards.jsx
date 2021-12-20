import { Link } from 'react-router-dom';
import '../styles/Cards.css';

export default function Cards() {
  return (
    <div className="container-card">
      <p className="destaque">
        {' '}
        <Link to="/2015">2015</Link>
      </p>
      <span className="card">
        <Link to="/2014">
          <Link to="/2014">2014</Link>
        </Link>
      </span>
      <span className="card">
        <Link to="/2013">2013</Link>
      </span>
      <span className="card">
        <Link to="/2012">2012</Link>
      </span>
      <span className="card">
        <Link to="/2011">2011</Link>
      </span>
      <span className="card">
        <Link to="/2010">2010</Link>
      </span>
      <span className="card">
        <Link to="/2009">2009</Link>
      </span>
      <span className="card">
        <Link to="/2008">2008</Link>
      </span>
      <span className="card">
        <Link to="/2007">2007</Link>
      </span>
      <span className="card">
        <Link to="/2006">2006</Link>
      </span>
      <span className="card">
        <Link to="/2005">2005</Link>
      </span>
      <span className="card">
        <Link to="/2004">2004</Link>
      </span>
      <span className="card">
        <Link to="/2003">2003</Link>
      </span>
    </div>
  );
}

/* <nav className="container-card">
<div className="destaque">
  <p>
    <Link to="/2015">2015</Link>|
  </p>
</div>
<br />
<div className="card">
  <span>
   
  </span>
  <span>
    <Link to="/2004">2004</Link>|
  </span>
  <span>
    <Link to="/2005">2005</Link>|
  </span>
  <span>
    <Link to="/2006">2006</Link>|
  </span>
  <span>
    <Link to="/2007">2007</Link>|
  </span>
  <span>
    <Link to="/2008">2008</Link>|
  </span>
  <span>
    <Link to="/2009">2009</Link>|
  </span>
  <span>
    <Link to="/2010">2010</Link>|
  </span>
  <span>
    <Link to="/2011">2011</Link>|
  </span>
  <span>
    <Link to="/2012">2012</Link>|
  </span>
  <span>
    <Link to="/2013">2013</Link>|
  </span>
  <span className="card">
   
  </span>
</div>
</nav> */
