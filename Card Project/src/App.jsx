import Card from './components/card'

const App = () => {

const users = [
  {
    name: "John Mallow",
    location: "Los Angeles, USA",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    tags: ["Cooking", "Travel", "Photography"],
    facebook: "429K",
    twitter: "2M",
    instagram: "958K"
  },

  {
    name: "Cheryl Collins",
    location: "Ottawa, Canada",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    tags: ["Fashion", "Beauty", "Lifestyle"],
    facebook: "315K",
    twitter: "1.2M",
    instagram: "742K"
  },

  {
    name: "Paulina Kazimierczak",
    location: "Warsaw, Poland",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    tags: ["Fitness", "Wellness", "Travel"],
    facebook: "187K",
    twitter: "845K",
    instagram: "621K"
  },

  {
    name: "Nicole Monnier",
    location: "Paris, France",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    tags: ["Fashion", "Art", "Design"],
    facebook: "512K",
    twitter: "1.8M",
    instagram: "1.1M"
  },

  {
    name: "Szikszai Nikoletta",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    tags: ["Comedy", "Lifestyle", "Food"],
    facebook: "623K",
    twitter: "2.4M",
    instagram: "1.5M"
  },

  {
    name: "Laura Muraru",
    location: "Victoria, Canada",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    tags: ["Travel", "Photography", "Nature"],
    facebook: "241K",
    twitter: "936K",
    instagram: "684K"
  },

  {
    name: "Nathan Loom",
    location: "Victoria, Canada",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    tags: ["Technology", "Gaming", "Coding"],
    facebook: "198K",
    twitter: "756K",
    instagram: "423K"
  },

  {
    name: "Veronica Eiade",
    location: "Hanover, Germany",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    tags: ["Music", "Dance", "Lifestyle"],
    facebook: "376K",
    twitter: "1.4M",
    instagram: "892K"
  },

  {
    name: "Mark Webinarr",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    tags: ["Business", "Finance", "Motivation"],
    facebook: "542K",
    twitter: "1.7M",
    instagram: "803K"
  },

  {
    name: "Matteo Pasadlo",
    location: "Szczyrk, Poland",
    image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    tags: ["Sports", "Football", "Fitness"],
    facebook: "287K",
    twitter: "1.1M",
    instagram: "569K"
  }
]
  return (
    <div className='container'>
      
    {users.map(function(elem){
      return <Card name = {elem.name} location = {elem.location} image = {elem.image} tags = {elem.tags} facebook = {elem.facebook} twitter = {elem.twitter} instagram = {elem.instagram} />
    })}

    </div>
  )
}

export default App
