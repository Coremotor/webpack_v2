import { fetchPosts } from "modules/_shared/app/store/actions";
import { getPosts } from "modules/_shared/app/store/selectors";
import {
  useAppDispatch,
  useAppSelector,
} from "modules/_shared/root-store/hooks";
import { Button, List, Space, Text } from "modules/_shared/ui";
import { useTranslation } from "react-i18next";

import styles from "./main-screen.module.css";

export const MainScreen = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const posts = useAppSelector(getPosts);

  const fetch = () => dispatch(fetchPosts());

  return (
    <Space direction={"vertical"} className={styles.wrapper}>
      <div>{t("navigation.mainScreen")}</div>

      <List
        header={
          <header className={styles.header}>
            <Text>Список постов</Text>
            <Button onClick={fetch} type="primary">
              Fetch posts
            </Button>
          </header>
        }
        bordered
        dataSource={posts}
        renderItem={(post) => (
          <List.Item>
            <List.Item.Meta title={post.title} description={post.body} />
          </List.Item>
        )}
      />
    </Space>
  );
};

export default MainScreen;
