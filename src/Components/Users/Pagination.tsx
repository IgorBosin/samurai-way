import React, {useState, useEffect} from 'react';

type propstType = {
    currentPage: number
    totalPages: number
    onPageChange: (pageNumber: number) => void
}

const Pagination = ({currentPage, totalPages, onPageChange}: propstType) => {
    const [visiblePages, setVisiblePages] = useState<number[]>([]);
    const pageNumbers = Array.from({length: totalPages}, (item, index) => index + 1);

    useEffect(() => {
        // Вычисляем диапазон видимых страниц в зависимости от текущей страницы
        const startPage = Math.max(1, currentPage - 4);
        const endPage = Math.min(totalPages, currentPage + 5);
        setVisiblePages(pageNumbers.slice(startPage - 1, endPage));
    }, [currentPage, totalPages]);

    const handleLastPageClick = () => {
        onPageChange(totalPages);
    };

    return (
        <div className="pagination">
            <button onClick={() => onPageChange(1)}>First</button>
            {visiblePages.map((pageNumber) => (
                <button
                    disabled={pageNumber === currentPage}
                    key={pageNumber}
                    onClick={() => onPageChange(pageNumber)}
                >
                    {pageNumber}
                </button>
            ))}
            <button onClick={handleLastPageClick}>Last</button>
        </div>
    );
};

export default Pagination;