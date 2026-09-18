import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'

const App = () => {
  const users = [
    {
      img : 'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
      intro : '' ,
      color : 'oklch(76.8% 0.233 130.85)' , 
      tag : 'Satisfied'
    } , 
    {
      img : 'https://plus.unsplash.com/premium_photo-1661660092463-d2aff6452af5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D' ,
      intro : '' ,
      color : 'oklch(52.5% 0.223 3.958)' , 
      tag : 'Underserved'
    } , 
    {
      img : 'https://plus.unsplash.com/premium_photo-1675967838197-1e91fba82b54?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
      intro : '' ,
      color : 'oklch(70.7% 0.165 254.624)' ,
      tag : 'Underbanked'
    } ,
        {
      img : 'https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
      intro : '' ,
      color : 'oklch(66.6% 0.179 58.318)' ,
      tag : 'Premium'
    }
  ]

  return (
    <div>
      <Section1 users = {users}/>

    </div>
  )
}

export default App
