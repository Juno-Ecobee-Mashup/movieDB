import React from 'react';

// async componentDidMount() {
//     try {
//         const movieTrendingUrl = `${MOVIE_BASE_URL}/trending/movie/day?page=1/movie`;
//         const responsePromise = await fetch(movieTrendingUrl, {
//             headers: {
//                 Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
//                 "Content-Type": "application/json;charset=utf-8",
//             },
//         });
//         const response = await responsePromise.json();
//         console.log(response);

//         this.setState({
//             isLoaded: true,
//             movies: response.results,
//         });
//     } catch (e) {
//         this.setState({
//             error: e,
//             isLoaded: true,
//         });
//     }

// * * * * CHANGE THE FUNCTION COMPONENT INTO A CLASS COMPONENT TO USE COMPONENT DID MOUNT

class MovieModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movieID: props.movieID
		};
	}

	render() {
		return <h1>HELLO I'M MOVIE NUMBER {movieID} </h1>;
	}
}

export default MovieModal;
