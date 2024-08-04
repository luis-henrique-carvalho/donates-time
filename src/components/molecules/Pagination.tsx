import React from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    handlePageChange: (page: number) => void;
    series: (string | number)[];
}

const PaginationComponent: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    handlePageChange,
    series
}) => {
    const maxPagesToShow = 3;

    const getVisiblePages = () => {
        const start = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
        const end = Math.min(totalPages, currentPage + Math.floor(maxPagesToShow / 2));

        const pages = [];
        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
        return pages;
    };

    const visiblePages = getVisiblePages();

    return (
        <Pagination>
            <PaginationContent>
                {currentPage > 1 && (
                    <PaginationItem>
                        <PaginationPrevious
                            onClick={() => handlePageChange(currentPage - 1)}
                        />
                    </PaginationItem>
                )}
                {visiblePages[0] > 1 && (
                    <>
                        <PaginationItem>
                            <PaginationLink
                                onClick={() => handlePageChange(1)}
                            >
                                First
                            </PaginationLink>
                        </PaginationItem>
                        {visiblePages[0] > 2 && (
                            <PaginationItem>
                                <PaginationLink
                                    onClick={() => handlePageChange(visiblePages[0] - 1)}
                                >
                                    ...
                                </PaginationLink>
                            </PaginationItem>
                        )}
                    </>
                )}
                {visiblePages.map(page => (
                    <PaginationItem key={page}>
                        <PaginationLink
                            onClick={() => handlePageChange(page)}
                            isActive={currentPage === page}
                        >
                            {page}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                {visiblePages[visiblePages.length - 1] < totalPages && (
                    <>
                        {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
                            <PaginationItem>
                                <PaginationLink
                                    onClick={() => handlePageChange(visiblePages[visiblePages.length - 1] + 1)}
                                >
                                    ...
                                </PaginationLink>
                            </PaginationItem>
                        )}
                        <PaginationItem>
                            <PaginationLink
                                onClick={() => handlePageChange(totalPages)}
                            >
                                Last
                            </PaginationLink>
                        </PaginationItem>
                    </>
                )}
                {currentPage < totalPages && (
                    <PaginationItem>
                        <PaginationNext
                            onClick={() => handlePageChange(currentPage + 1)}
                        />
                    </PaginationItem>
                )}
            </PaginationContent>
        </Pagination>
    );
};

export default PaginationComponent;
