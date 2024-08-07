"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { IPagination } from "@/types/Pagination";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

interface PaginationProps {
  pagy: IPagination;
}

export default function Págination({ pagy }: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentPage = Number(searchParams.get("page")) || 1;

  const maxPagesToShow = 3;
  const { pages: totalPages } = pagy;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const navigateToPage = (pageNumber: number | string) => {
    router.push(createPageURL(pageNumber));
  };

  const getVisiblePages = () => {
    const start = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    const end = Math.min(
      totalPages,
      currentPage + Math.floor(maxPagesToShow / 2)
    );

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
        <PaginationItem>
          <PaginationPrevious
            onClick={() => currentPage > 1 && navigateToPage(currentPage - 1)}
            isActive={currentPage > 1}
          />
        </PaginationItem>

        {visiblePages[0] > 1 && (
          <>
            <PaginationItem>
              <PaginationLink onClick={() => navigateToPage(1)}>
                First
              </PaginationLink>
            </PaginationItem>
            {visiblePages[0] > 2 && (
              <PaginationItem>
                <PaginationLink
                  onClick={() => navigateToPage(visiblePages[0] - 1)}
                >
                  ...
                </PaginationLink>
              </PaginationItem>
            )}
          </>
        )}
        {visiblePages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              onClick={() => navigateToPage(page)}
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
                  onClick={() =>
                    navigateToPage(visiblePages[visiblePages.length - 1] + 1)
                  }
                >
                  ...
                </PaginationLink>
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationLink onClick={() => navigateToPage(totalPages)}>
                Last
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        <PaginationItem>
          <PaginationNext
            onClick={() =>
              currentPage < totalPages && navigateToPage(currentPage + 1)
            }
            isActive={currentPage < totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
