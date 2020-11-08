import { useContext } from 'react'
import RouterContext from './Context'

const useRouter = () => useContext(RouterContext)
const useHistory = () => useContext(RouterContext).history
const useLocation = () => useContext(RouterContext).location

export {
  useHistory,
  useLocation,
  useRouter
}

