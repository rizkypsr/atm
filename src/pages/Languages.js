import { Title } from "../components/Title"
import { Button } from "../components/Button"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

export const Languages = () => {
  const { i18n } = useTranslation()

  function changeLanguage(e) {
    i18n.changeLanguage(e.target.value)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
      <Title name="Silahkan Pilih Bahasa Anda" />
      <hr className="w-1/2 max-w-md border-2 border-dashed md:w-full" />
      <Title name="Please Select Your Language" />

      {/* <div className="flex-col w-full px-6 space-y-3 md:flex-row md:space-y-0"> */}
      {/* <div className="flex flex-col items-center w-full space-y-4 md:px-0 md:flex-row md:space-x-3 md:space-y-0"> */}
      <div className="flex flex-col items-center w-1/2 space-y-4 md:flex-row md:space-y-0 md:justify-between md:w-max md:space-x-3">
        <div className="w-full">
          <Link to="/pin">
            <Button title="Indonesia" onClick={changeLanguage} value="id" />
          </Link>
        </div>
        <div className="w-full">
          <Link to="/pin">
            <Button title="English" onClick={changeLanguage} value="en" />
          </Link>
        </div>
      </div>
    </div>
  )
}
