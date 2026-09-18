import RightCardContent from './rightCardContent.jsx'
const rightCard = (props) => {
  return (
    <div className='h-full w-80 shrink-0 overflow-hidden relative'>
        <img className= 'h-full w-full object-cover rounded-3xl' src={props.img} alt="" />
        <RightCardContent id = {props.id} tag = {props.tag} color ={props.color} />
    </div>
  )
}

export default rightCard
