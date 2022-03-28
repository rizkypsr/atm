import { Link } from "react-router-dom"
import { Button } from "../components/Button"
import { Title } from "../components/Title"

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
      <Title name="Selamat Datang di ATM Bersama" />
      <Link to="/languages">
        <Button title="Masukkan Kartu" />
      </Link>
    </div>
  )
}
