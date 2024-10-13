import React from 'react'
import style from './CigaretteForm.module.css'

export default function CigaretteForm() {
    return (
        <form className={`text-start w-50 m-auto mt-5 ${style.CigaretteFormAnimation}`}>

            <label className='text-start mt-2 mb-2 text-muted' htmlFor="">Number of cigarettes smoked per day?</label>
            <input className='form-control' type="text" />

            <label className='text-start mt-2 mb-2 text-muted' htmlFor="">How long you have been smoking?</label>
            <input className='form-control' type="text" />

            <label className='text-start mt-2 mb-2 text-muted' htmlFor="">How much does a pack of cigarettes cost?</label>
            <input className='form-control' type="text" />

            <label className='text-start mt-2 mb-2 text-muted' htmlFor="">Select your motivation level.</label>
            <select className='form-select' name="" id="">
                <option value="">Low</option>
                <option value="">Medium</option>
                <option value="">High</option>
            </select>

        </form>
    )
}
