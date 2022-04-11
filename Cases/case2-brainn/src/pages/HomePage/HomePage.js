import { useEffect, useState } from "react"
import { getLotos, getNumbers, getResults } from "../../services/getApiResults"
import { timerPicker } from '../../services/timerPicker'
import { StyledNumbersBall, StyledPageContainer } from "./styled"


export const HomePage = () => {
    const [selected, set_selected] = useState({id: 0, nome: 'Mega Sena'})
    const [selectLoto, set_selectLoto] = useState([])
    const [selectLotoTypes, set_selectLogoTypes] = useState([])
    const [lotoNumbers, set_lotoNumbers] = useState([])

    useEffect(() => {
        getLotos(set_selectLoto)
        getResults('/loterias-concursos', set_selectLogoTypes)
    }, [selected])

    useEffect(() => {
        selectLotoTypes.filter((item) => {
            if(item.loteriaId === selected.id){
                getNumbers('/concursos/', set_lotoNumbers, item.concursoId)
            }
        })
    }, [selectLotoTypes])

    const renderSelected = selectLoto && selectLoto.map((item) => {
        return(
            <option key={item.id} value={item.id} name={item.name}>{item.nome.toUpperCase()}</option>
        )
    })

    const renderedNumbers = lotoNumbers && lotoNumbers.map((number) => {
        return(
            <StyledNumbersBall key={number}>
                <p>{number}</p>
            </StyledNumbersBall>
        )
    })

    const onChangeSelect = (event) => {
        selectLoto.filter((item) =>{
            if(event.target.value === item.id.toString()){
                set_selected({id: item.id, nome: item.nome.toUpperCase()})
            }
        })
    }

    return(
        <StyledPageContainer color={selected.id}>
            <div className="area-select">
                <select value onChange={onChangeSelect}>
                    <option disabled>SELECIONE</option>
                    {renderSelected}
                </select>
                <h1>🍀 {selected.nome}</h1>
                <div>
                    <h5> CONCURSO </h5>
                    <h4> {timerPicker('hour')}{timerPicker('min')} - {timerPicker('day')} </h4>
                </div>
            </div>

            <div className="area-results">
                <div className="area-results-balls">
                    {renderedNumbers}
                </div>

                <div>
                    <h5>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</h5>
                </div>
            </div>
        </StyledPageContainer>
    )
}

export default HomePage