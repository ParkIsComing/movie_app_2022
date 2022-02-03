import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import './Home.css';

class Home extends React.Component{  /*클래스형 컴포넌트*/
  state={
    isLoading: true, /*처음에는 로딩상태*/
    movies: [],
  };

  getMovies = async () => { //axios는 네트워크 사용하다보니 느리게 동작해서 axios.get()의 실행이 분리될 수 있도록 새함수로 만듦.
    const {//구조분해할당으로 객체에 접근 data -> data -> movies순으로 접근
      data: {
        data:{ movies },
      },
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');// async로 getMovies()는 시간이 필요하고, await로 axio.get()의 실행을 기다려달라고 말하는 것
    /*this.setState({movies: movies}) //왼쪽 movies는 state, 오른쪽 movies는 구조분해할당으로 얻은, 영화데이터가 담긴 변수*/
    this.setState({movies, isLoading:false}) //객체의 키 이름==대입할 변수 이름이면 위의 코드를 이렇게 적어도 됨.
   }

  componentDidMount(){//영화데이터 로딩
    //setTimeout(()=> {
    //  this.setState({isLoading: false});
    //}, 6000); /*setTimeout()은 첫번째 인자로 받은 함수를 두번째 인자로 받은 값(6초=6000밀리초) 후에 실행시켜줌*/

    this.getMovies();
    
  }
  render(){
    /*구조분해할당으로 this.stae에 있는 isLoadig얻으면 항상 this.state 입력 안해도됨*/
    const {isLoading, movies} =this.state; /*const는 변수 재선언, 재할당 불가... */
    return(<section className="container">
      {isLoading? (
       <div className="loader">
          <span className="loader__text">Loading..</span>
      </div>):(
      <div className="movies">
        {movies.map((movie)=> (
          <Movie
          key={movie.id} //컴포넌트를 여러개 출력할 때는 유일한 값을 이용하여 key props를 추가해야함!
          id={movie.id}
          year={movie.year}
          title={movie.title}
          summary={movie.summary}
          poster={movie.medium_cover_image}
          genres={movie.genres} //App 컴포넌트에서 Moivie 컴포넌트로 genre props를 넘겨줌
          />
      ))} 
      </div>
  )} 
    </section>);  
    } /*삼항연산자 이용*/
}
export default Home;
