import { useEffect } from "react";
import { FlatList, Text, View } from "react-native";

import { useI18n } from "src/core/presentation/hooks/useI18n";
import PostItem from "../components/PostItem";
import { observer } from "mobx-react";
import { useGetPostsStore } from "../stores/GetPostsStore/useGetPostsStore";
import { withProviders } from "src/core/presentation/utils/withProviders";
import { GetPostsStoreProvider } from "../stores/GetPostsStore/GetPostsStoreProvider";

const PostsScreen = observer(() => {
  const i18n = useI18n();
  const getPostsStore = useGetPostsStore();
  const { isLoading, results } = getPostsStore;

  useEffect(() => {
    getPostsStore.getPosts();
  }, [getPostsStore]);

  return (
    <View>
      {isLoading ? (
        <Text>{i18n.t("post.screens.Posts.loading")}</Text>
      ) : (
        <FlatList
          data={results}
          renderItem={({ item }) => <PostItem post={item} />}
        />
      )}
    </View>
  );
});

export default withProviders(GetPostsStoreProvider)(PostsScreen);
