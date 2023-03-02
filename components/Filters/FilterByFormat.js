import styles from './Filter.module.css'

const FilterByFormat = ({ availableFilterOptions, filterPosts, selectedFormat }) => {

    // extracting the filter option letters into an array
    const filterOptionFormats = []
    availableFilterOptions.map(({ format }) => {
        filterOptionFormats.push(format);
    });
    
    return (
        <div>
            <div>
                <div
                    id='allFormats'
                    className={`${styles.filterOption} ${styles.filterOptionActive} ${styles.filterOptionSelected}`} 
                    onClick={() => filterPosts()}
                >
                ALLE FORMATE
                </div>
                {availableFilterOptions.map(( filterOption ) => (
                    <div 
                        key={filterOption.format}
                        id={filterOption.format}
                        className={`${styles.filterOption} ${styles.filterOptionActive}`} 
                        onClick={() => filterPosts(filterOption.format)}
                        >
                            {filterOption.format}
                    </div>
                ))}
            </div>
        </div>
    )
};

export default FilterByFormat;