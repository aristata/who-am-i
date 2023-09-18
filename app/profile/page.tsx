import PrivateInformation from "@/components/profiles/01_privateInformation"
import Belief from "@/components/profiles/02_belief"
import Career from "@/components/profiles/03_career"
import Project from "@/components/profiles/04_project"

const ProfilePage = () => {
  return (
    <>
      <div className="p-4">
        <PrivateInformation />
        <hr className="h-0.5 bg-gray-500 m-2" />
        <Belief />
        <hr className="h-0.5 bg-gray-500 m-2" />
        <Career />
        <hr className="h-0.5 bg-gray-500 m-2" />
        <Project />
      </div>
    </>
  )
}

export default ProfilePage
