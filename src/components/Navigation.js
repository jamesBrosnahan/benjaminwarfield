import {h} from 'preact';  /** @jsx h */
import {Link} from 'preact-router';

export const Navigation = () => (
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <Link class="navbar-brand" href="/">
          @benjaminws
        </Link>
      </div>

      <div class="collapse navbar-collapse" id="navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li><a href="/about">About</a></li>
          <li><a href="/contact"> Contact</a></li>
          <li><a href="/work">Work</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="https://twitter.com/benjaminws"><i class="fa fa-twitter fa-lg" aria-hidden="true"></i></a></li>
          <li><a href="https://github.com/benjaminws"><i class="fa fa-github fa-lg" aria-hidden="true"></i></a></li>
          <li><a href="https://linkedin.com/in/benjaminwarfield"><i class="fa fa-linkedin fa-lg" aria-hidden="true"></i></a></li>
          <li><a href="https://facebook.com/benjaminws"><i class="fa fa-facebook fa-lg" aria-hidden="true"></i></a></li>
        </ul>
      </div>
    </div>
  </nav>
);
