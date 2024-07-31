import { FormEvent, useState } from 'react'

import { FormPesquisa, ButtonPesquisar, CampoPesquisar } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormPesquisa onSubmit={aoEnviarForm}>
      <CampoPesquisar
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <ButtonPesquisar type="submit">Pesquisar</ButtonPesquisar>
    </FormPesquisa>
  )
}
export default FormVagas
