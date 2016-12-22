import {h} from 'preact';  /** @jsx h */
import {Link} from 'preact-router';

export const Navigation = () => (
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
         <Link class="navbar-brand" href="/">
          @benjaminws
         </Link>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/work">Work</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);
