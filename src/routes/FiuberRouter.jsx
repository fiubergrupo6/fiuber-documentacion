import React, { lazy, Suspense } from 'react'
import { Routes, Route, Navigate, BrowserRouter as Router } from 'react-router-dom'

const GuideInstallation = lazy(() => import('../pages/guide-installation/GuideInstallation'))
const GuideArchitecture = lazy(() => import('../pages/guide-architecture/GuideArchitecture'))
const GuideRest = lazy(() => import('../pages/guide-rest/GuideRest'))
const GuideMobile = lazy(() => import('../pages/guide-mobile/GuideMobile'))
const GuideBackoffice = lazy(() => import('../pages/guide-backoffice/GuideBackoffice'))

const FiuberRouter = () => {
  return (
    <Router>
      <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
        <Routes>
          <Route path='/fiuber-documentacion/installation' element={<GuideInstallation />} />
          <Route path='/fiuber-documentacion/architecture' element={<GuideArchitecture />} />
          <Route path='/fiuber-documentacion/rest' element={<GuideRest />} />
          <Route path='/fiuber-documentacion/mobile' element={<GuideMobile />} />
          <Route path='/fiuber-documentacion/backoffice' element={<GuideBackoffice />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default FiuberRouter