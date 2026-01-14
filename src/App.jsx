import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import ProblemsSolutions from './components/ProblemsSolutions'
import WorkflowPipeline from './components/WorkflowPipeline'
import QualitySpectrum from './components/QualitySpectrum'
import QAToolkit from './components/QAToolkit'
import StandardDocumentation from './components/StandardDocumentation'
import BadgesExpertise from './components/BadgesExpertise'
import CapabilityModules from './components/CapabilityModules'
import CaseStudy from './components/CaseStudy'
import CallToAction from './components/CallToAction'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <QualitySpectrum />
        <QAToolkit />
        <StandardDocumentation />
        <BadgesExpertise />
        <WorkflowPipeline />
        <CaseStudy />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

export default App

