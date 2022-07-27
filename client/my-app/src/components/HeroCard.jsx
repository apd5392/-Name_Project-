export default function HeroCard(props) {
    console.log(props)
  if (!props) {
    return <h1>Loading please wait</h1>;
  } else {
    return (
      <div>
        <img src={props.image}/>
        <h2>{props.name}</h2>
        <h3 className="h3Age">Age: {props.age}</h3>
        <h3 className="h3heading">Other Names:</h3>
        <h3>{props.otherName}</h3>
        <h3 className="h3heading">Anime Series:</h3>
        <h3>{props.anime}</h3>
        <h3 className="h3heading">Groups: </h3>
        <h3>{props.organizations}</h3>
      </div>
    );
  }
}