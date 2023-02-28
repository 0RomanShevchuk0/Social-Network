import { useEffect, useState } from 'react';

import doubleLeft from '../../assets/img/double-left.png';
import disabledDoubleLeft from '../../assets/img/disabled-double-left.png';
import doubleRight from '../../assets/img/double-right.png';

import styles from './Pagination.module.scss'


const Pagination = ({portionSize, ...props}) => {

	let pagesCount = Math.ceil(props.totalCount / props.pageSize);
	let pages = [];
	for(let i = 1; i < pagesCount; i++) {
		pages.push(i);
	}

	let [portion, setPortion] = useState([]);
	
	let pagination = portion.map(pageNumber => 
		<span key={pageNumber}
		className={props.currentPage === pageNumber ?
			[styles.pagination, styles.currentPage].join(" ") : styles.pagination}
			onClick={() => props.onPageChange(pageNumber)}>
			{pageNumber}
		</span>
	);

	useEffect(() => {
		if(props.currentPage > portionSize / 2) {
			setPortion(pages.filter(p => p > props.currentPage - portionSize / 2 && p < props.currentPage + portionSize / 2))
		}
		else{
			setPortion(pages.filter(p => p < portionSize))
		}
	}, [props.currentPage, props.totalCount]);
	
	if(portion.length === 0) return null;
	return (
		<div className={styles.paginationContainer}>
			{portion[0] < portionSize ?
			<button className={styles.navigate} disabled>
				<img src={disabledDoubleLeft} className={styles.navigateArrow} alt="prev" />
			</button> :
			<button className={styles.navigate} onClick={() => setPortion(prev => prev.map(p => p - 10))}>
				<img src={doubleLeft} className={styles.navigateArrow} alt="prev" />
			</button>
			}
			{pagination}
			<button className={styles.navigate} onClick={() => setPortion(prev => prev.map(p => p + 10))}>
				<img src={doubleRight} className={styles.navigateArrow} alt="next" />
			</button>
		</div>
	)
}

export default Pagination;