import ComicGrid from './containers/ComicGrid'
import Header from './containers/Header'
import Layout from './containers/Layout'

function App() {
	return (
		<Header>
			<Layout>
				<ComicGrid />
			</Layout>
		</Header>
	)
}

export default App
