export interface Tag {
    name: string;
    count: number;
    is_required: boolean;
  }
  
export interface TagsResponse {
    items: Tag[];
    has_more: boolean;
    quota_max: number;
    quota_remaining: number;
  }
  
  export interface PaginationProps {
    page: number;
    setPage: (page: number) => void;
    isLoading: boolean;
    allTagsLoaded: boolean;
    lastPage: number;
    error: string;
  }
  
  export interface TagsTableProps {
    isLoading: boolean;
    error: string;
    displayedTags: Tag[];
    pageSize: number;
    resetError: () => void;
  }
  
  export interface FiltersProps {
    pageSize: number;
    sortOrder: 'asc' | 'desc';
    handleSelectChange:(newValue: number | string, isPageSize: boolean) => void;
  }