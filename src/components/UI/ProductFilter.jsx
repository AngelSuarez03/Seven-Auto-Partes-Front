import "../../styles/UI/ProductFilterStyle.css"
import { useState } from "react";

function ProductFilter() {

    const [selectedPart, setSelectedPart] = useState('')
    const [selectedBrand, setSelectedBrand] = useState('')
    const [selectedModel, setSelectedModel] = useState('')
    const [selectedYear, setSelectedYear] = useState('')

    const handleChangePart = (e) => {
        setSelectedPart(e.target.value);
    }

    const handleChangeBrand = (e) => {
        setSelectedBrand(e.target.value);
    }

    const handleChangeModel = (e) => {
        setSelectedModel(e.target.value);
    }

    const handleChangeYear = (e) => {
        setSelectedYear(e.target.value);
    }

    return (

        <div className="filter-container">
            <h3>Filtrar Productos</h3>
            <br />
            <select
                className="combo-filter"
                value={selectedPart}
                onChange={handleChangePart}>
                <option value="">Seleccione la Pieza</option>
                <option value="frenos">Frenos</option>
                <option value="bujia">Bujia</option>
            </select>
            <select
                className="combo-filter"
                value={selectedBrand}
                onChange={handleChangeBrand}>
                <option value="">Seleccione la Marca</option>
                <option value="frenos">Toyota</option>
                <option value="bujia">Nissan</option>
            </select>
            <select
                className="combo-filter"
                value={selectedModel}
                onChange={handleChangeModel}>
                <option value="">Seleccione el Modelo</option>
                <option value="frenos">Tsuru</option>
                <option value="bujia">Miata</option>
            </select>
            <select 
                className="combo-filter"
                value={selectedYear} 
                onChange={handleChangeYear}>
                <option value="">Selecciona un año</option>
                {Array.from({ length: 101 }, (_, i) => 2025 - i).map((year) => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </select>

            <button className="button-search-filter">Buscar</button>
            
        </div>

    )
}

export default ProductFilter;