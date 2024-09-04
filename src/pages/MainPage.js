import About from "../components/About"
import Title from "../components/Title"
const MainPage = () => {
    
    return (
        <>
        <Title text='Hello, world!'/>
        <About about={{title: 'some title', body: 'some body'}}/>
        </>
    )
}
export default MainPage