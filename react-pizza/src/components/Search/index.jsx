import React from "react";
import debounce from 'lodash.debounce';
import styles from './Search.module.scss';
import { SearchContext } from "../../App";



const Search = () => {
  const [value, setValue] = React.useState('')
  const {setSearchValue} = React.useContext(SearchContext);
  const inputRef = React.useRef()


  const onClickClear = () => {
    setSearchValue('');
    setValue('')
    inputRef.current.focus()
  }

  const updateSearchValue = React.useCallback(
    debounce((str) => {
    setSearchValue(str)
      }, 300),
    [],
  )

  const onChangeInput = (event) => {
    setValue(event.target.value)
    updateSearchValue(event.target.value)
  }


  return (
    <div className={styles.root}>
      <svg 
      className={styles.icon}
      id="Layer_1" 
      enableBackground="new 0 0 512 512;" 
      version="1.1" viewBox="0 0 512 512"  
      xmlSpace="preserve" 
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
        <path d="M344.5,298c15-23.6,23.8-51.6,23.8-81.7c0-84.1-68.1-152.3-152.1-152.3C132.1,64,64,132.2,64,216.3  c0,84.1,68.1,152.3,152.1,152.3c30.5,0,58.9-9,82.7-24.4l6.9-4.8L414.3,448l33.7-34.3L339.5,305.1L344.5,298z M301.4,131.2  c22.7,22.7,35.2,52.9,35.2,85c0,32.1-12.5,62.3-35.2,85c-22.7,22.7-52.9,35.2-85,35.2c-32.1,0-62.3-12.5-85-35.2  c-22.7-22.7-35.2-52.9-35.2-85c0-32.1,12.5-62.3,35.2-85c22.7-22.7,52.9-35.2,85-35.2C248.5,96,278.7,108.5,301.4,131.2z"/></svg>
    <input  
    ref={inputRef}
    value={value}
    onChange={onChangeInput}
    className={styles.input}
    placeholder="Search pizza..." 
    
    />
   {value && ( 
    <svg 
    onClick={onClickClear}
    className={styles.clearIcon} 
    xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
    <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>
    </svg>
    )}
    </div>
  )
}

export default Search;