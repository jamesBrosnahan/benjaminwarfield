import {h} from 'preact';  /** @jsx h */

export const Contact = () => (
  <div class='content'>
    <div class='callout'>
      Here&#39;s the deal. If you really want to get in touch with me, you should do so in a secure way.
    </div>
    <div class='callout-sub'>
     Also, if I&#39;m honest, it is more meaningful to me if you have to try a wee bit harder.
    </div>
    <div class='callout'>
      So if you are feeling saucy, here is my <a href="http://pgp.mit.edu:11371/pks/lookup?op=get&search=0x8EA10315498C1579">GPG Key</a>.
    </div>
    <div class='callout-sub'>
      If you just want to send me a regular-ass email, you can <a href="mailto:benjaminwarfield -at- gmail.com">click this link, but ugh</a>. Make sure to fix up the address in your client, because the mailto is busted on purpose.
    </div>
  </div>
);
