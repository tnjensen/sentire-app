import Container from '../common/Container';
import Feed from '../feed/Feed';
import Header from '../header/Header';

function Home() {
  return (
    <>
    <Header />
    <Container>
        <Feed />
        
    </Container>
    </>
  )
}

export default Home