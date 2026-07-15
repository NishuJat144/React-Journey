import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { Profile } from './components/Profile.jsx'
import './index.css'
import { BioProvider } from './components/hooks/ContextApi'
import { Home } from './components/hooks/ContextApi/Home'
import { About } from './components/hooks/ContextApi/About'
import { Services } from './components/hooks/ContextApi/Services'
// import { ParentComponent } from './components/PropDrilling'
// import { UseId } from './components/hooks/useId'
// import { ForwardRef } from './components/hooks/useRef/ForwardRef'
// import { UseRef } from './components/hooks/useRef'
// import { HowNotToFetchApi } from './components/hooks/useEffect/HowNotToFetchApi'
// import { CleanUp } from './components/hooks/useEffect/CleanUp'
// import { EffectChallenge } from './components/hooks/useEffect/EffectChallenge'
// import { ContactForm } from './components/hooks/ContactForm'
// import { RegistrationFormReact } from './components/hooks/RegistrationReact'
// import { LoginForm } from './components/hooks/LoginForm'
// import { Registration } from './components/hooks/Registration'
// import { ControlledComponent } from './components/Controlled'
// import { Challenge } from './components/hooks/useState/Challenge'
// import { UncontrolledComponent } from './components/Uncontrolled'
// import { Counter } from './components/hooks/useState'
// import {App} from './App.jsx'
// import { EventHandling } from './components/EventHandling.jsx'
// import { Practices } from './Practice.jsx'

// import {EventProps} from "./components/EventProps.jsx"
// import { EventPropagation } from './components/EventPropagation.jsx'

// import { State } from './components/hooks/State'

// import { DerivedState } from './components/DerivedState'

// import { LiftingState } from './components/ListStateUp'

// import ShortCircuit from './components/hooks/ShortCircuit'
 
// import {ReactUseEffect} from "./components/hooks/useEffect/index.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Profile/> */}
    {/* <Practices /> */}

{/* <EventProps/> */}
  
{/* <EventPropagation/> */}
    {/* <EventHandling/> */}
 {/* <State/> */}
 {/* <DerivedState/> */}

   {/* <LiftingState/> */}

   {/* <ShortCircuit/> */}

   {/* <Counter/> */}

   {/* <Challenge/> */}

   {/* <UncontrolledComponent/> */}
   {/* <ControlledComponent/> */}

   {/* <Registration/> */}

   {/* <RegistrationFormReact/> */}

   {/* <ContactForm/> */}

   {/* <ReactUseEffect/> */}

   {/* <LoginForm/> */}

   {/* <EffectChallenge/> */}

   {/* <CleanUp/> */}
  
  {/* <HowNotToFetchApi/> */}

  {/* <UseRef/> */}

  {/* <ForwardRef/> */}

  {/* <UseId/> */}

  {/* <ParentComponent/> */}

  <BioProvider>
    <Home/>
    <About/>
    <Services/>
  </BioProvider>
 </StrictMode>
)
