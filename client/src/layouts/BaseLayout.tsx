import React from 'react'
import { Provider } from 'react-redux'
import { store, persistor } from '@/redux/store'
import { PersistGate } from 'redux-persist/integration/react'

const BaseLayout: React.FC = ({ children }) => (
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			{children}
		</PersistGate>
	</Provider>
)

export default BaseLayout
