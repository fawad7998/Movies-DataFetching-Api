// import React, {useEffect, useState} from 'react';

// function Home() {
//   const ApIurl = 'https://www.omdbapi.com/?i=tt3896198&apikey=8120b56f';
//   const [movie, setMovie] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState({
//     show: false,
//     message: '',
//   });

//   const getmovies = async (url) => {
//     try {
//       const res = await fetch(url);
//       const data =  res.json();
//       console.log(data);
//       if (data.Responce === 'True') {
//         setLoading(false);
//         setMovie(data.Search);
//       } else {
//         setError({
//           show: true,
//           message: data.Error,
//         });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getmovies(ApIurl);
//   }, []);
//   return (
//     <>
//       {/* {movie.Actors} */}
//       {/* {movie.map((data) => {
//         return (
//           <div>
//             <h2>{data.Title}</h2>
//           </div>
//         );
//       })} */}
//     </>
//   );

// export default Home;
