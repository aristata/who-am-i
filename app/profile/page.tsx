import PrivateInformation from "@/components/profiles/01_PrivateInformation"
import Belief from "@/components/profiles/02_Belief"

const ProfilePage = () => {
  return (
    <>
      <div className="p-4">
        <PrivateInformation />
        <hr className="h-0.5 bg-gray-500 m-2" />
        <Belief />
      </div>
    </>
  )
}

export default ProfilePage
