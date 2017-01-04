import {h} from 'preact';  /** @jsx h */

export const Error = ({type, url}) => (
	<div>
		<h1>Welp, we have a problem.</h1>
		<div class='callout'>We got error <a href={`https://httpstatuses.com/${type}`}>{type}</a>, when trying to access the following URL: <br />{url}</div>
	</div>
);
