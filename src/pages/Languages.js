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
    <div className="relative flex flex-col items-center justify-center min-h-screen space-y-8">
      <Title name="Silahkan Pilih Bahasa Anda" />
      <hr className="w-full max-w-md border-2 border-dashed" />
      <Title name="Please Select Your Language" />

      <div className="flex space-x-3">
        <Link to="/pin">
          <Button title="Indonesia" onClick={changeLanguage} value="id" />
        </Link>
        <Link to="/pin">
          <Button title="English" onClick={changeLanguage} value="en" />
        </Link>
      </div>
    </div>
  )
}
