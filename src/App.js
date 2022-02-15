
import Footer from './components/Footer/Footer';
import TopMenu from './components/Menu/TopMenu';
import Page from './components/Pages/Page';


const classes = {
  layout: { padding: '10px 40px', margin: 'auto', background: '#FAF9F9', minWidth: '1300px'}
}

const App =() => {
  return ( 
    <div sx={classes.layout}>
        <TopMenu />
        <Page/>
        <Footer/>
    </div>
  )
}

export default App;
