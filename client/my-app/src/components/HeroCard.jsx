export default function HeroCard(props) {
    console.log(props)
  if (!props) {
    return <h1>Loading please wait</h1>;
  } else {
    return (
      <div>
        <img src={props.image}/>
        <h2>Name: {props.name}</h2>
        <h3>Other Names: {props.otherName}</h3>
        <h3>Anime's: {props.anime}</h3>
        <h3>Age: {props.age}</h3>
        <h3>Mortality Status: {props.aliveOrDeath}</h3>
        <h3>Organizations: {props.organizations}</h3>
      </div>
    );
  }
}