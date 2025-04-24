import ChildB from "./childB";

// eslint-disable-next-line react/prop-types
const ChildA = ({user}) => {
  return (
    <div>
      <h3>Child A</h3>
      <ChildB user={user} />
    </div>
  );
}

export default ChildA