import ChildC from './ChildC';

// eslint-disable-next-line react/prop-types
const ChildB = ({user}) => {
  return (
    <div>
      <h3>Child A</h3>
      <ChildC user={user} />
    </div>
  );
}

export default ChildB