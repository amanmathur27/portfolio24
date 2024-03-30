import { AboutComp, ContactComp, ProjectSection, Quote, Hero, SkillsComp } from '@/components'
import SkillCard from '@/components/SkillCard'

const page = () => {
  return (
    // <div className='sm:mx-16 mx-6 sm:my-16 my-16 sm:px-16 px-6 sm:py-5 py-4 flex flex-col items-center justify-center'>
    <div className='sm:mx-32 mx-6 sm:my-16 my-16 sm:px-16 px-6 sm:py-5 py-4 flex flex-col items-center justify-center'>
      <Hero/>
      <Quote/>
      <ProjectSection/>
      {/* <SkillsComp/> */}
      <AboutComp/>
      <ContactComp/>
    </div>
  )
}

export default page