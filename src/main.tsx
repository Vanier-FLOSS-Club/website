import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {MDXComponents} from 'mdx/types.js'
import './index.css'
import App from './App.tsx'
import MdxTest from "./MdxTest.mdx";
import { Layout } from './components/Layout'

const components: MDXComponents = {
    em(properties) {
        return <i {...properties} />
    }
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route index element={<App/>}/>
                    <Route path="mdx-test" element={
                        <MdxTest components={components} />
                    }/>
                </Routes>
            </Layout>
        </BrowserRouter>
    </StrictMode>
)
