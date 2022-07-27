export default function OrganizationCard(props) {
    console.log(props)
  if (!props) {
    return <h1>Loading please wait</h1>;
  } else {
    return (
      <div>
        <h2>Name: {props.name}</h2>
        <h3>Leader: {props.leader}</h3>
        <h3>Members: {props.members} </h3>
      </div>
    );
  }
}