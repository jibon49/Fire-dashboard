

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    
    const getPageNumbers = () => {
        const pages = []
        
        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i)
            }
        } else {
            pages.push(1)
            if (currentPage > 3) {
                pages.push('...')
            }
            const start = Math.max(2, currentPage - 1)
            const end = Math.min(totalPages - 1, currentPage + 1)
            
            for (let i = start; i <= end; i++) {
                pages.push(i)
            }
            
            if (currentPage < totalPages - 2) {
                pages.push('...')
            }
            
            pages.push(totalPages)
        }
        
        return pages
    }
    
    return (
        <div className="join item-center mt-6 sm:mt-10 justify-center flex flex-wrap gap-1">
            <button 
                className="join-item btn btn-sm sm:btn-md bg-site-secondary border-none shadow-none text-[#0F62FE] text-xs sm:text-sm"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
               <span className="hidden sm:inline">&lt; Previous</span>
               <span className="sm:hidden">&lt; Prev</span>
            </button>
            
            {getPageNumbers().map((page, index) => (
                page === '...' ? (
                    <button key={`ellipsis-${index}`} className="join-item btn btn-sm sm:btn-md btn-disabled text-xs sm:text-sm">...</button>
                ) : (
                    <button
                        key={page}
                        className={`join-item btn btn-sm sm:btn-md text-xs sm:text-sm ${currentPage === page ? 'btn-active bg-[#A6C8FF] text-black' : 'bg-site-secondary text-[#0F62FE] border-none shadow-none'}`}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </button>
                )
            ))}
            
            <button 
                className="join-item btn btn-sm sm:btn-md bg-bg-component text-[#0F62FE] bg-site-secondary border-none shadow-none text-xs sm:text-sm"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next &gt;
            </button>
        </div>
    )
}

export default Pagination