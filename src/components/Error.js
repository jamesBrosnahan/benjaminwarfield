import {h} from 'preact';  /** @jsx h */

export const Error = ({type, url}) => (
	<div>
		<h1>Welp, we have a problem.</h1>
		<h2>Error {type}: {url}</h2>
	</div>
);
