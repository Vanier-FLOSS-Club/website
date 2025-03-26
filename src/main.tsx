import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router'
import './index.css'
import App from './App.tsx'
import MdxTest from "@/MdxTest.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route index element={<App/>}/>
                <Route path="mdx-test" element={<MdxTest/>}/>
            </Routes>
        </BrowserRouter>
    </StrictMode>
)
