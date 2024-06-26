import React from "react"
import About from "@wkocjan/gatsby-theme-intro/src/components/about/about"
import ContactForm from "@wkocjan/gatsby-theme-intro/src/components/contact-form/contact-form"
import Skills from "@wkocjan/gatsby-theme-intro/src/components/skills/skills"
import Summary from "@wkocjan/gatsby-theme-intro/src/components/summary/summary"
import Tools from "@wkocjan/gatsby-theme-intro/src/components/tools/tools"
import WorkHistory from "@wkocjan/gatsby-theme-intro/src/components/work-history/work-history"

const MainContent = ({ formspreeEndpoint, history, projects, profile }) => {
  return (
    <main className="lg:w-2/3 lg:pl-8 xl:pl-12">
      <Summary profile={profile} />

      <div className="flex flex-wrap">
        <div className="md:w-3/4 pb-12 md:pr-8 lg:pr-12 xl:pr-20">
          {profile.skills && <Skills skills={profile.skills} />}
        </div>
        <div className="md:w-1/4 pb-12">
          {profile.tools && <Tools tools={profile.tools} />}
        </div>
      </div>

      {profile.about && <About about={profile.about} />}
      <WorkHistory history={history} />
      <ContactForm
        formspreeEndpoint={formspreeEndpoint}
        budget={profile.budget}
      />
    </main>
  )
}

export default MainContent
