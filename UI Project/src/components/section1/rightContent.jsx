import RightCard from "./rightCard"
const rightContent = (props) => {
  return (
    <div id= 'right' className='h-full overflow-x-auto w-2/3 p-6 flex flex-nowrap gap-10'>
      {props.users.map(function(elem , idx){
        return <RightCard key = {idx} id = {idx} img = {elem.img} color = {elem.color} tag = {elem.tag} />
      })}


    </div>
  )
}

export default rightContent
