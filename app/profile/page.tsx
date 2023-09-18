import PrivateInformation from "@/components/profiles/01_PrivateInformation"
import Belief from "@/components/profiles/02_Belief"
import Career from "@/components/profiles/03_career"

const ProfilePage = () => {
  return (
    <>
      <div className="p-4">
        <PrivateInformation />
        <hr className="h-0.5 bg-gray-500 m-2" />
        <Belief />
        <hr className="h-0.5 bg-gray-500 m-2" />
        <Career />
      </div>
    </>
  )
}

export default ProfilePage
