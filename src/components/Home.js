import {h} from 'preact';  /** @jsx h */
import {Link} from 'preact-router';

export const Home = () => (
  <div class='content'>
    <div class='callout'>
      &ldquo;Creating a website about yourself feels kind of like when you were a kid and had to move schools; suddenly you find yourself standing in front of the class, explaining your weird & overly complicated story like an idiot.&rdquo; - <Link href="/about">Me</Link>
    </div>
  </div>
);
