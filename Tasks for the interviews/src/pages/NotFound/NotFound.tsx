import { Link } from 'react-router-dom';

import './NotFound.css';
import NotFoundImg from '/404_img.gif';

function NotFound() {
  return (
    <main className="container_404">
      <div className="gif">
        <img src={NotFoundImg} alt="gif_ing" />
      </div>
      <div className="content">
        <h1 className="main-heading">Sorry! This page doesn't exist</h1>
        <p>Here is nothing found! Please try to visit another link!</p>
        <Link to="/">
          <button>Go Home</button>
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
