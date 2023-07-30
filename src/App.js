import './styles/App.scss'
import Layout from './components/Layout/Layout'
import MainPage from './pages/MainPage'
import { useSelector } from 'react-redux'
import BankPage from './pages/BankPage'
import EarnPage from './pages/EarnPage'
import EducationPage from './pages/EducationPage'
import JobsPage from './pages/JobsPage'

const App = () => {
  const currentPage = useSelector(state => state.page)

  const ShowCurrentPage = currentPage => {
    switch (currentPage) {
      case 'bank':
        return <BankPage />

      case 'earn':
        return <EarnPage />

      case 'education':
        return <EducationPage />
      
      case 'jobs':
        return <JobsPage />

      case 'jobs_view':
        return <JobsPage type='view' />

      default:
        return <MainPage />
    }
  }

  return <Layout>
    { ShowCurrentPage(currentPage) }
  </Layout>
}

export default App