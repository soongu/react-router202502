import styles from './BlogFilter.module.scss';

import { categories } from '../assets/dummy-data';
import { useSearchParams } from 'react-router-dom';

const BlogFilter = () => {

  const [searchParams, setSearchParams] = useSearchParams();
 
  // 카테고리 옵션 선택 이벤트
  const handleCategoryChange = e => { 
    // 카테고리를 선택하면 option태그의 value를 읽어서
    // 쿼리스트링으로 ?category=react 만들어줘야함
    setSearchParams(prev => {
      prev.set('category', e.target.value);
      return prev;
    });
  };

  return (
    <div className={styles.filter}>
      <select
        onChange={handleCategoryChange}
        value={searchParams.get('category') || 'all'}
      >
        {
          categories.map(({ id, name }) => <option key={id} value={id}>{ name }</option>)
        }
      </select>

      <select>
        <option value='latest'>최신순</option>
        <option value='oldest'>오래된순</option>
      </select>

      <input
        type='text'
        placeholder='검색어를 입력하세요'
      />
    </div>
  );
}

export default BlogFilter;
