import React from "react"; 

const Nav = ({ setLibraryStatus, libraryStatus }) => { 
	return ( 
		<nav> 
			<h1> Audio Player</h1> 
			<button 
				onClick={() => { 
					setLibraryStatus(!libraryStatus); 
				}} 
			> 
				<h4>Playlist</h4> 
			</button> 
		</nav> 
	); 
}; 

export default Nav; 
