import React, { useState } from 'react'

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('')
  
  return (
    <div className='mt-5 mb-3'>
      <form action="" onSubmit={(e) => {e.preventDefault(); onFormSubmit(term);}}>
        <div>
          <label htmlFor="term" className="form-label">Search YouTube Videos via API</label>
          <input placeholder="e.g. Lofi" type="text" id="term" className="form-control" value={term} onChange={(e) => setTerm(e.target.value)} />
        </div>
      </form>
    </div>
  )
}

export default SearchBar