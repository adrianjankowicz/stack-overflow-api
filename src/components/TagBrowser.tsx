import React, { useState, useEffect, useRef } from 'react';
import { api } from '../api/api';
import { Tag, TagsResponse } from '../types/Types';
import { Box, Flex } from '@chakra-ui/react';
import Pagination from './Pagination';
import TagsTable from './TagsTable';
import Filters from './Filters';

const MAX_PAGES_WITHOUT_TOKEN = 24 * 100

const TagsBrowser: React.FC = () => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [displayedTags, setDisplayedTags] = useState<Tag[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [allTagsLoaded, setAllTagsLoaded] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const lastPage = Math.ceil(MAX_PAGES_WITHOUT_TOKEN / pageSize);

  useEffect(() => setTags([]), []);

  useEffect(() => {
    const needMoreData = tags.length - 30 < page * pageSize && page * pageSize <= MAX_PAGES_WITHOUT_TOKEN && !allTagsLoaded && !error && !isFetching;

    if (page * pageSize > MAX_PAGES_WITHOUT_TOKEN) {
      setAllTagsLoaded(true);
      return
    } else {
      setAllTagsLoaded(false)
    };

    if (needMoreData) {
      setIsFetching(true);

      const nextPageNumber = Math.ceil(tags.length / 100) + 1;

      api.get<TagsResponse>('tags', {
        params: {
          order: sortOrder,
          sort: 'popular',
          site: 'stackoverflow',
          page: nextPageNumber,
          pagesize: 100,
        },
      })
        .then(response => {
          const newTags = response.data.items;
          const uniqueNewTags = newTags.filter(newTag => !tags.some(tag => tag.name === newTag.name));

          if (uniqueNewTags.length < 100) {
            setAllTagsLoaded(true);
          }

          setTags(prevTags => [...prevTags, ...uniqueNewTags]);
        })
        .catch(err => {
          const errorMessage = err.response.data.error_message || 'Failed to load tags. Please try again.';
          console.log(err)
          setError(errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1));
        })
        .finally(() => {
          setIsFetching(false);
          setIsLoading(false);
        });
    }
  }, [page, pageSize, sortOrder, tags, isFetching, allTagsLoaded, error]);



  useEffect(() => {
    const updateDisplayedTags = () => {
      const start = (page - 1) * pageSize;
      const newDisplayedTags = tags.slice(start, start + pageSize);
      setDisplayedTags(newDisplayedTags);
    };

    updateDisplayedTags();
  }, [tags, page, pageSize]);


  const handleSelectChange = (newValue: number | string, isPageSize: boolean) => {
    setIsLoading(true);
    setPage(1);
    setAllTagsLoaded(false);

    if (isPageSize) {
      setPageSize(Number(newValue));
    } else {
      setSortOrder(newValue as 'asc' | 'desc');
    }

    setTags([]);
  };

  const resetError = () => {
    setError('');
    setTags([]);
    setPage(1);
  };

  return (
    <Flex alignItems="center" justifyContent="center" pt='0'>
      <Box w={['sm', 'md', '3xl']}> {
        // 0px
        // ~480px. em is a relative unit and is dependant on the font-size.
        // ~768px
        // ~992px
        // ~1280px
        // ~1536px
      }
        <Filters pageSize={pageSize} sortOrder={sortOrder} handleSelectChange={handleSelectChange} />
        <TagsTable isLoading={isLoading} error={error} displayedTags={displayedTags} pageSize={pageSize} resetError={resetError} />
        <Pagination page={page} setPage={setPage} isLoading={isLoading} allTagsLoaded={allTagsLoaded} lastPage={lastPage} error={error} />

      </Box>
    </Flex>
  );
};

export default TagsBrowser;
