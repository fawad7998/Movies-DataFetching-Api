import React, {useState, useEffect} from 'react';

function Home2() {
  const api = 'https://www.omdbapi.com/?s=transformers&apikey=8120b56f';
  const [movies, setMovies] = useState([]);
  const [searched, setSearched] = useState('');
  // const [error, setError] = useState('');

  useEffect(() => {
    async function fetchmovies() {
      const responce = await fetch(api);
      const data01 = await responce.json();
      console.log(data01);
      setMovies(data01.Search);
    }
    fetchmovies();
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    const link = `https://www.omdbapi.com/?s=${searched}&apikey=8120b56f`;
    try {
      const res = await fetch(link);
      const data = await res.json();
      console.log(data);
      setMovies(data.Search);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <center style={{backgroundColor: '#F2F2F2'}}>
        <div
          style={{
            backgroundColor: '#CFCFCF',
            marginBottom: '50px',
          }}
        >
          <input
            style={{
              height: '30px',
              margin: '12px',
              borderRadius: '12px',
              borderColor: 'rgba(255, 195, 0 )',
              // border: 'none',
            }}
            type="text"
            // onChange={({target: {value}}) => {
            //   setSearched(value);
            // }}
            onChange={(e) => {
              setSearched(e.target.value);
            }}
            // onKeyUp={handleClick}
          />
          <button onClick={handleClick}> click me </button>
        </div>
        {/* <div style={{display: 'flex'}}>
          <div class="search-bar">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
              type="search"
              placeholder="search for creators,
                 inspirations and projects"
            />
          </div>

          <button onClick={handleClick}> click me </button>
        </div> */}
        {/*  */}

        <div
          style={{
            display: 'grid',
            gridTemplate: 'repeat(1,60vh)/ repeat(5,18vw)',
            gap: '30px',
          }}
        >
          {movies?.length > 0 ? (
            movies?.map((pack) => {
              const {Title, Poster, imdbID} = pack;
              return (
                <div key={imdbID}>
                  <div
                    style={{
                      fontSize: '20px',
                      fontWeight: 'bold',
                    }}
                  >
                    {Title}
                  </div>
                  <img
                    style={{
                      border: '5px solid grey',
                      height: '300px',
                      width: '200px',
                      objectFit: 'fill',
                    }}
                    src={Poster}
                    alt="/"
                  />
                </div>
              );
            })
          ) : (
            <div>No Result Found</div>
          )}
        </div>
      </center>
    </>
  );
}

export default Home2;
