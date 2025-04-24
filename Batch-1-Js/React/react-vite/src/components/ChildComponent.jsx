/* eslint-disable react/prop-types */

const ChildComponent = ({a,b}) => {
  return (
    <div>ChildComponent

        <p className="text-4xl text-red-500">Message:{a}</p>

        <p>User Name : {b.name}</p>
        <p>User Age : {b.age}</p>
    </div>
  )
}

export default ChildComponent