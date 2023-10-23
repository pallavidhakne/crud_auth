
import { Link } from 'react-router-dom'; 
function header() {
  return (
    <div className='bg-slate-200'>
    <div className='flex justify-between item-center max-w-6xl max-auto p-3'> 
        <Link to='/'>
        <h1 className='font-bold'>Auto App</h1>
        </Link>
        <ul>
          <Link to='/'><li>Home</li></Link>
          <Link to='/about'><li>About</li></Link>  
          <Link to='/sign-in'> <li>Sign In</li></Link> 
        </ul>
    </div>
    
    </div>

  )
}

export default header