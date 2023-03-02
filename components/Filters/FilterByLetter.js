import styles from './Filter.module.css'

let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

const FilterByLetter = ({filterOptions, handleClickAlert}) => {

    // extracting the filter option letters into an array
    const filterOptionLetters = []
    filterOptions.map(({ alphabet }) => {
        filterOptionLetters.push(alphabet);
    });
    
    // check if letter is part of the filter options
    const letterIsFilterOption = (letter) => {
        const uppercaseLetter = letter.toUpperCase();
        return filterOptionLetters.includes(letter) || filterOptionLetters.includes(uppercaseLetter);
    };

    const selectFilterOption = (clickedLetter) => {
        alphabet.map(( letter ) => {
            if (letter === clickedLetter){
                let clickedLetterDiv = document.getElementById(letter);
                if (!clickedLetterDiv.classList.contains(styles.filterOptionDisabled)){
                    clickedLetterDiv.classList.add(styles.filterOptionSelected);
                } 
            } else {
                let letterDiv = document.getElementById(letter);
                letterDiv.classList.remove(styles.filterOptionSelected);
            }
        })
    }
    
    return (
        <div>
            <div>
                {alphabet.map(( letter ) => (
                    <a 
                        href={`#${letter.toUpperCase()}`}
                        key={letter} >
                        <div 
                            id={letter}
                            className={letterIsFilterOption(letter) ? `${styles.filterOptionLetter} ${styles.filterOptionActive}` : `${styles.filterOptionLetter} ${styles.filterOptionDisabled}`} 
                            onClick={() => selectFilterOption(letter)}>
                                {letter}
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
};

export default FilterByLetter;