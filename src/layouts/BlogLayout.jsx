import { Outlet } from 'react-router-dom';
import styles from './BlogLayout.module.scss';
import BlogSidebar from '../components/BlogSidebar';

function BlogLayout() {
  return (
    <div className={styles.layout}>
      <BlogSidebar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default BlogLayout;
