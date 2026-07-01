// * USING CSS MODULE 
import styles from './Netflix.module.css'

// & STYLED COMPONENT
import styled from 'styled-components'


 // * USE OF STYLED COMPONENTS
      // ? 1. USING OBJECTS
      // const ButtonStyle = styled.button({
      //   padding : "1.2rem 2.4rem",
      //   border : "none" ,
      //   fontSize : "1.6rem",
      //   backgroundColor : `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}` ,
      //   color : "var(--btn-color)",
      //   fontWeight:"bold" ,
      //   cursor:"pointer"

      // });

      // ? USING TEMPLATE LITERALS STYLED COMPONENT
      const ButtonStyleObj = styled.button`
        padding : 1.2rem 2.4rem;
        border : none;
        font-size : 1.6rem;
        background-color : ${(props) => props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"} ;
        color : var(--btn-color);
        font-weight:bold ;
        cursor:pointer;
      `;

      const Rating = styled.h3`
          font-size : 1.6rem ;
          color : #7dcea0 ;
          text-transform : capitalize ;
          `;


export const SeriesCard = ({currElem}) => {
          //*  console.log(props);

          // * DESTRUCTURING IN JSX 
          const {id , img_url , name , rating , description , cast , genre , watch_url} = currElem ;  

          // * INLINE STYLING 
      //    const btnStyle = {
      //   padding : "1.2rem 2.4rem",
      //   border : "none" ,
      //   fontSize : "1.6rem",
      //   backgroundColor : `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}` ,
      //   // backgroundColor: "var(--btn-hover-bg-color)",
      //   color : "var(--btn-color)",
      //   fontWeight:"bold" ,
      //   cursor:"pointer"
      // };

     
      // * CONDITIONAL STYLING 
      const ratingClass = rating >= 8.5 ? styles["super-hit"] : styles.average ; 
    
       return(
          <li className={styles.card}>
      <div>
        <img src = {img_url} 
        alt={name} 
        width= "250px" 
        height= "250px"
        />
      </div>

      {/* <div className= {styles["card-content"]}> */}
      {/* TAILWIND CSS */}
      <div className= "flex flex-col gap-6 px-[1.2rem] py-[3.2rem]">

     
    <h2>Name : {name} </h2> 
    <Rating>
      Rating :
      <span className={`${styles.rating} ${ratingClass}`}>
       {rating} 
        </span>
    </Rating> 
    <p className='text-3xl font-bold underline text-amber-700'> Description : {description} </p>
    <p>Genre : {genre.join(",")}</p>
    <p> Cast : {cast.join(",")} </p>
    <a href = {watch_url} target = "_blank" >
    {/* <button style={btnStyle}>Watch Now</button> */}
    {/* <ButtonStyle >Watch Now</ButtonStyle> */}
    <ButtonStyleObj className = "flex-1 mt-auto" $rating = {rating}>Watch Now</ButtonStyleObj>
    </a>
    </div>
    </li> 
          );
}