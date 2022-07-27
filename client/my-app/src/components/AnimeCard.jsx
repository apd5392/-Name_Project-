export default function AnimeCard(props) {
    console.log(props)
  if (!props) {
    return <h1>Loading please wait</h1>;
  } else {
    return (
      <div>
        <img src={props.image}/>
        <h2>Name: {props.name}</h2>
        <h3>Other Names: {props.otherName}</h3>
        <h3>Episodes: {props.episodes}</h3>
      </div>
    );
  }
}
