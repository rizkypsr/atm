import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Alert } from "../components/Alert"
import { Card } from "../components/Card"
import { TextInput } from "../components/TextInput"
import { Title } from "../components/Title"
import { LocaleContext } from "../context/LocaleContext"

export const InputPin = () => {
  const navigate = useNavigate()
  const [pin, setPin] = useState()
  const [chance, setChance] = useState(3)
  const { t } = useContext(LocaleContext)

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (chance > 0) {
        if (checkPin(pin)) {
          navigate("/transactions")
        } else {
          setChance(chance - 1)
        }
      } else {
        alert("Kartu Anda Terblokir")
        navigate("/")
      }
    }
  }

  const checkPin = (pin) => {
    if (pin !== "123") {
      return false
    }
    return true
  }

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen space-y-8">
      {chance < 3 && <Alert title={t("wrongPin", { chance })} />}

      <Title name="inputPin" />

      <Card>
        <TextInput
          className="w-full"
          onKeyDown={handleKeyDown}
          onChange={(e) => setPin(e.target.value)}
        />
      </Card>

      <Title name="pressEnter" />
    </div>
  )
}
