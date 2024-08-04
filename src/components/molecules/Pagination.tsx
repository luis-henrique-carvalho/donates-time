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
    const maxPagesToShow = 3; // Número máximo de páginas visíveis ao redor da página atual
    const seriesNumbers = series.map(item => Number(item));

    // Determine os limites da série de páginas a serem exibidas
    const getVisiblePages = () => {
        const start = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
        const end = Math.min(totalPages, currentPage + Math.floor(maxPagesToShow / 2));

        // Ajusta para garantir que sempre mostre o número correto de páginas
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
                            href="#"
                            onClick={() => handlePageChange(currentPage - 1)}
                        />
                    </PaginationItem>
                )}
                {visiblePages[0] > 1 && (
                    <>
                        <PaginationItem>
                            <PaginationLink
                                href="#"
                                onClick={() => handlePageChange(1)}
                            >
                                First
                            </PaginationLink>
                        </PaginationItem>
                        {visiblePages[0] > 2 && (
                            <PaginationItem>
                                <PaginationLink
                                    href="#"
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
                            href="#"
                            onClick={() => handlePageChange(page)}
                            className={currentPage === page ? 'bg-primary' : ''}
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
                                    href="#"
                                    onClick={() => handlePageChange(visiblePages[visiblePages.length - 1] + 1)}
                                >
                                    ...
                                </PaginationLink>
                            </PaginationItem>
                        )}
                        <PaginationItem>
                            <PaginationLink
                                href="#"
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
                            href="#"
                            onClick={() => handlePageChange(currentPage + 1)}
                        />
                    </PaginationItem>
                )}
            </PaginationContent>
        </Pagination>
    );
};

export default PaginationComponent;
