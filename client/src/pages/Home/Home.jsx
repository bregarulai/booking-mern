import {
  Featured,
  FeaturedProperties,
  Footer,
  Header,
  Maillist,
  Navbar,
  PropertyList,
} from '../../components';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='home__container'>
        <Featured />
        <h1 className='home__title'>Browse by property type</h1>
        <PropertyList />
        <h1 className='home__title'>Home guests love</h1>
        <FeaturedProperties />
        <Maillist />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
