import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      {/* <div className='w-full flex flex-col items-center bg-cWhite-500 dark:bg-cBlack' >
        <div className='max-w-[1440px] mx-[16px] sm:mx-[42px]  md:mx-[92px]' > */}
          <App />
        {/* </div>
      </div> */}
    </BrowserRouter>
  </StrictMode>,
)
