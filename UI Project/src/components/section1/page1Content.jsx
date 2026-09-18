import LeftContent from "./leftContent.jsx"
import RightContent from "./rightContent.jsx"

const page1Content = (props) => {
  return (
    <div className="flex gap-10 px-18 py-10 items-center h-[90vh]">
      <LeftContent/>
      <RightContent users = {props.users}/>
    </div>
  )
}

export default page1Content
